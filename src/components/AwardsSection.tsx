
import React from "react";

const awards = [
  {
    title: "ACL Program Committee Member",
    details: "2023"
  },
  {
    title: "1st place winner team",
    details: "Amazon Alexa Prize Grand Challenge 2019",
    prize: "$250,000 research grant and $500,000 prize"
  },
  {
    title: "4th place",
    details: "Amazon Alexa Prize Grand Challenge 2018",
    prize: "$250,000 research grant"
  },
  {
    title: "5th place",
    details: "Amazon Alexa Prize Grand Challenge 2017"
  },
  {
    title: "Fenves Travel Award",
    details: "Carnegie Mellon University, 2014"
  }
];

const AwardsSection = () => {
  return (
    <section className="py-16 bg-background/80">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Awards & Recognition</h2>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {awards.map((award, idx) => (
            <div 
              key={idx}
              className="bg-muted/30 border rounded-lg p-6 hover:bg-muted/50 transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
              <p className="text-muted-foreground">{award.details}</p>
              {award.prize && (
                <p className="mt-2 text-sm font-medium text-primary">{award.prize}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
