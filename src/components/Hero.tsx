import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-muted/50 to-background">
      <div className="container">
        {/* Centered title section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Zihao Wang, Ph.D.
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mt-4">
            AI & Data Science Leader & Entrepreneur
          </h2>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        
        {/* Content grid with image and text */}
        <div className="grid gap-8 lg:grid-cols-2 items-start">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4 text-base text-muted-foreground">
                <p>
                  With a Ph.D. in Computer Science from Emory University and a Master of Engineering from Carnegie Mellon University, I have a multidisciplinary foundation in AI and engineering.
                </p>
                <p>
                  My career bridges academic research, industry, leadership, and entrepreneurship. I've led the development of large-scale systems across domains—ranging from conversational AI and structural monitoring to data analytics platforms and e-commerce optimization. I led and participated in building a team at Emory University to first place in the Amazon Alexa Prize competition in 2019 to create a state-of-the-art socialbot, and later developed AI-powered solutions for Walgreens and Clarvos, solving complex business problems through scalable innovation.
                </p>
                <p>
                  As the co-founder of BridgeMind AI, I've led the strategic design and technical execution of AI-driven platforms—including risk monitoring and implementation systems, automated application review engines, and commercial search and retrieval frameworks.
                </p>
                <p>
                  I'm passionate about transforming cutting-edge AI into practical applications that close the gap between research and real-world impact.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-muted rounded-lg overflow-hidden h-full order-first lg:order-last">
            <img 
              src={import.meta.env.BASE_URL + "profile_horizontal.jpg"} 
              alt="Zihao Wang" 
              className="w-full h-full object-cover object-[center_10%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
