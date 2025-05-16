import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
// import BlogPreviewSection from "@/components/BlogPreviewSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";
import MediaExposureSection from "@/components/MediaExposureSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <PublicationsSection />
      <AwardsSection />
      <MediaExposureSection />
      <SkillsSection />
      {/* <BlogPreviewSection /> */}
    </Layout>
  );
};

export default Index;
