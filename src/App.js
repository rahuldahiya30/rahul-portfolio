import React, { useState, useEffect } from "react";
import { Link } from "react-scroll"; 
import WelcomeSection from "./components/WelcomeSection";
import WorkExperience from "./components/WorkExperience";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Education from "./components/Education";
import "./components/Education.css";
import TestimonialSection from "./components/TestimonialSection";
import "./components/TestimonialSection.css";
import FloatingContactBar from "./components/FloatingContactBar";
import "./components/FloatingContactBar.css";


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // AOS init
    AOS.init({ duration: 800, once: true });

    // Window size check
    const checkWindowSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => window.removeEventListener("resize", checkWindowSize);
  }, []);

  return (
    <div>
      {/* Navigation Bar */}
      <nav style={isMobile ? styles.navMobile : styles.nav}>
        <ul style={styles.navList}>
          <li style={styles.navItem}>
            <Link to="WelcomeSection" smooth={true} duration={500}>
              Welcome
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="work-experience" smooth={true} duration={500}>
              Work Experience
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li style={styles.navItem}>
            <Link to="testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content Sections */}
      <WelcomeSection />
      <WorkExperience />
      <Projects />
      <Education />
      <TestimonialSection />
      <FloatingContactBar />
    </div>
  );
}

const styles = {
  nav: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "10px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontFamily: "'Roboto', sans-serif",
  },
  navMobile: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    padding: "5px 0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
    fontFamily: "'Roboto', sans-serif",
  },
  navList: {
    display: "flex",
    listStyleType: "none",
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: "0 20px",
    textTransform: "uppercase",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    letterSpacing: "1px",
    fontWeight: "500",
  },
};

export default App;
