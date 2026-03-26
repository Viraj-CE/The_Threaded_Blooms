import { ScrollReveal } from "./ScrollReveal";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-20 md:py-24 overflow-hidden border-t-8 border-primary/20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <ScrollReveal direction="up" delay={0.1}>
              <h3 className="font-heading text-xl font-light tracking-wide mb-5">
                The Threaded Bloom
              </h3>
              <p className="font-body text-primary-foreground/60 text-xs leading-relaxed font-light">
                Handcrafted candles & home fragrance, made with love and natural ingredients.
              </p>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="up" delay={0.1}>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/60">
                Shop
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Candles", path: "/shop?category=Candles" },
                  { name: "Air Fresheners", path: "/shop?category=Air Fresheners" },
                  { name: "Bouquets", path: "/shop?category=Bouquets" },
                  { name: "Gift Sets", path: "/shop?category=Gift Sets" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="font-body text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 font-light">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="up" delay={0.15}>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/60">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Our Story", path: "/our-story" },
                  { name: "Contact", path: "/contact" },
                  { name: "FAQs", path: "/faqs" },
                  { name: "Shipping & Refunds", path: "/refunds" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="font-body text-xs text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300 font-light">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
          <div>
            <ScrollReveal direction="up" delay={0.15}>
              <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/60">
                Follow Us
              </h4>
              <div className="flex gap-5 mb-6">
                <a href="https://www.instagram.com/thethreadedbloom_/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors duration-300">
                  <Twitter size={18} strokeWidth={1.5} />
                </a>
              </div>
              <p className="font-body text-[10px] text-primary-foreground/40 leading-relaxed">
                hello@thethreadedbloom.com
              </p>
              <p className="font-body text-[10px] text-primary-foreground/40 leading-relaxed mt-1">
                Pune, Maharashtra, India
              </p>
            </ScrollReveal>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] tracking-[0.15em] text-primary-foreground/40">
            © 2026 The Threaded Bloom. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { name: "Privacy Policy", path: "/privacy" },
              { name: "Terms of Service", path: "/terms" },
              { name: "Refunds", path: "/refunds" },
            ].map((link) => (
              <Link key={link.name} to={link.path} className="font-body text-[10px] text-primary-foreground/40 hover:text-primary-foreground/70 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
