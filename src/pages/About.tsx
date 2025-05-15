
import React from "react";
import Layout from "@/components/Layout";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import PublicationsSection from "@/components/PublicationsSection";
import AwardsSection from "@/components/AwardsSection";

const About = () => {
  return (
    <Layout>
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Me</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Data Science Leader, Researcher & AI Entrepreneur specializing in Large Language Models (LLMs), 
            Agentic AI, Machine Learning and Information Retrieval.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
          <div className="bg-muted aspect-square rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Professional Profile Image</p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Zihao Wang, Ph.D.</h2>
            <p className="text-muted-foreground">
              I'm a U.S. Citizen with a Ph.D. in Computer Science from Emory University, specializing in AI and Machine Learning. 
              With extensive industry experience, I focus on developing advanced AI solutions that solve real-world business problems.
            </p>
            <p className="text-muted-foreground">
              My research has centered on conversational AI, large language models, and information retrieval systems.
              I've led teams at Amazon's Alexa Prize competition, achieving first place in 2019, and developed
              innovative solutions for companies like Walgreens and Clarvos.
            </p>
            <p className="text-muted-foreground">
              As both a practitioner and researcher, I bridge the gap between academic innovation and practical
              business applications, creating AI systems that deliver measurable value.
            </p>
          </div>
        </div>
      </div>
      
      <ExperienceSection />
      <SkillsSection />
      <PublicationsSection />
      <AwardsSection />
    </Layout>
  );
};

export default About;
