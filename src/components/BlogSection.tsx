
import { ArrowRight } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  tags: string[];
  readTime: string;
  image: string;
}

const BlogSection = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2025",
      excerpt: "Explore emerging technologies and methodologies that are shaping the future of web development.",
      date: "April 10, 2025",
      tags: ["Web Development", "Trends", "Technology"],
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 2,
      title: "Building Accessible Web Applications: A Comprehensive Guide",
      excerpt: "Learn how to create inclusive web experiences that work for everyone, regardless of abilities.",
      date: "March 22, 2025",
      tags: ["Accessibility", "UX Design", "HTML"],
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: 3,
      title: "Performance Optimization Techniques for Modern Web Apps",
      excerpt: "Discover practical strategies to improve loading speeds and overall performance of your web applications.",
      date: "February 15, 2025",
      tags: ["Performance", "Optimization", "JavaScript"],
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80"
    }
  ];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={post.image} 
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
                <a 
                  href="#" 
                  className="text-blue hover:text-blue-dark flex items-center transition-colors"
                >
                  Read More <ArrowRight size={16} className="ml-2" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="flex justify-center">
          <a 
            href="#" 
            className="text-blue hover:text-blue-dark flex items-center text-lg font-medium transition-colors"
          >
            View All Articles <ArrowRight size={20} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
