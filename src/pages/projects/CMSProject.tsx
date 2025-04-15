
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const CMSProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Content Management System</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge>Next.js</Badge>
                <Badge>PostgreSQL</Badge>
                <Badge>GraphQL</Badge>
                <Badge>AWS</Badge>
                <Badge>Docker</Badge>
              </div>
              <div className="flex justify-center gap-4 mb-8">
                <Button asChild>
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Live Site
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                alt="CMS Screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  An enterprise-grade content management system with workflow approval processes, 
                  role-based access control, and content versioning.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                    <p className="text-muted-foreground">
                      Building a flexible system that accommodates various content types while 
                      maintaining security and performance at scale.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Solutions</h3>
                    <p className="text-muted-foreground">
                      Designed a modular architecture with pluggable content types and implemented 
                      efficient caching strategies coupled with a robust permission system.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  <li>Custom content type definition</li>
                  <li>Role-based access control</li>
                  <li>Content versioning and rollback</li>
                  <li>Workflow approval processes</li>
                  <li>Multi-language support</li>
                  <li>Advanced asset management</li>
                  <li>API-first architecture with GraphQL</li>
                  <li>Real-time collaboration tools</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <p className="text-muted-foreground mb-4">
                  Built with Next.js for frontend and API routes, with PostgreSQL for relational data 
                  and GraphQL for flexible API access. Deployed on AWS using Docker containers and 
                  managed with Kubernetes for scalability. Implements JWT authentication and row-level 
                  security for content protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CMSProject;
