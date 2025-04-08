import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <Link to="welcome" smooth={true} duration={500}>Home</Link>
      <Link to="work-experience" smooth={true} duration={500}>Work Experience</Link>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="education" smooth={true} duration={500}>Education</Link>
      <Link to="contact" smooth={true} duration={500}>Contact Me</Link>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#222",
    color: "#fff",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1000,
  },
};

export default Navbar;
