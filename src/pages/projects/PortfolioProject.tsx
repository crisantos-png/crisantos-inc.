
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const PortfolioProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Portfolio Website</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge>React</Badge>
                <Badge>TypeScript</Badge>
                <Badge>Tailwind CSS</Badge>
                <Badge>Framer Motion</Badge>
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
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80" 
                alt="Portfolio Website Screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A sleek, responsive portfolio website with interactive elements, smooth transitions, 
                  and optimized performance.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                    <p className="text-muted-foreground">
                      Creating a visually striking yet performant site with complex animations 
                      and responsive design across all devices.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Solutions</h3>
                    <p className="text-muted-foreground">
                      Utilized code-splitting, lazy loading, and optimized animations with Framer Motion 
                      to maintain smooth performance while preserving visual fidelity.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  <li>Custom animations and transitions</li>
                  <li>Responsive design for all screen sizes</li>
                  <li>Project showcase with detailed case studies</li>
                  <li>Contact form with validation</li>
                  <li>Blog integration</li>
                  <li>Dark/light mode toggle</li>
                  <li>Optimized performance scoring 95+ on Lighthouse</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <p className="text-muted-foreground mb-4">
                  Built with React and TypeScript for type safety, with Tailwind CSS for styling. 
                  Framer Motion powers the animations, and the site uses React Router for navigation. 
                  The contact form integrates with a serverless function for email processing.
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

export default PortfolioProject;
