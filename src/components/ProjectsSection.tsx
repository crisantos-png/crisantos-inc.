
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  detailedDescription: string;
  challenges: string;
  solutions: string;
  projectPath: string;
}

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  
  const projects: Project[] = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully functional online store with shopping cart, payment integration and user authentication.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80",
      category: ["fullstack", "frontend"],
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      detailedDescription: "A comprehensive e-commerce solution featuring product browsing, cart functionality, user reviews, and secure payment processing.",
      challenges: "Implementing real-time inventory tracking and ensuring a seamless checkout experience across different payment methods.",
      solutions: "Leveraged WebSockets for real-time inventory updates and built a modular payment processing system that handles multiple payment providers.",
      projectPath: "/projects/ecommerce"
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A personal portfolio showcasing my skills and projects with a modern design and smooth animations.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
      category: ["frontend"],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      detailedDescription: "A sleek, responsive portfolio website with interactive elements, smooth transitions, and optimized performance.",
      challenges: "Creating a visually striking yet performant site with complex animations and responsive design across all devices.",
      solutions: "Utilized code-splitting, lazy loading, and optimized animations with Framer Motion to maintain smooth performance while preserving visual fidelity.",
      projectPath: "/projects/portfolio"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A productivity tool that helps users manage tasks, set deadlines and track progress.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      category: ["fullstack", "mobile"],
      technologies: ["React Native", "Firebase", "Redux", "Express", "Node.js"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      detailedDescription: "A cross-platform task management application with features like drag-and-drop organization, notifications, and collaborative task sharing.",
      challenges: "Ensuring consistent user experience across different platforms while maintaining offline functionality and data synchronization.",
      solutions: "Implemented a robust offline-first architecture with background synchronization and platform-specific UI adaptations to maintain native feel on each platform.",
      projectPath: "/projects/task-management"
    },
    {
      id: 4,
      title: "Content Management System",
      description: "A custom CMS for managing digital content, user permissions and workflow automation.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80",
      category: ["backend", "fullstack"],
      technologies: ["Next.js", "PostgreSQL", "GraphQL", "AWS", "Docker"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      detailedDescription: "An enterprise-grade content management system with workflow approval processes, role-based access control, and content versioning.",
      challenges: "Building a flexible system that accommodates various content types while maintaining security and performance at scale.",
      solutions: "Designed a modular architecture with pluggable content types and implemented efficient caching strategies coupled with a robust permission system.",
      projectPath: "/projects/cms"
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.includes(filter));
    
  const openProjectModal = (project: Project) => {
    setSelectedProject(project);
  };
  
  const closeProjectModal = () => {
    setSelectedProject(null);
  };
  
  return (
    <section id="projects" className="section bg-secondary/50">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="mb-6">Featured <span className="text-red-gradient">Projects</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent work. Each project presented unique challenges and opportunities to learn and grow.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            onClick={() => setFilter("all")}
          >
            All
          </Button>
          <Button 
            variant={filter === "frontend" ? "default" : "outline"} 
            onClick={() => setFilter("frontend")}
          >
            Frontend
          </Button>
          <Button 
            variant={filter === "backend" ? "default" : "outline"} 
            onClick={() => setFilter("backend")}
          >
            Backend
          </Button>
          <Button 
            variant={filter === "fullstack" ? "default" : "outline"} 
            onClick={() => setFilter("fullstack")}
          >
            Full Stack
          </Button>
          <Button 
            variant={filter === "mobile" ? "default" : "outline"} 
            onClick={() => setFilter("mobile")}
          >
            Mobile
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="pt-6 flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="outline">{tech}</Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button onClick={() => openProjectModal(project)} variant="outline" className="flex-1">
                  Quick View
                </Button>
                <Button 
                  variant="default"
                  className="flex-1"
                  onClick={() => window.location.href = project.projectPath}
                >
                  View Project
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      
      <Dialog open={selectedProject !== null} onOpenChange={closeProjectModal}>
        {selectedProject && (
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
              <DialogDescription>
                {selectedProject.description}
              </DialogDescription>
            </DialogHeader>
            
            <div className="grid gap-6">
              <div className="aspect-video overflow-hidden rounded-md bg-muted">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Project Overview</h4>
                <p className="text-muted-foreground">{selectedProject.detailedDescription}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Challenges</h4>
                  <p className="text-muted-foreground">{selectedProject.challenges}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solutions</h4>
                  <p className="text-muted-foreground">{selectedProject.solutions}</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <Badge key={index}>{tech}</Badge>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={selectedProject.projectPath} className="flex-1">
                  <Button className="w-full">
                    View Full Project
                  </Button>
                </Link>
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Visit Live
                    </Button>
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className="w-full">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Button>
                  </a>
                )}
              </div>
            </div>
            
            <DialogClose className="absolute top-4 right-4">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
