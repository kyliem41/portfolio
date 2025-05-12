import React from 'react';
import '../assets/experience.css';
import { FaBriefcase } from 'react-icons/fa';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience">
      <h2>Experience</h2>
      
      <div className="timeline-container">
        {/* First job - Right side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-right">
            <div className="timeline-role">Cross-Platform Engineer</div>
            <div className="timeline-company">Iamai-Core</div>
            <div className="timeline-description">
              <p>- Guaranteed seamless application compatibility across diverse platforms and devices.</p>
              <p>- Expertly debugged and resolved complex cross-platform application issues.</p>
              <p>- Maintained cutting-edge knowledge of evolving technology trends in cross-platform development.</p>
              <p>- Customized an AI chatbot for enhanced user interaction and engagement.</p>
              <p>- Automate and improve development and release processes.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">March 2025 - Present</div>
        </div>
        
        {/* Second job - Left side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-left">
            <div className="timeline-role">AI Software Engineer</div>
            <div className="timeline-company">Source for Training</div>
            <div className="timeline-description">
              <p>- Engineered an innovative AI-driven platform to optimize recruitment and admissions workflows for educational institutions.</p>
              <p>- Leveraged cutting-edge technologies, including Python, AWS, PostgreSQL, React, and OpenAI, to deliver a robust product.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">January 2025 - March 2025</div>
        </div>
        
        {/* Third job - Right side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-right">
            <div className="timeline-role">Full Stack Developer</div>
            <div className="timeline-company">GearSwap - Neumont Senior Capstone Project</div>
            <div className="timeline-description">
              <p>- Developed an innovative online thrift shopping platform enabling user-driven buying and selling of pre-owned apparel.</p>
              <p>- Integrated a bespoke AI Stylist feature, enhancing personalized shopping experiences.</p>
              <p>- Utilized cutting-edge technologies including Python, AWS, PostgreSQL, Flutter, OpenAI, and Docker.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">September 2024 - December 2024</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;