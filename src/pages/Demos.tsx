
import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "InterviewBot",
    description: "An end-to-end dialogue system for college admissions interviews built on BlenderBot architecture.",
    technologies: ["Conversational AI", "NLP", "Deep Learning"],
    status: "Published in Information Journal",
    link: "https://doi.org/10.3390/info14080460"
  },
  {
    title: "Emora - Alexa Prize Socialbot",
    description: "An inquisitive social chatbot focused on engaging users in meaningful conversations.",
    technologies: ["LLMs", "Dialogue Management", "Contextual Ranking"],
    status: "1st Place Winner, Amazon Alexa Prize 2019",
    link: "#"
  },
  {
    title: "Ericson",
    description: "An interactive open-domain conversational search agent for information seeking.",
    technologies: ["Information Retrieval", "Query Reformulation", "Contextual Relevance"],
    status: "Research Project",
    link: "#"
  },
  {
    title: "Customer Embedding System",
    description: "LLM-powered system for generating rich customer embeddings for retail personalization.",
    technologies: ["LLMs", "Embeddings", "ML"],
    status: "Commercial Project at Walgreens AI Lab",
    link: "#"
  }
];

const Demos = () => {
  return (
    <Layout>
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Projects & Demos</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in AI, machine learning, and conversational systems. These projects demonstrate my expertise in building intelligent solutions.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base font-medium text-primary">
                  {project.status}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-muted text-muted-foreground text-xs px-2 py-1 rounded-md">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" asChild className="w-full">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.link === "#" ? "Coming Soon" : "View Project"}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t">
          <h2 className="text-2xl font-bold mb-6">Interactive Demos</h2>
          <p className="text-muted-foreground mb-8">
            Interactive demonstrations of my work will be available soon. These demos will allow you to experience firsthand the AI systems and applications I've developed.
          </p>
          <Card className="bg-muted/50 border-dashed">
            <CardContent className="p-8 text-center">
              <h3 className="text-lg font-medium mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                Interactive demos of conversational AI systems, information retrieval tools, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Demos;
