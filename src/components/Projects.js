import React, { useState, useEffect } from "react";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "BCP & DR",
    description: "Developed Business Continuity Plan and Disaster Recovery Plan for Queen's College.",
    tech: "DRaaS, VMware, Backup and Recovery, LogicGate, Moqups",
    image: "/assets/bcp.webp",
  },
  {
    title: "Security Awareness Training",
    description: "Organized various phishing awareness campaigns for 500+ users.",
    tech: "Phish Alert Button, QR code attacks, Microsoft Defender, Phishing Simulations",
    image: "/assets/Phishing.webp",
  },
  {
    title: "Infrastructure Maintenance",
    description: "Supervised hardware and software infrastructure of organization.",
    tech: "OPSI, Hybrid Azure Active Directory, Jira, Windows 11",
    image: "/assets/Hardware.webp",
  },
  {
    title: "Instructional Design",
    description: "Created multiple instructional design projects.",
    tech: "Camtasia, Adobe Illustrator, Adobe Premiere Pro, Articulate 360, Canva",
    image: "/assets/Moodle.webp",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="projects"
      className={`projects-section ${hoveredIndex !== null ? "overlay-active" : ""}`}
    >
      <h2 data-aos="fade-up">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <div
              key={index}
              className={`project-card ${isHovered ? "project-zoom" : ""}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>
                  <strong>Tech:</strong> {project.tech}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
