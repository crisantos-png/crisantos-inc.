
import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { isAdminLoggedIn } from '@/services/authService';

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    setIsAdmin(isAdminLoggedIn());
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavItemClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (isHomePage && href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-md shadow-md' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-gold-gradient">
            Crisantos<span className="text-blue-gradient">.dev</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="highlight-link font-medium"
                  onClick={(e) => handleNavItemClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))
            ) : (
              <>
                <Link to="/" className="highlight-link font-medium">Home</Link>
                <Link to="/blog" className="highlight-link font-medium">Blog</Link>
              </>
            )}
            {isAdmin && (
              <Link to="/admin/dashboard" className="highlight-link font-medium text-blue">
                Admin
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {isHomePage ? (
              navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-3 text-center font-medium hover:text-blue"
                  onClick={(e) => handleNavItemClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))
            ) : (
              <>
                <Link 
                  to="/" 
                  className="block py-3 text-center font-medium hover:text-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/blog" 
                  className="block py-3 text-center font-medium hover:text-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </>
            )}
            {isAdmin && (
              <Link 
                to="/admin/dashboard" 
                className="block py-3 text-center font-medium text-blue hover:text-blue-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
