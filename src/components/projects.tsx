import React from 'react';
import '../assets/projects.css';
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaFlutter } from "react-icons/fa6";
import { RiOpenaiFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa6";

interface Technology {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Project {
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl: string;
}

const ProjectSection: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Personal Portfolio",
      description: "Professional developer portfolio designed to effectively present my technical skills and projects to potential employers and collaborators, featuring interactive UI components and seamless user experience across all devices",
      technologies: [
        { name: "React", icon: FaReact },
        { name: "TypeScript", icon: SiTypescript },
        { name: "Vite", icon: SiVite },
        { name: "CSS", icon: FaCss3 }
      ],
      githubUrl: "https://github.com/kyliem41/portfolio"
    },
    {
      title: "GearSwap",
      description: "Passion project creating a modern thrifting platform that makes buying and selling pre-owned clothing effortless and sustainable. Connecting users with an integrated AI stylist that personalizes the shopping experience and promotes circular fashion.",
      technologies: [
        { name: "Python", icon: FaPython },
        { name: "AWS", icon: FaAws },
        { name: "PostgreSQL", icon: BiLogoPostgresql },
        { name: "Flutter", icon: FaFlutter },
        { name: "OpenAI", icon: RiOpenaiFill },
        { name: "Docker", icon: FaDocker }
      ],
      githubUrl: "https://github.com/kyliem41/gearSwap"
    },
    // {
    //   title: "JobNest",
    //   description: "Collaboration project to provide a new and improved platform for job seekers and employers.",
    //   technologies: [
    //     { name: "JavaScript", icon: SiJavascript },
    //     { name: "Express", icon: SiExpress }
    //   ],
    //   githubUrl: "https://github.com/kyliem41/PRO150-SB2"
    // }
  ];

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="project-card"
            onClick={() => handleProjectClick(project.githubUrl)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleProjectClick(project.githubUrl);
              }
            }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, techIndex) => (
                <div key={techIndex} className="tech-icon" title={tech.name}>
                  <tech.icon className="tech-icon-svg" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;