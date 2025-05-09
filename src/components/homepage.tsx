import '../assets/homepage.css';
import { ScrollLink } from './scrolling';
import React, { useEffect, useState } from 'react';

const HomePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleNavbarScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleNavbarScroll);
    
    return () => {
      window.removeEventListener('scroll', handleNavbarScroll);
    };
  }, []);

  useEffect(() => {
    const handleActiveSection = () => {
      const sections = document.querySelectorAll('section');
      const homeSection = document.getElementById('home');
      
      if (homeSection) {
        const homeSectionTop = homeSection.offsetTop;
        const homeSectionBottom = homeSectionTop + homeSection.offsetHeight;
        
        // If we're at the top of the page or within the home section
        if (window.scrollY < 100 || (window.scrollY >= homeSectionTop - 150 && window.scrollY < homeSectionBottom - 200)) {
          setActiveSection('home');
          updateActiveClass('home');
          return;
        }
      }
      
      let current = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        
        // When we're close to the top of a section (with some buffer for the navbar)
        if (window.scrollY >= sectionTop - 150 && window.scrollY < sectionTop + sectionHeight - 150) {
          current = sectionId;
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
        updateActiveClass(current);
      }
    };
    
    const updateActiveClass = (sectionId: string) => {
      const navLinks = document.querySelectorAll('.nav-links a');
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href')?.slice(1) === sectionId) {
          link.classList.add('active');
        }
      });
    };
    
    handleActiveSection();
    
    window.addEventListener('scroll', handleActiveSection);
    
    return () => {
      window.removeEventListener('scroll', handleActiveSection);
    };
  }, [activeSection]);
  
  return (
    <div className="home-container">
      {/* Centered, rounded navbar */}
      <div className="navbar">
        <div className="nav-links">
          <ScrollLink 
            to="#home" 
            className={activeSection === 'home' ? 'active' : ''}
          >
            Home
          </ScrollLink>

          <ScrollLink 
            to="#experience" 
            className={activeSection === 'experience' ? 'active' : ''}
          >
            Experience
          </ScrollLink>

          <ScrollLink 
            to="#skills" 
            className={activeSection === 'skills' ? 'active' : ''}
          >
            Skills
          </ScrollLink>

          <ScrollLink 
            to="#projects" 
            className={activeSection === 'projects' ? 'active' : ''}
          >
            Projects
          </ScrollLink>

          <ScrollLink 
            to="#contact" 
            className={activeSection === 'contact' ? 'active' : ''}
          >
            Contact
          </ScrollLink>
        </div>
      </div>
      
      <div className="hero-section" id="home">
        <h1>Hello, I'm Kylie Rhodus!</h1>
        <p className="subtitle">Software Developer and Cloud Engineer</p>
      </div>
      
      <div className="content-section">
        
        <section id="experience">
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Aenean et justo at enim posuere facilisis.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Aenean et justo at enim posuere facilisis.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
        </section>
        
        <section id="projects">
          <h2>Projects</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Aenean et justo at enim posuere facilisis.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
        </section>

        <section id="contact">
          <h2>Contact Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Aenean et justo at enim posuere facilisis.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Aenean et justo at enim posuere facilisis.</p>
          <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed aliquam, nisi quis porttitor congue, elit erat euismod orci, ac placerat dolor lectus quis orci.</p>
        </section>
      </div>
      
      {/* <footer>
        <p>&copy; 2025 Your Website. All Rights Reserved.</p>
      </footer> */}
    </div>
  );
};

export default HomePage;