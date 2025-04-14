
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gold-gradient mb-2">Crisantos<span className="text-blue-gradient">.dev</span></h3>
            <p className="text-muted-foreground">Building the web, one pixel at a time.</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" aria-label="Github" className="text-foreground hover:text-blue transition-colors">
                <Github size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-foreground hover:text-blue transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-foreground hover:text-blue transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:contact@example.com" aria-label="Email" className="text-foreground hover:text-blue transition-colors">
                <Mail size={24} />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Crisantos. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
