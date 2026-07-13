import { useState, useEffect } from 'react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: 'home', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Research' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark/95 backdrop-blur-md shadow-xl border-b border-slate-800' : 'bg-dark/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl hover:text-primary transition-colors"
          >
            👨‍💻
          </button>

          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-body text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-primary'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://github.com/Kaoserahamed/Portfolio/blob/main/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-blue-600 transition-all hover:scale-105"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
