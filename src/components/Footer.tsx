import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-20 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <h3 className="font-heading text-xl font-light tracking-wide mb-5">
              The Threaded Bloom
            </h3>
            <p className="font-body text-primary-foreground/40 text-xs leading-relaxed font-light">
              Handcrafted candles & home fragrance, made with love and natural ingredients.
            </p>
          </div>
          <div>
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/50">
              Shop
            </h4>
            <ul className="space-y-3">
              {["Candles", "Air Fresheners", "Reed Diffusers", "Gift Sets"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/50">
              Company
            </h4>
            <ul className="space-y-3">
              {["Our Story", "Contact", "FAQs", "Shipping"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300 font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-[10px] tracking-[0.2em] uppercase mb-5 text-primary-foreground/50">
              Follow
            </h4>
            <div className="flex gap-5">
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300">
                <Instagram size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300">
                <Facebook size={18} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-primary-foreground/40 hover:text-primary-foreground transition-colors duration-300">
                <Twitter size={18} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-[10px] tracking-[0.15em] text-primary-foreground/30">
            © 2026 The Threaded Bloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
