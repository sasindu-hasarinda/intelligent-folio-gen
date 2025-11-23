import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Experience</h2>
        
        <Card className="card-hover">
          <CardHeader>
            <div className="flex items-start justify-between gap-4">
              <div>
                <CardTitle className="text-2xl mb-2">Software Engineer Intern</CardTitle>
                <p className="text-primary font-semibold mb-1">Frontend Developer</p>
                <p className="text-muted-foreground">Accron Revolution Pvt Ltd</p>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span className="text-sm whitespace-nowrap">June 2024 - January 2025</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Specialized in Next.js & StyleX for building modern web applications
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Built high-performance, responsive, SEO-optimized applications
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Briefcase className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-muted-foreground">
                  Worked on styling efficiency using StyleX framework for atomic CSS
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="px-3 py-1 bg-primary/10 rounded-full">Remote</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
