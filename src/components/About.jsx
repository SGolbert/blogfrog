import React from "react";
import aboutStyles from "./About.module.scss";

function About() {
  return (
    <div className={aboutStyles.aboutContainer}>
      <p className={aboutStyles.aboutContent}>
        A React practice project by SGolbert
      </p>
    </div>
  );
}

export default About;
