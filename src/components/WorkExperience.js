import React from "react";
import "./WorkExperience.css";
import { FaUserTie, FaBug, FaUserGraduate, FaMedal } from "react-icons/fa";

// Logo path
const logoUrl = "/assets/queens-logo.png";

const rolesAtQueens = [
  {
    title: "Administrative Assistant",
    duration: "Jan 2023 – Apr 2023",
    icon: <FaUserTie />,
  },
  {
    title: "IT QA Analyst",
    duration: "May 2023 – Present",
    icon: <FaBug />,
    promoted: true,
  },
  {
    title: "Student Recruitment and Career Advisor",
    duration: "June 2024 – Present",
    icon: <FaUserGraduate />,
    promoted: true,
  },
];

const WorkExperience = () => {
  return (
    <section style={styles.container} id="work-experience">
      <h2 style={styles.heading}>Work Experience</h2>
      <div className="timeline">
        <div className="timelineItem" data-aos="fade-up">
          <div className="timelineCircle"></div>
          <div className="timelineInfoBox">
            <div style={styles.logoHeading}>
              <img src={logoUrl} alt="Queen's College Logo" style={styles.logo} />
              <h3 style={styles.orgName}>Queen's College</h3>
            </div>
            <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
              {rolesAtQueens.map((role, index) => (
                <li
                  key={index}
                  className={`roleCard ${role.promoted ? "promoted" : ""}`}
                  style={styles.roleItem}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div style={styles.icon}>{role.icon}</div>
                  <div>
                    <strong>{role.title}</strong>
                    {role.promoted && <FaMedal style={styles.promotionIcon} />}
                    <div style={styles.duration}>{role.duration}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "60px 20px",
    background: "linear-gradient(to right, #ffffff, #f8f8f8)",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "60px", // increased spacing below heading
    color: "#333",
  },
  logoHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "20px",
  },
  logo: {
    width: "40px",
    height: "40px",
    objectFit: "contain",
    borderRadius: "6px",
    boxShadow: "0 0 4px rgba(0,0,0,0.1)",
  },
  orgName: {
    margin: 0,
    fontSize: "1.5rem",
    color: "#333",
  },
  roleItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textAlign: "left",
    marginBottom: "15px",
  },
  icon: {
    fontSize: "1.5rem",
    color: "#333",
  },
  duration: {
    fontSize: "0.9rem",
    color: "#666",
  },
  promotionIcon: {
    marginLeft: "8px",
    color: "#ffcc00",
  },
};

export default WorkExperience;
