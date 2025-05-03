
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { getRecentPosts } from '@/services/blogService';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';

const BlogSection = () => {
  const blogPosts = getRecentPosts(3);

  return (
    <section id="blog" className="section">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="mb-6">Latest <span className="text-blue-gradient">Articles</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I write about web development, design patterns, and technology trends.
            Check out my latest thoughts and tutorials.
          </p>
        </div>
        
        <div className="relative px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {blogPosts.map((post) => (
                <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                    <div className="aspect-video w-full overflow-hidden bg-muted">
                      <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader className="flex-grow">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <time dateTime={post.date}>{post.date}</time>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                      <p className="text-muted-foreground">{post.excerpt}</p>
                    </CardHeader>
                    <CardContent className="pb-0">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag, index) => (
                          <Badge key={index} variant="outline">{tag}</Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-blue hover:text-blue-dark flex items-center transition-colors"
                      >
                        Read More <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
        
        <div className="flex justify-center">
          <Link
            to="/blog"
            className="text-blue hover:text-blue-dark flex items-center text-lg font-medium transition-colors"
          >
            View All Articles <ArrowRight size={20} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
