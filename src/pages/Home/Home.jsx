import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import BillingSection from "./BillingSection";
import VisitorSection from "./VisitorSection";
import WhyChoose from "./WhyChoose";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BillingSection />
      <VisitorSection />
      <WhyChoose />
      <Testimonials />
      <CTA />
    </>
  );
};

export default Home;