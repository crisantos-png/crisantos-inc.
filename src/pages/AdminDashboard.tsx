
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllPosts, deletePost } from '@/services/blogService';
import { isAdminLoggedIn, logoutAdmin } from '@/services/authService';
import { BlogPost } from '@/types/blog';
import { Edit, Trash2, Plus, LogOut } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminDashboard = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if admin is logged in
    if (!isAdminLoggedIn()) {
      navigate('/admin/login');
      return;
    }

    // Load all posts
    setPosts(getAllPosts());
  }, [navigate]);

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const success = deletePost(id);
      if (success) {
        setPosts(getAllPosts());
        toast({
          title: "Post deleted",
          description: "The blog post has been successfully deleted.",
        });
      }
    }
  };

  const handleLogout = () => {
    logoutAdmin();
    toast({
      title: "Logged out",
      description: "You have been successfully logged out.",
    });
    navigate('/admin/login');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <div className="flex gap-4">
            <Button onClick={() => navigate('/admin/edit')}>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Blog Posts</CardTitle>
              <CardDescription>Manage your blog posts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <div key={post.id} className="border rounded-lg p-4 flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold text-lg">{post.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                          <span>{formatDate(post.date)}</span>
                          <span>•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={() => navigate(`/admin/edit/${post.id}`)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDelete(post.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground">No blog posts found.</p>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                variant="outline"
                onClick={() => navigate('/blog')}
                className="w-full"
              >
                View Blog
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
