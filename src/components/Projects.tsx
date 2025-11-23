import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Gym Management System",
      description: "Comprehensive system for managing gym operations, memberships, and scheduling with a modern interface.",
      features: ["Member Management", "Class Scheduling", "Payment Processing", "Attendance Tracking"],
      tech: ["Java Spring Boot", "React.js", "MongoDB"],
    },
    {
      title: "IShop - Accessible Web App",
      description: "E-commerce platform designed specifically for visually impaired users with accessibility-first features.",
      features: ["Voice Navigation", "Screen Reader Optimized", "High Contrast UI", "Keyboard Navigation"],
      tech: ["Next.js", "Firebase", "Node.js"],
    },
    {
      title: "Project Management Tool",
      description: "Collaborative project management platform with real-time updates and team collaboration features.",
      features: ["Task Management", "Team Collaboration", "Real-time Updates", "Progress Tracking"],
      tech: ["Next.js", "Firebase"],
    },
    {
      title: "Online Ticket Booking System",
      description: "Modern ticket booking platform with seat selection and payment integration.",
      features: ["Seat Selection", "Payment Gateway", "Booking History", "Email Notifications"],
      tech: ["Next.js", "Firebase"],
    },
    {
      title: "Loan Management System",
      description: "Financial management system for tracking and managing loans with automated calculations.",
      features: ["Loan Tracking", "Payment Schedules", "Interest Calculation", "Reporting Dashboard"],
      tech: ["Next.js", "Firebase"],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <p className="text-muted-foreground text-sm">{project.description}</p>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col">
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Key Features:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold mb-2">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-primary/10 text-primary rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button variant="outline" size="sm" className="gap-2">
                    <Github className="w-4 h-4" />
                    View Code
                  </Button>
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
