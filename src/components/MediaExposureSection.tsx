import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const mediaItems = [
  {
    source: "Amazon Science",
    title: "2020 science interns discuss what it's like to intern virtually",
    link: "https://www.amazon.science/academic-engagements/2020-science-interns-discuss-what-its-like-to-intern-virtually"
  },
  {
    source: "Forbes",
    title: "Talking Machines: Who Won This Year's Alexa Prize?",
    link: "https://www.forbes.com/sites/craigsmith/2020/08/04/talking-machines-who-won-this-years-alexa-prize/"
  },
  {
    source: "Emory University",
    title: "Emory team vies for best social bot via Amazon's Alexa Prize",
    link: "https://news.emory.edu/stories/2018/03/esc_math_computer_science_amazon_alexa_prize/campus.html"
  }
];

const MediaExposureSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Media Exposure</h2>
        <div className="grid gap-6">
          {mediaItems.map((item, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {item.title}
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </CardTitle>
                <CardDescription>{item.source}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-between items-center">
                <a 
                  href={item.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-primary hover:underline"
                >
                  View Article
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaExposureSection; 