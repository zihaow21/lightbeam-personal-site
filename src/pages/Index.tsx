
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import BlogPreviewSection from "@/components/BlogPreviewSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ExperienceSection />
      <SkillsSection />
      <BlogPreviewSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
