import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Linkedin, Github, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardContent className="pt-6">
              <p className="text-muted-foreground leading-relaxed">
                Energetic and detail-oriented 4th-year undergraduate at SLIIT pursuing a B.Sc. (Hons) in Information Technology. 
                Strong background in Software Engineering, Frontend Development, Software Testing, Data Science, and Automation. 
                Passionate about problem-solving, proactive monitoring, and creating modern, accessible, and high-performance applications.
              </p>
            </CardContent>
          </Card>

          <Card className="card-hover">
            <CardContent className="pt-6 space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Matara, Sri Lanka</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <a href="mailto:sasinduhasarinda1998@gmail.com" className="hover:text-primary transition-colors">
                  sasinduhasarinda1998@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>0777546696</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Linkedin className="w-5 h-5 text-primary" />
                <a href="https://linkedin.com/in/sasindu-hasarinda-08957a238" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  /sasindu-hasarinda-08957a238
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Github className="w-5 h-5 text-primary" />
                <a href="https://github.com/it20009236" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  /it20009236
                </a>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Globe className="w-5 h-5 text-primary" />
                <a href="http://www.thecn.com/LL1397" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  www.thecn.com/LL1397
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
