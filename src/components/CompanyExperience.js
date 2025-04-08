import React from "react";
import { FaUserTie, FaBug, FaUserGraduate, FaMedal } from "react-icons/fa";
import "./WorkExperience.css";

const roleIcons = {
  "Administrative Assistant": <FaUserTie />,
  "IT QA Analyst": <FaBug />,
  "Student Recruitment and Career Advisor": <FaUserGraduate />,
};

const CompanyExperience = ({ name, roles }) => {
  return (
    <section style={styles.container} id="work-experience" data-aos="fade-up">
      <h2 style={styles.heading}>{name}</h2>
      <div style={styles.timelineBox}>
        {roles.map((role, index) => (
          <div key={index} className="roleCard" data-aos="fade-up" data-aos-delay={index * 100}>
            <div style={styles.icon}>{roleIcons[role.title] || "📌"}</div>
            <h3 style={styles.title}>
              {role.title}
              {role.promoted && <FaMedal style={{ color: "#ffcc00", marginLeft: "8px" }} />}
            </h3>
            <p style={styles.duration}>{role.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  container: {
    padding: "60px 20px",
    background: "linear-gradient(to right, #ffffff, #f8f8f8)",
    textAlign: "center",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "30px",
    color: "#222",
  },
  timelineBox: {
    maxWidth: "700px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "30px",
  },
  icon: {
    fontSize: "1.8rem",
    marginBottom: "8px",
  },
  title: {
    margin: "0",
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  duration: {
    fontSize: "0.95rem",
    color: "#555",
    marginTop: "4px",
  },
};

export default CompanyExperience;
