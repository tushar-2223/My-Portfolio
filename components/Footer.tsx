
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export const Footer = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Simulate visitor count - in a real app, you'd track this properly
    const count = localStorage.getItem('visitCount');
    const newCount = count ? parseInt(count) + 1 : 1;
    setVisitCount(newCount);
    localStorage.setItem('visitCount', newCount.toString());
  }, []);

  return (
    <footer className="border-t border-white/20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Tushar Pankhaniya
            </h3>
            <p className="text-white/60 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, 
              functional web experiences.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/tushar-2223" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Github className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Linkedin className="h-5 w-5" />
                </Button>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="text-white/60 hover:text-white hover:bg-white/5">
                  <Twitter className="h-5 w-5" />
                </Button>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="space-y-2">
              {["About", "Tech Stack", "Timeline", "Blog", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "")}`}
                  className="block text-white/60 hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Site Stats</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-white/60">Total Visits</span>
                <span className="text-white font-semibold">{visitCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-white/60">Last Updated</span>
                <span className="text-white font-semibold">Today</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                <span className="text-white/60">Response Time</span>
                <span className="text-white font-semibold">~24h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-white/60 text-sm">
              © 2024 Tushar Pankhaniya. All rights reserved.
            </p>
            <div className="flex items-center text-white/60 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 mx-2 fill-current" />
              <span>and lots of coffee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
