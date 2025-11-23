import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
        
        <div className="space-y-6">
          <Card className="card-hover">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-2">B.Sc. (Hons) in Information Technology</CardTitle>
                  <p className="text-primary font-semibold">SLIIT - Sri Lanka Institute of Information Technology</p>
                  <p className="text-muted-foreground text-sm mt-1">2022 - Present</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-primary">CGPA: 2.9/4.0</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-2 font-semibold">Key Courses:</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "SQA", "OOP", "Data Structures", "Software Engineering", 
                  "Algorithms", "Statistical Methods", "Simulation", 
                  "Graph Theory", "Non-Parametric Data Analysis"
                ].map((course) => (
                  <span key={course} className="px-3 py-1 bg-muted rounded-full text-sm">
                    {course}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Advanced Level (A/L)</CardTitle>
                <p className="text-muted-foreground">Rahula College - 2018</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Mathematics</span>
                    <span className="font-semibold text-primary">A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Chemistry</span>
                    <span className="font-semibold text-primary">B</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Physics</span>
                    <span className="font-semibold text-primary">C</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardHeader>
                <CardTitle className="text-lg">Ordinary Level (O/L)</CardTitle>
                <p className="text-muted-foreground">Rahula College - 2014</p>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <p className="text-4xl font-bold text-primary mb-2">7 A's, 2 B's</p>
                  <p className="text-muted-foreground">Excellent Performance</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
