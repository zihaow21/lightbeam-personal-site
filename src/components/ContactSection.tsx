
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
  };

  return (
    <section className="py-16 bg-background">
      <div className="container max-w-5xl">
        <h2 className="text-3xl font-bold mb-10 text-center">Get in Touch</h2>
        
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">zihaow21@gmail.com</p>
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">470-546-6461</p>
              </div>
              <div>
                <h3 className="font-medium">Location</h3>
                <p className="text-muted-foreground">Atlanta, GA</p>
              </div>
              <div>
                <h3 className="font-medium">Connect</h3>
                <a 
                  href="https://www.linkedin.com/in/zihao-wang-ph-d-26a66953/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  LinkedIn Profile
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" className="min-h-[120px]" />
                </div>
                <Button type="submit" className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
