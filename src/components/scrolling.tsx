import React from 'react';

interface ScrollLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export const ScrollLink: React.FC<ScrollLinkProps> = ({ to, children, className }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    
    const targetId = to.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.classList.remove('active');
      });
      e.currentTarget.classList.add('active');
      
      window.scrollTo({
        top: element.offsetTop - 100, // Adjusted offset for the navbar
        behavior: 'smooth'
      });
      
      // Update URL fragment
      window.history.pushState(null, '', to);
      
      // For Home section special handling
      if (targetId === 'home') {
        setTimeout(() => {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#home') {
              link.classList.add('active');
            }
          });
        }, 100);
      }
    }
  };

  return (
    <a href={to} className={className} onClick={handleScroll}>
      {children}
    </a>
  );
};