import '../assets/homepage.css';
import { ScrollLink } from './scrolling';
import React, { useEffect, useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import resumePDF from '../assets/Rhodus,K_Resume.pdf';
import ExperienceSection from './experience';
import ProjectSection from './projects';
import ContactSection from './contactMe';

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
        
        //top of the page or home section
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
        <div className='hero-content'>
        <h1>Hello, I'm Kylie Rhodus!</h1>
        <p className="subtitle">Software Developer and Cloud Engineer</p>

      <div className='ref-links'>
        <button className='github'>
          <a href="https://github.com/kyliem41" target='_blank' rel='noopener noreferrer'>
            GitHub
            <FaGithub className="button-icon" />
          </a>
        </button>
        <button className='linkedin'>
          <a href="https://www.linkedin.com/in/kylie-rhodus/" target="_blank" rel="noopener noreferrer">
            LinkedIn
            <FaLinkedinIn className="button-icon" />
          </a>
        </button>
        <button className='resume'>
          <a href={resumePDF} download="Kylie_Rhodus_Resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
            <FaFileDownload className="button-icon" />
          </a>
        </button>
      </div>
      </div>
      </div>
      
      <div className="content-section">
        
        <ExperienceSection />
        
        <ProjectSection />

        <ContactSection />
      </div>
    </div>
  );
};

export default HomePage;