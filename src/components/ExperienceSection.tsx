import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Lead Data Scientist",
    company: "Clarvos",
    period: "September 2024 – Present",
    location: "Atlanta, US",
    description: [
      "Engineer sophisticated analytical tools leveraging LLMs for precise audience segmentation",
      "Serve as key liaison between executive leadership, product management, and technical teams",
      "Drive end-to-end data science project lifecycle from concept validation through model deployment"
    ]
  },
  {
    title: "Co-Founder",
    company: "BridgeMind AI",
    period: "March 2025 – Present",
    location: "Atlanta, US",
    description: [
      "Architect cutting-edge analytical and generative AI solutions for business applications",
      "Leverage expertise in LLMs, Conversational AI, and Information Retrieval for tailored solutions",
      "Lead client engagement and needs analysis, translating requirements into AI implementation plans",
      "Oversee complete product lifecycle from vision through deployment and optimization"
    ]
  },
  {
    title: "Senior Data Scientist",
    company: "Walgreens AI Lab",
    period: "March 2023 – August 2024",
    location: "Atlanta, US",
    description: [
      "Developed LLM-powered systems for multiple business domains including customer embedding models, including customer embedding models, product recommendation engines, personalized profile prediction, and intelligent query reformulation",
      "Created machine translation and information retrieval systems that significantly enhanced search relevance and overall customer satisfaction",
      "Applied deep learning and NLP techniques to solve complex challenges in retail personalization and customer experience"
    ]
  },
  {
    title: "Researcher",
    company: "Initialview, Amazon, Uber, IBM & Emory",
    period: "August 2016 – May 2023",
    location: "Atlanta, US",
    description: [
      "Created an end-to-end interviewbot by re-engineering language model BlenderBot architecture for college admissions",
      "Developed a multi-task speaker diarization model to clean noisy interview data",
      "Led and participated in building state-of-the-art chatbot that won 2019 Amazon Alexa Prize",
      "Built a temporal cross-source information retrieval system for DoD applications",
      "Built a state-of-art reranking system for conversational AI",
      "Built a Rideshare dispatching classifier",
      "Built a context-aware text-to-speech model",
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Professional Experience</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
