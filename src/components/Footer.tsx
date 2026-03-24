import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl font-semibold mb-4">
              The Threaded Bloom
            </h3>
            <p className="font-body text-primary-foreground/60 text-sm leading-relaxed">
              Handcrafted candles & home fragrance made with love and natural ingredients.
            </p>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-wider mb-4 text-primary-foreground/80">
              Shop
            </h4>
            <ul className="space-y-2">
              {["Candles", "Air Fresheners", "Reed Diffusers", "Gift Sets"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-wider mb-4 text-primary-foreground/80">
              Company
            </h4>
            <ul className="space-y-2">
              {["Our Story", "Contact", "FAQs", "Shipping"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-body text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-body text-xs uppercase tracking-wider mb-4 text-primary-foreground/80">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="font-body text-xs text-primary-foreground/40">
            © 2026 The Threaded Bloom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
