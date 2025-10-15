import { Link } from "react-router-dom";
import { Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "X", icon: Twitter, href: "https://x.com/lazivanio" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/fiel7383" },
  ];

  const footerLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/Logo.png"
                alt="ZYM Global Logo"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold text-foreground">
                ZYM<span className="text-primary">GLOBAL</span>
              </span>
            </Link>

            <p className="text-muted-foreground text-sm max-w-xs">
              Your trusted source for finding the best products online. We research,
              compare, and recommend products to help you make informed decisions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Follow Us</h3>
            <div className="flex space-x-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B0B0B0] hover:text-[#007BFF] transition-colors"
                    aria-label={social.name}
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © {currentYear} ZYM. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs text-center md:text-right">
              This site contains affiliate links. We may earn a commission from purchases made through these links.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
