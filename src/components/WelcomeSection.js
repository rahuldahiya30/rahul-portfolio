import React from "react";

const WelcomeSection = () => {
  return (
    <section style={styles.container}>
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Hey! I'm Rahul Dahiya</h1>
        <p style={styles.description}>
          An IT Analyst with a passion for technology and problem-solving.
          I troubleshoot and "debug" issues with precision. From network security to user onboarding,
          I specialize in keeping things running smoothly. With a background in Cybersecurity and a knack for data analysis,
          I’m always ready to “connect” and collaborate on innovative solutions.
          Let’s make technology work for you!
        </p>
      </div>
      <div style={styles.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/assets/WelcomePic.jpeg`}
          alt="Rahul Dahiya"
          style={styles.image}
        />
      </div>
    </section>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    background: "linear-gradient(to right, #ffffff, #f8f8f8)",
    padding: "40px 20px",
  },
  textContainer: {
    width: "50%",
    minWidth: "300px",
    textAlign: "left",
    color: "black",
  },
  heading: {
    fontSize: "2.8rem",
    fontWeight: "700",
  },
  description: {
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  imageContainer: {
    width: "35%",
    minWidth: "280px",
    maxWidth: "400px",
    textAlign: "center",
    overflow: "hidden",
    border: "6px solid #000",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
    borderRadius: "12px",
  },
};

export default WelcomeSection;
