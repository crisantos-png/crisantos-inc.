
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getPostBySlug, createPost, updatePost } from '@/services/blogService';
import { isAdminLoggedIn } from '@/services/authService';
import { BlogPost } from '@/types/blog';
import { useToast } from '@/components/ui/use-toast';

const BlogEditor = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    coverImage: '',
    date: new Date().toISOString().split('T')[0],
    author: {
      name: 'Crisantos',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80'
    },
    tags: [],
    readTime: '5 min read'
  });

  const [tagInput, setTagInput] = useState('');

  useEffect(() => {
    // Check if admin is logged in
    if (!isAdminLoggedIn()) {
      navigate('/admin/login');
      return;
    }

    // Load post data if in edit mode
    if (isEditMode && id) {
      const post = getPostBySlug(id);
      if (post) {
        setFormData(post);
      } else {
        toast({
          title: "Post not found",
          description: "The blog post you're trying to edit could not be found.",
          variant: "destructive"
        });
        navigate('/admin/dashboard');
      }
    }
  }, [isEditMode, id, navigate, toast]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name === 'title' && !isEditMode) {
      // Auto-generate slug from title
      const slug = value.toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      
      setFormData(prev => ({ ...prev, slug, title: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleAddTag = () => {
    if (!tagInput.trim()) return;
    
    setFormData(prev => ({
      ...prev,
      tags: [...(prev.tags || []), tagInput.trim()]
    }));
    
    setTagInput('');
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: (prev.tags || []).filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Calculate read time based on content length
    const words = formData.content?.split(/\s+/).length || 0;
    const readTime = `${Math.max(1, Math.round(words / 200))} min read`;
    
    // Update read time
    const postWithReadTime = {
      ...formData,
      readTime
    } as BlogPost;
    
    if (isEditMode && id) {
      updatePost(id, postWithReadTime);
      toast({
        title: "Post updated",
        description: "The blog post has been successfully updated.",
      });
    } else {
      createPost(postWithReadTime as Omit<BlogPost, 'id'>);
      toast({
        title: "Post created",
        description: "The blog post has been successfully created.",
      });
    }
    
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <Button variant="outline" onClick={() => navigate('/admin/dashboard')}>
            Cancel
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Post Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">
                  Title
                </label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="slug" className="text-sm font-medium">
                  Slug
                </label>
                <Input
                  id="slug"
                  name="slug"
                  value={formData.slug}
                  onChange={handleChange}
                  readOnly={!isEditMode}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="excerpt" className="text-sm font-medium">
                  Excerpt
                </label>
                <Textarea
                  id="excerpt"
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  required
                  rows={2}
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">
                  Content (HTML)
                </label>
                <Textarea
                  id="content"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                  rows={10}
                  className="font-mono"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="coverImage" className="text-sm font-medium">
                  Cover Image URL
                </label>
                <Input
                  id="coverImage"
                  name="coverImage"
                  value={formData.coverImage}
                  onChange={handleChange}
                  required
                />
                {formData.coverImage && (
                  <div className="mt-2 aspect-video w-full max-w-sm overflow-hidden rounded-md bg-muted">
                    <img 
                      src={formData.coverImage} 
                      alt="Cover preview" 
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80';
                      }}
                    />
                  </div>
                )}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Tags
                </label>
                <div className="flex gap-2">
                  <Input
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="Add a tag"
                    className="flex-grow"
                  />
                  <Button 
                    type="button" 
                    onClick={handleAddTag}
                    variant="secondary"
                  >
                    Add
                  </Button>
                </div>
                {formData.tags && formData.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.tags.map((tag, index) => (
                      <div 
                        key={index} 
                        className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm flex items-center gap-1"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="text-secondary-foreground/70 hover:text-secondary-foreground ml-1 h-4 w-4 rounded-full flex items-center justify-center"
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <Button type="submit" className="w-full">
                {isEditMode ? 'Update Post' : 'Create Post'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BlogEditor;
