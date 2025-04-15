
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const EcommerceProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">E-commerce Platform</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge>React</Badge>
                <Badge>Node.js</Badge>
                <Badge>MongoDB</Badge>
                <Badge>Stripe</Badge>
                <Badge>Redux</Badge>
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80" 
                alt="E-commerce Platform Screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A comprehensive e-commerce solution featuring product browsing, cart functionality, 
                  user reviews, and secure payment processing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                    <p className="text-muted-foreground">
                      Implementing real-time inventory tracking and ensuring a seamless checkout 
                      experience across different payment methods.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Solutions</h3>
                    <p className="text-muted-foreground">
                      Leveraged WebSockets for real-time inventory updates and built a modular payment 
                      processing system that handles multiple payment providers.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  <li>User authentication and profile management</li>
                  <li>Product catalog with search and filtering</li>
                  <li>Shopping cart and wishlist functionality</li>
                  <li>Secure payment processing with Stripe</li>
                  <li>Order history and tracking</li>
                  <li>Real-time inventory management</li>
                  <li>Responsive design for all devices</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <p className="text-muted-foreground mb-4">
                  The frontend is built with React and Redux for state management, with a focus 
                  on reusable components and optimized performance. The backend uses Node.js and 
                  Express, with MongoDB for data storage. Stripe handles payment processing, and 
                  WebSockets enable real-time updates.
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

export default EcommerceProject;
