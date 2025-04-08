import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    institution: "Loyalist College",
    program: "Post Graduate Certificate",
    specialization: "Cybersecurity",
    duration: "September 2021 – April 2023",
    achievement: "Dean's List",
  },
  {
    institution: "Kurukshetra University",
    program: "Bachelor's of Technology",
    specialization: "Electronics and Telecommunications",
    duration: "August 2016 – June 2020",
    achievement: "Secured Rank 28 in World Robotics Championship",
  },
];

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 data-aos="fade-up">Education</h2>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="education-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <FaGraduationCap className="edu-icon" />
            <div>
              <h3>{edu.institution}</h3>
              <p>
                <strong>{edu.program}</strong> – {edu.specialization}
              </p>
              <p>{edu.duration}</p>
              <p className="edu-highlight">{edu.achievement}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
