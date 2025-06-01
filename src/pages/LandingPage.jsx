import React from "react";
import Hero from "../components/Hero";
import WhyMoringaSection from "../components/WhyMoringaSection.jsx";
import FarmingSection from "../components/FarmingSection.jsx";
import FounderSection from "../components/FounderSection.jsx";
import MoringaProductSection from "../components/MoringaProductSection.jsx";
import PartnershipSection from "../components/PartnershipSection.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <WhyMoringaSection />
      <MoringaProductSection />
      <FarmingSection />
      <FounderSection />
      <PartnershipSection />
      <NewsletterSection />
    </div>
  );
};

export default LandingPage;
