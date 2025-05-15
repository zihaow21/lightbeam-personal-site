
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  location,
  description,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          {company} | {period} | {location}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2">
          {description.map((item, index) => (
            <li key={index} className="text-muted-foreground">{item}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
