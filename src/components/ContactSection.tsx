
import { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from "@/hooks/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        formData.append(key, value);
      });
      
      const response = await fetch('/submit-contact', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Failed to send",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
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
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="Project Inquiry" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Tell me about your project..." 
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-blue hover:bg-blue-dark text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
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
