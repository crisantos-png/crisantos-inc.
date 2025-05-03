
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { motion, AnimatePresence } from 'framer-motion';

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-16">
        <Tabs 
          value={activeTab} 
          onValueChange={handleTabChange}
          className="w-full"
        >
          <TabsList className="grid grid-cols-4 w-full max-w-3xl mx-auto mb-12">
            <TabsTrigger value="about">Skills</TabsTrigger>
            <TabsTrigger value="projects">Featured Projects</TabsTrigger>
            <TabsTrigger value="blog">Blog</TabsTrigger>
            <TabsTrigger value="contact">Contact Me</TabsTrigger>
          </TabsList>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 100, rotateY: 15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -100, rotateY: -15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="perspective-1000"
            >
              <TabsContent value="about" className="mt-0">
                <AboutSection />
              </TabsContent>
              
              <TabsContent value="projects" className="mt-0">
                <ProjectsSection />
              </TabsContent>
              
              <TabsContent value="blog" className="mt-0">
                <BlogSection />
              </TabsContent>
              
              <TabsContent value="contact" className="mt-0">
                <ContactSection />
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
