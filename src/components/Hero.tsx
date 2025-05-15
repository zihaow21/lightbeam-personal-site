import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
      <div className="container grid gap-8 lg:grid-cols-2 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Zihao Wang, Ph.D.
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground">
            AI & Data Science Leader
          </h2>
          <p className="text-lg text-muted-foreground max-w-md">
            Specializing in Large Language Models (LLMs), Agentic AI, Machine Learning and Information Retrieval
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link to="/about">View Experience</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-80 md:h-96 lg:h-[30rem] bg-muted rounded-lg overflow-hidden order-first lg:order-last">
          <img 
            src={import.meta.env.BASE_URL + "profile_horizontal.jpg"} 
            alt="Zihao Wang" 
            className="w-full h-full object-cover object-[center_10%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
