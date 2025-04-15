
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const TaskManagementProject = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-6">Task Management App</h1>
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <Badge>React Native</Badge>
                <Badge>Firebase</Badge>
                <Badge>Redux</Badge>
                <Badge>Express</Badge>
                <Badge>Node.js</Badge>
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
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                alt="Task Management App Screenshot" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  A cross-platform task management application with features like drag-and-drop organization, 
                  notifications, and collaborative task sharing.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Challenges</h3>
                    <p className="text-muted-foreground">
                      Ensuring consistent user experience across different platforms while maintaining 
                      offline functionality and data synchronization.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Solutions</h3>
                    <p className="text-muted-foreground">
                      Implemented a robust offline-first architecture with background synchronization 
                      and platform-specific UI adaptations to maintain native feel on each platform.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">Key Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-8">
                  <li>Task creation and organization with drag-and-drop</li>
                  <li>Project grouping and prioritization</li>
                  <li>Due date reminders and notifications</li>
                  <li>Collaborative task sharing</li>
                  <li>Offline mode with background sync</li>
                  <li>Data visualization for productivity tracking</li>
                  <li>Cross-platform experience (iOS, Android, Web)</li>
                </ul>
                
                <h3 className="text-xl font-semibold mb-3">Technical Details</h3>
                <p className="text-muted-foreground mb-4">
                  Built with React Native for iOS and Android, with a React web version sharing the same 
                  core logic. Firebase handles authentication and real-time data storage, with a Node.js 
                  backend for more complex operations. Redux manages application state, with middleware 
                  for offline support.
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

export default TaskManagementProject;
