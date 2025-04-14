
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="mb-6">Get in <span className="text-gold-gradient">Touch</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm currently available for freelance work and open to new opportunities.
            If you have a project in mind or just want to say hello, feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Project Inquiry"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-blue hover:bg-blue-dark text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-blue/10 rounded-full p-3 mr-4">
                  <Mail className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:victorycrisantos0@gmail.com" className="text-muted-foreground hover:text-blue">
                    victorycrisantos0@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-red/10 rounded-full p-3 mr-4">
                  <Phone className="h-5 w-5 text-red" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+2347025615619" className="text-muted-foreground hover:text-red">
                    +234 7025615619
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-gold/10 rounded-full p-3 mr-4">
                  <Github className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">GitHub</h4>
                  <a href="https://github.com/crisantos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-gold">
                    github.com/crisantos
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-blue/10 rounded-full p-3 mr-4">
                  <Linkedin className="h-5 w-5 text-blue" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">LinkedIn</h4>
                  <a href="https://linkedin.com/in/crisantos" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-blue">
                    linkedin.com/in/crisantos
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center justify-center bg-silver/10 rounded-full p-3 mr-4">
                  <Twitter className="h-5 w-5 text-silver" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Twitter</h4>
                  <a href="https://twitter.com/crisantos_dev" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-silver">
                    @crisantos_dev
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
