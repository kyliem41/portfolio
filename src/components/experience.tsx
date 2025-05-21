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
            <div className="timeline-description">
              <ul>
                <li><span>Guaranteed seamless application compatibility across diverse platforms and devices.</span></li>
                <li><span>Expertly debugged and resolved complex cross-platform application issues.</span></li>
                <li><span>Maintained cutting-edge knowledge of evolving technology trends in cross-platform development.</span></li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>

          <div className="date-container01">
            <span className="timeline-date-text">March 2025 - Present</span>
            <div className="timeline-company">Iamai-Core</div>
          </div>

        </div>
        
        {/* Second job - Left side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-left">
            <div className="timeline-role">AI Software Engineer</div>
            <div className="timeline-description">
              <ul>
                <li><span>Engineered an innovative AI-driven platform to optimize recruitment and admissions workflows for educational institutions.</span></li>
                <li><span>Leveraged cutting-edge technologies, including Python, AWS, PostgreSQL, React, and OpenAI, to deliver a robust product.</span></li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>

          <div className="date-container">
            <span className="timeline-date-text">January 2025 - March 2025</span>
            <div className="timeline-company">Source for Training</div>
          </div>

        </div>
        
        {/* Third job - Right side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-right">
            <div className="timeline-role">Full Stack Developer</div>
            <div className="timeline-description">
              <ul>
                <li><span>Developed an innovative online thrift shopping platform enabling user-driven buying and selling of pre-owned apparel.</span></li>
                <li><span>Integrated a bespoke AI Stylist feature, enhancing personalized shopping experiences.</span></li>
                <li><span>Utilized cutting-edge technologies including Python, AWS, PostgreSQL, Flutter, OpenAI, and Docker.</span></li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>

          <div className="date-container">
            <span className="timeline-date-text">September 2024 - December 2024</span>
            <div className="timeline-company">GearSwap -</div>
            <div className="timeline-company">Neumont Senior Capstone Project</div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;