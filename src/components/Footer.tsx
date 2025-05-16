import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t py-8">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="text-lg font-medium mb-4">Zihao Wang, Ph.D.</h3>
          <p className="text-muted-foreground">
            Data Science Leader, Researcher & AI Entrepreneur
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="text-muted-foreground hover:text-foreground">Home</Link>
            </li>
            <li>
              <Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link>
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
