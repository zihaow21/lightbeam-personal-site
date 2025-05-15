
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Placeholder blog posts
const blogPosts = [
  {
    id: 1,
    title: "Advances in Large Language Models for Conversational AI",
    excerpt: "Exploring how recent developments in LLMs have transformed the landscape of conversational systems...",
    date: "May 15, 2025",
    category: "LLMs"
  },
  {
    id: 2,
    title: "Building Effective Information Retrieval Systems with Semantic Search",
    excerpt: "A technical deep dive into creating robust information retrieval systems using semantic search techniques...",
    date: "April 22, 2025",
    category: "Information Retrieval"
  },
  {
    id: 3,
    title: "Machine Learning for Structural Engineering: Lessons from Academia",
    excerpt: "Reflecting on my experience applying ML techniques to structural engineering problems at Carnegie Mellon...",
    date: "March 10, 2025",
    category: "Machine Learning"
  }
];

const BlogPreviewSection = () => {
  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <Button variant="outline" asChild>
            <Link to="/blog">View All</Link>
          </Button>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map(post => (
            <Card key={post.id} className="flex flex-col h-full">
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
      </div>
    </section>
  );
};

export default BlogPreviewSection;
