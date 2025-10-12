import { Linkedin, Youtube, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com",
      color: "hover:text-brand-yellow",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com",
      color: "hover:text-brand-orange",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com",
      color: "hover:text-brand-yellow",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "hover:text-brand-green",
    },
  ];

  return (
    <footer className="bg-brand-orange">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center space-y-8">
          {/* Copyright */}
          <div>
            <p className="text-white text-lg font-medium">
              © {new Date().getFullYear()} Love Regality Productions. All rights reserved.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-8">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                  >
                    <IconComponent className="h-8 w-8" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;