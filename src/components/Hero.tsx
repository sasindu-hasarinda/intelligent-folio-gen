import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 animate-fade-up">
      <div className="max-w-6xl w-full text-center">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary-glow p-1">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-6xl font-bold text-gradient">
              SH
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
            Sasindu Hasarinda
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Engineer Intern | Frontend Developer | IT Undergraduate
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Passionate about building modern web applications, solving problems, and learning cutting-edge technologies.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download CV
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Mail className="w-5 h-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
