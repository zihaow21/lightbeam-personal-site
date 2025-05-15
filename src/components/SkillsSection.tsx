
import React from "react";

const skills = [
  { category: "AI & Machine Learning", items: ["Large Language Models (LLMs)", "Natural Language Processing", "Information Retrieval", "Conversational AI"] },
  { category: "Technologies & Frameworks", items: ["PyTorch", "TensorFlow", "AWS", "Google Cloud", "Microsoft Azure", "Databricks"] },
  { category: "Programming", items: ["Python", "Java", "C"] },
  { category: "Domain Expertise", items: ["Strategic AI System Architecture", "Machine Translation", "Dialogue Systems", "Personalization Algorithms"] }
];

const SkillsSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Core Competencies</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="bg-background p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
