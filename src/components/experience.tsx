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
            <div className="timeline-role">Developer</div>
            <div className="timeline-company">YouPay</div>
            <div className="timeline-description">
              <p>Developed new features using Laravel, Vue.js, PHP, JavaScript, Tailwind CSS, MySQL and REST APIs.</p>
              <p>Created an email notification system for merchants to receive weekly/monthly summaries of YouPay carts created, paid and cancelled. I also integrated YouPay into dozens of stores.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">February 2022 - November 2022</div>
        </div>
        
        {/* Second job - Left side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-left">
            <div className="timeline-role">Web Developer</div>
            <div className="timeline-company">M3 Digital - Contract</div>
            <div className="timeline-description">
              <p>Front-end development for a variety of Shopify stores such as FitazFK, Rider Collective, Masseuse Massage, Francesca Jewellery and Salty Captain.</p>
              <p>Developed high quality landing pages and front end features using HTML, CSS, SCSS, JavaScript and Liquid.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">September 2021 - February 2022</div>
        </div>
        
        {/* Third job - Right side */}
        <div className="timeline-item">
          <div className="timeline-content timeline-right">
            <div className="timeline-role">Junior Developer</div>
            <div className="timeline-company">Example Company</div>
            <div className="timeline-description">
              <p>Assisted in developing and maintaining web applications.</p>
              <p>Collaborated with senior developers on various projects. Fixed bugs and implemented minor features. Gained experience with React and Node.js.</p>
            </div>
          </div>
          
          <div className="timeline-date-circle">
            <div className="icon-container">
              <FaBriefcase className="briefcase-icon" />
            </div>
          </div>
          <div className="timeline-date-text">January 2021 - August 2021</div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;