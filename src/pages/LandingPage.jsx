import React from "react";
import NavComponent from "../components/NavComponent";
import HeroContent from "../components/landingPage/content/HeroContent";

const LandingPage = () => {
  return (
    <div className="bg-secondary">
      <NavComponent />
      <HeroContent />
    </div>
  );
};

export default LandingPage;
