
import React from "react";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";

const Contact = () => {
  return (
    <Layout>
      <div className="py-16 bg-muted/30">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Contact</h1>
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, or just connecting with fellow AI enthusiasts.
            Feel free to reach out using any of the methods below.
          </p>
        </div>
      </div>
      <ContactSection />
    </Layout>
  );
};

export default Contact;
