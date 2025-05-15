
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-medium mb-4">Zihao Wang, Ph.D.</h3>
          <p className="text-muted-foreground">
            Data Science Leader, Researcher & AI Entrepreneur specializing in Large Language Models, Agentic AI, Machine Learning and Information Retrieval.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            </li>
            <li>
              <Link to="/demos" className="text-muted-foreground hover:text-foreground">Demos</Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <ul className="space-y-2">
            <li className="text-muted-foreground">Email: zihaow21@gmail.com</li>
            <li className="text-muted-foreground">Phone: 470-546-6461</li>
            <li className="text-muted-foreground">Location: Atlanta, GA</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a href="https://www.linkedin.com/in/zihao-wang-ph-d-26a66953/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mt-8 pt-4 border-t text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} Zihao Wang. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
