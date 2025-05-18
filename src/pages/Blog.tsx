import React from "react";
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Placeholder blog posts with categories
const blogPosts = [
  /* 
  {
    id: 1,
    title: "Advances in Large Language Models for Conversational AI",
    excerpt: "Exploring how recent developments in LLMs have transformed the landscape of conversational systems and enabled more natural human-computer interactions.",
    date: "May 15, 2025",
    category: "LLMs",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Building Effective Information Retrieval Systems with Semantic Search",
    excerpt: "A technical deep dive into creating robust information retrieval systems using semantic search techniques and neural embedding models.",
    date: "April 22, 2025",
    category: "Information Retrieval",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Machine Learning for Structural Engineering: Lessons from Academia",
    excerpt: "Reflecting on my experience applying ML techniques to structural engineering problems at Carnegie Mellon University.",
    date: "March 10, 2025",
    category: "Machine Learning",
    image: "/placeholder.svg"
  },
  {
    id: 4,
    title: "The Evolution of Conversational AI: From Rule-based Systems to LLMs",
    excerpt: "Tracing the development of conversational AI systems from early rule-based approaches to modern LLM-powered solutions.",
    date: "February 28, 2025",
    category: "Conversational AI",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Improving ASR Performance with Contextual Information",
    excerpt: "Insights from my work at Amazon Alexa AI on integrating personalized contextual information for enhanced speech recognition.",
    date: "January 15, 2025",
    category: "ASR",
    image: "/placeholder.svg"
  }
  */
];

const categories = ["All", "AI", "Collaboration", "Leadership", "Entrepreneurship", "Miscellaneous"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = React.useState("All");
  
  // const filteredPosts = activeCategory === "All" 
  //   ? blogPosts 
  //   : blogPosts.filter(post => post.category === activeCategory);

  return (
    <Layout>
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Blog</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            Coming soon! This page will feature thoughts, insights, and technical discussions on AI, collaboration, leadership and entrepreneurship.
          </p>
        </div>
      </div>
      
      <div className="container py-16">
        <Tabs defaultValue="All" className="mb-10">
          <TabsList className="flex overflow-x-auto flex-nowrap snap-x snap-mandatory gap-2 mb-8 px-1 py-2 bg-white rounded-lg">
            {categories.map(category => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setActiveCategory(category)}
                className="min-w-max px-4 py-2 snap-center whitespace-nowrap font-semibold"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value={activeCategory} className="mt-0">
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">Articles in this category coming soon!</p>
            </div>
            {/* Blog content templates commented out
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map(post => (
                <Card key={post.id} className="flex flex-col h-full">
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardHeader>
                    <div className="text-sm text-muted-foreground mb-2">{post.date} • {post.category}</div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4">
                    <Button variant="ghost" asChild>
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
            */}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Blog;
