import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Palette, Database, Cloud, TestTube, Wrench, Brain } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL"],
    },
    {
      title: "Frontend Development",
      icon: Palette,
      skills: ["React.js", "Next.js", "HTML5", "CSS3", "StyleX"],
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "Django", "Spring Boot"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL", "MongoDB", "Firebase Firestore"],
    },
    {
      title: "Cloud & Virtualization",
      icon: Cloud,
      skills: ["AWS EC2", "AWS S3", "VirtualBox", "VMware"],
    },
    {
      title: "Testing & QA",
      icon: TestTube,
      skills: ["Selenium", "Cypress", "Postman", "Unit Testing"],
    },
    {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: ["Git", "Linux (Bash/Zsh)", "Docker", "Jira"],
    },
    {
      title: "AI/ML & Data Science",
      icon: Brain,
      skills: ["PyTorch", "TensorFlow", "OpenCV", "Pandas", "Matplotlib"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-full text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
