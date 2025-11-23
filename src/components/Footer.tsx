import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold mb-1">Sasindu Hasarinda</p>
            <p className="text-sm text-secondary-foreground/80">
              Software Engineer Intern | Frontend Developer
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/sasindu-hasarinda-08957a238"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/it20009236"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="mailto:sasinduhasarinda1998@gmail.com"
              className="p-2 hover:bg-secondary-foreground/10 rounded-lg transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center text-sm text-secondary-foreground/60">
          <p>© 2025 Sasindu Hasarinda. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
