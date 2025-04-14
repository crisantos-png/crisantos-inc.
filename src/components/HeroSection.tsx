
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-red/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="animate-slideDown opacity-0 [animation-delay:200ms]">
            <span className="text-gold-gradient">Hello, I'm Crisantos</span>
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-6 mb-8 animate-slideDown opacity-0 [animation-delay:400ms]">
            I build <span className="text-blue-gradient">exceptional</span> digital experiences for the <span className="text-red-gradient">web</span>.
          </h2>
          <p className="text-xl text-silver-dark mb-10 max-w-2xl mx-auto animate-slideDown opacity-0 [animation-delay:600ms]">
            Full-stack web developer passionate about crafting modern, 
            responsive, and user-friendly web applications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slideDown opacity-0 [animation-delay:800ms]">
            <Button 
              size="lg" 
              className="bg-blue hover:bg-blue-dark text-white px-8 py-6 rounded-md"
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-6 rounded-md"
              onClick={() => scrollToSection('#contact')}
            >
              Contact Me
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            aria-label="Scroll down" 
            className="text-silver hover:text-blue transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#about');
            }}
          >
            <ArrowDown size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
