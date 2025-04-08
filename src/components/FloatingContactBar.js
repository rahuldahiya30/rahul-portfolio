import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLinkedin, FaFileAlt } from "react-icons/fa";
import "./FloatingContactBar.css";

const FloatingContactBar = () => {
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        setShowBar(false); // Scrolling down
      } else {
        setShowBar(true); // Scrolling up
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className={`floating-bar ${showBar ? "visible" : "hidden"}`}>
      <a href="mailto:30rahuldahiya@gmail.com" target="_blank" rel="noopener noreferrer" title="Email">
        <FaEnvelope />
      </a>
      <a href="https://www.linkedin.com/in/rahul-dahiya-225917160/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <FaLinkedin />
      </a>
      <a
        href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaFileAlt className="icon" />
       </a>
    </div>
  );
};

export default FloatingContactBar;
