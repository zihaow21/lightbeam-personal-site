import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

const publications = [
  {
    title: "Contextual Embedding Representations for Retrieval-Based and Generation-Based Dialogue Systems",
    authors: "Wang, Zihao",
    journal: "Ph.D. Dissertation, Spring 2023",
    link: "https://etd.library.emory.edu/concern/etds/dz010r397",
    isDissertation: true
  },
  {
    title: "InterviewBot: Real-Time End-to-End Dialogue System for Interviewing Students for College Admission",
    authors: "Wang, Z.; Keyes, N.; Crawford, T.; Choi, J.D.",
    journal: "Information 2023, 14, 460",
    link: "https://www.mdpi.com/2078-2489/14/8/460"
  },
  {
    title: "FCC: Fusing Conversation History and Candidate Provenance for Contextual Response Ranking in Dialogue Systems",
    authors: "Wang, Z.; Choi, J. D.; Agichtein, E.",
    journal: "Proceedings of the International Workshop on Spoken Dialogue Systems Technology (IWSDS), 2023",
    link: "https://www.emorynlp.org/publications/iwsds-2023-wang-et-al"
  },
  {
    title: "Ericson: An Interactive Open-Domain Conversational Search Agent",
    authors: "Zihao Wang, Ali Ahmadvand, Jason Choi, Payam Karisani, Eugene Agichtein",
    journal: "arXiv preprint arXiv:2304.02233",
    link: "https://arxiv.org/pdf/2304.02233"
  },
  {
    title: "Emora: An Inquisitive Social Chatbot Who Cares For You",
    authors: "Sarah E. Finch, James D. Finch, Ali Ahmadvand, Ingyu (Jason) Choi, Xiangjue Dong, Ruixiang Qi, Harshita Sahijwani, Sergey Volokhin, Zihan Wang, Zihao Wang, Jinho D. Choi.",
    journal: "In 3rd Proceedings of Alexa Prize (Alexa Prize 2019) Amazon re: Invent 2019 Conference",
    link: "https://www.emorynlp.org/publications/alexa-prize-2020-finch-et-al"
  },
  {
    title: "Emory IrisBot: An Open-Domain Conversational Bot for Personalized Information Access",
    authors: "Ahmadvand, A., Choi, I.J., Sahijwani, H., Schmidt, J., Sun, M., Volokhin, S., Wang, Z. and Agichtein, E.",
    journal: "In 2nd Proceedings of Alexa Prize (Alexa Prize 2018) Amazon re:Invent 2018 Conference",
    link: "https://assets.amazon.science/69/92/5437c43946cc971aad12f0fbcbbe/an-open-domain-conversational-bot-for-personalized-information-access.pdf"
  },
  {
    title: "Emersonbot: Information-Focused Conversational AI Emory University at the Alexa Prize 2017 Challenge",
    authors: "Wang, Z., Choi, J., Ahmadvand, A., Karisani, P., & Agichtein, E.",
    journal: "In 1st Proceedings of Alexa Prize (Alexa Prize 2017) on Amazon re:Invent 2017 Conference",
    link: "https://assets.amazon.science/b4/fd/d2e7cf704bb7892de7b92ba2e729/information-focused-conversational-ai-emory-university-at-the-alexa-prize-2017-challenge.pdf"
  },
  {
    title: "Signal inpainting on graphs via total variation minimization",
    authors: "Chen, S., Sandryhaila, A., Lederman, G., Wang, Z., Moura, J. M., Rizzo, P., & Kovacevic,J.",
    journal: "In Acoustics, Speech and Signal Processing (ICASSP), 2014 IEEE International Conference on (pp. 8267-8271). IEEE",
    link: "http://jelena.ece.cmu.edu/repository/conferences/14_05_ICASSP_ChenSLWMRBGK.pdf"
  },
  {
    title: "Damage quantification and localization algorithms for indirect SHM of bridges",
    authors: "Lederman, G., Wang, Z., Bielak, J., Noh, H., Garrett, J. H., Chen, S., & Rizzo, P.",
    journal: "In Proc. Int. Conf. Bridge Maint., Safety Manag.",
    link: "http://jelena.ece.cmu.edu/repository/conferences/14_07_LWBNGCKFR.pdf"
  },
  {
    title: "Comparison of sparse representation and fourier discriminant methods: damage location classification in indirect lab-scale bridge structural health monitoring.",
    authors: "Wang, Z., Chen, S., Lederman, G., Cerda, F., Bielak, J., Garrett, J. H., & Kovaˇcevi´c, J.",
    journal: "In Structures Congress 2013: Bridging Your Passion with Your Profession (pp. 436-446)",
    link: "http://jelena.ece.cmu.edu/repository/conferences/13_05_SturctCongress.pdf"
  },
];

const PublicationsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedPublications = showAll ? publications : publications.slice(0, 3);
  
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <h2 className="text-3xl font-bold mb-10 text-center">Publications</h2>
        
        <div className="grid gap-6">
          {displayedPublications.map((pub, idx) => (
            <Card key={idx}>
              <CardHeader className="relative">
                <CardTitle className="text-lg flex items-center gap-2">
                  {pub.link ? (
                    <a href={pub.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {pub.title}
                    </a>
                  ) : pub.title}
                  {pub.isDissertation && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-primary text-white text-xs font-semibold">Ph.D. Dissertation</span>
                  )}
                </CardTitle>
                <CardDescription>{pub.authors}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap justify-between items-center">
                <div className="text-muted-foreground">{pub.journal}</div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {!showAll && publications.length > 3 && (
          <div className="mt-6 text-center">
            <Button 
              variant="ghost" 
              onClick={() => setShowAll(true)}
              className="text-primary hover:text-primary/80"
            >
              View all publications <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
        
        {showAll && (
          <div className="mt-6 text-center">
            <Button 
              variant="ghost" 
              onClick={() => setShowAll(false)}
              className="text-primary hover:text-primary/80"
            >
              Show fewer publications <ChevronUp className="ml-1 h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PublicationsSection;
