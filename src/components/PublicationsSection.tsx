
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const publications = [
  {
    title: "InterviewBot: Real-Time End-to-End Dialogue System for Interviewing Students for College Admission",
    authors: "Wang, Z.; Keyes, N.; Crawford, T.; Choi, J.D.",
    journal: "Information 2023, 14, 460",
    link: "https://doi.org/10.3390/info14080460"
  },
  {
    title: "FCC: Fusing Conversation History and Candidate Provenance for Contextual Response Ranking in Dialogue Systems",
    authors: "Wang, Z.; Choi, J. D.; Agichtein, E.",
    journal: "Proceedings of the International Workshop on Spoken Dialogue Systems Technology (IWSDS), 2023"
  },
  {
    title: "Ericson: An Interactive Open-Domain Conversational Search Agent",
    authors: "Zihao Wang, Ali Ahmadvand, Jason Choi, Payam Karisani, Eugene Agichtein",
    journal: "arXiv preprint arXiv:2304.02233"
  },
  {
    title: "Emora: An Inquisitive Social Chatbot Who Cares For You",
    authors: "Sarah E. Finch, James D. Finch, Ali Ahmadvand, et al.",
    journal: "In 3rd Proceedings of Alexa Prize (Alexa Prize 2019)",
    note: "1st Place Winner"
  }
];

const PublicationsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Selected Publications</h2>
        <div className="grid gap-6">
          {publications.map((pub, idx) => (
            <Card key={idx}>
              <CardHeader>
                <CardTitle className="text-lg">{pub.title}</CardTitle>
                <CardDescription>{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-between items-center">
                <div className="text-muted-foreground">{pub.journal}</div>
                {pub.link && (
                  <Button variant="outline" size="sm" className="mt-2 sm:mt-0" asChild>
                    <a href={pub.link} target="_blank" rel="noopener noreferrer">View Publication</a>
                  </Button>
                )}
                {pub.note && <div className="w-full mt-2 text-sm font-medium text-primary">{pub.note}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <a href="https://www.emorynlp.org/theses-dissertations/phd-dissertation-2023-zihao-wang" target="_blank" rel="noopener noreferrer">
              View Ph.D. Dissertation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PublicationsSection;
