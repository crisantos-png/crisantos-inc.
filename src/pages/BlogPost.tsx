
import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '@/services/blogService';
import { BlogPost as BlogPostType } from '@/types/blog';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = getPostBySlug(slug || '');
  const relatedPosts = post ? getRelatedPosts(post.id, 2) : [];
  
  useEffect(() => {
    // Redirect to blog page if post not found
    if (!post && slug) {
      navigate('/blog');
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-blue mb-6 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" /> Back to all articles
            </Link>
            
            <article>
              <header className="mb-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                </div>
                
                <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                
                <div className="flex items-center text-sm text-muted-foreground space-x-4 mb-6">
                  <div className="flex items-center">
                    <User size={16} className="mr-2" />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    <time dateTime={post.date}>{post.date}</time>
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted mb-8">
                  <img 
                    src={post.coverImage} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </header>
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="border-t border-b border-border py-8 my-8">
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Written by {post.author.name}</h3>
                    <p className="text-muted-foreground">
                      Web Developer & Designer specializing in modern web technologies.
                    </p>
                  </div>
                </div>
              </div>
            </article>
            
            {relatedPosts.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <RelatedPostCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const RelatedPostCard = ({ post }: { post: BlogPostType }) => {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="flex flex-col md:flex-row h-full">
        <div className="md:w-1/3 aspect-square md:aspect-auto overflow-hidden bg-muted">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="md:w-2/3 flex flex-col">
          <CardHeader className="flex-grow p-4">
            <div className="text-sm text-muted-foreground mb-1">{post.readTime}</div>
            <h3 className="text-lg font-bold">{post.title}</h3>
          </CardHeader>
          <CardFooter className="p-4 pt-0">
            <Link
              to={`/blog/${post.slug}`}
              className="text-blue hover:text-blue-dark flex items-center text-sm transition-colors"
            >
              Read Article <ArrowRight size={14} className="ml-1" />
            </Link>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default BlogPost;
