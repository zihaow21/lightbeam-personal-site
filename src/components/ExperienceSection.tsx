import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Lead Data Scientist",
    company: "Clarvos",
    period: "September 2024 – Present",
    location: "Atlanta, US",
    description: [
      "Engineer sophisticated analytical tools leveraging LLMs that enable precise audience segmentation across multiple dimensions (demographics, psychographics, emotions, sentiments) to optimize strategic business initiatives",
      "Serve as key liaison between executive leadership, product management, and technical teams, facilitating alignment on AI product strategy and implementation",
      "Drive end-to-end data science project lifecycle from concept validation through model deployment, ensuring seamless operationalization of AI solutions"
    ]
  },
  /* Commented out Co-Founder block
  {
    title: "Co-Founder",
    company: "BridgeMind AI",
    period: "March 2025 – Present",
    location: "Atlanta, US",
    description: [
      "Architect cutting-edge analytical and generative AI solutions that enhance strategic decision-making and operational efficiency for clients",
      "Leverage deep expertise in LLMs, Conversational AI, and Information Retrieval to develop tailored solutions for complex business challenges",
      "Lead client engagement and needs analysis, translating business requirements into actionable AI implementation plans",
      "Oversee complete product lifecycle from vision and algorithm design through deployment and optimization"
    ]
  },
  */
  {
    title: "Senior Data Scientist",
    company: "Walgreens AI Lab",
    period: "March 2023 – August 2024",
    location: "Atlanta, US",
    description: [
      "Developed LLM-powered systems for multiple business domains including customer embedding models, product recommendation engines, personalized profile prediction, and intelligent query reformulation",
      "Created machine translation and information retrieval systems that significantly enhanced search relevance and overall customer satisfaction",
      "Applied deep learning and NLP techniques to solve complex challenges in retail personalization and customer experience"
    ]
  },
  {
    title: "Researcher",
    company: "Initialview & Emory",
    period: "September 2021 – May 2023",
    location: "Atlanta, US",
    description: [
      "Created an end-to-end interviewbot built on BlenderBot architecture, enhanced to handle arbitrary context length for dynamic interview scenarios",
      "Developed a multi-task speaker diarization model to clean noisy interview data",
      "Achieved 3.5/5 average satisfaction score from professional interviewers and students for system performance",
      "Published research results in peer-reviewed academic journals"
    ]
  },
  {
    title: "Visiting Scholar",
    company: "The Johns Hopkins University",
    period: "June 2021 – August 2021",
    location: "Atlanta, US",
    description: [
      "Developed a novel temporal ranking model to enhance retrieval of Twitter documents based on correlation with temporally relevant news events",
      "Created metrics to quantify correlation between social media content and news publications",
      "Demonstrated performance improvements against baseline ranking models"
    ]
  },
  {
    title: "Applied Scientist Intern",
    company: "Amazon Alexa AI Speech Team",
    period: "June 2020 – September 2020",
    location: "Atlanta, US",
    description: [
      "Developed neural frameworks to integrate personalized contextual information for enhanced ASR performance",
      "Created unified representations of audio features and contextual information with fully trainable parameters",
      "Designed an architecture utilizing pre-trained Listen Attend Spell (LAS) models with custom LSTM and attention layers",
      "Conducted detailed analysis of slot-level word error rates to guide optimization efforts"
    ]
  },
  {
    title: "Team Lead/Member",
    company: "Amazon Alexa Prize & Emory",
    period: "February 2017 – June 2020",
    location: "Atlanta, US",
    description: [
      "Grand Challenge 2019 (1st Place, $500,000 Prize): Team Member in 14-person team that won the global competition. Developed contextualized response ranking model and implemented personalized context tracking systems",
      "Grand Challenge 2018 (4th Place): Served as Team Lead for 7-person team that secured $250,000 research grant. Architected socialbot infrastructure and developed dialogue state management systems",
      "Grand Challenge 2017 (5th Place): Served as Team Lead for 4-person team. Designed dialogue management system with conversational logic and developed NLP algorithms for conversational exchanges"
    ]
  },
  {
    title: "Data Science Intern",
    company: "Uber AI Conversational AI Team",
    period: "May 2019 – August 2019",
    location: "San Francisco, US",
    description: [
      "Built intent classification models supporting 7 languages using CNN, LSTM, Transformer, and BERT architectures",
      "Conducted comparative analysis of monolingual vs. language-agnostic models to determine optimal production configuration",
      "Implemented transfer learning across language models to identify cross-linguistic patterns and similarities",
      "Visualized embedding spaces to validate language similarity hypotheses",
      "Assisted with production deployment of finalized models"
    ]
  },
  {
    title: "Research Scientist",
    company: "IBM Research China",
    period: "January 2015 – June 2015",
    location: "Beijing, China",
    description: [
      "Deployed experimental system using passive WiFi signal scanners to analyze electronic device usage patterns",
      "Implemented statistical models for behavioral analysis from collected data",
      "Developed web service for research deployment"
    ]
  },
  {
    title: "Research Assistant",
    company: "Carnegie Mellon University",
    period: "August 2012 – December 2014",
    location: "Pittsburgh, US",
    description: [
      "Used robotic vehicles to collect vibration data from bridges and test structures",
      "Applied signal processing and machine learning techniques to structural integrity assessment",
      "Developed algorithms for automated decision-making on bridge maintenance"
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
