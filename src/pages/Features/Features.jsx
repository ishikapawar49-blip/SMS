import React from "react";
import FeaturesHero from "./FeaturesHero";
import FeaturesGrid from "./featuresGrid";
import FeaturesIntegration from "./FeaturesIntegration";
// import FeaturesDetailed from "./FeaturesDetailed";

const Features = () => {
  return (
    <>
      <FeaturesHero />
      <FeaturesGrid />
      <FeaturesIntegration />
      {/* <FeaturesDetailed /> */}
    </>
  );
};

export default Features;