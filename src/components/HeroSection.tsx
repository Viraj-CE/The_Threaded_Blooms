import { ScrollReveal } from "./ScrollReveal";
import heroImg from "@/assets/hero-candles.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Handcrafted natural scented candles by The Threaded Bloom"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/35" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <ScrollReveal direction="up" delay={0.2}>
          <div className="max-w-xl">
            <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary-foreground/60 mb-6 font-bold">
              Hand-poured &middot; Natural &middot; Sustainable
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-light text-primary-foreground leading-[1.1] mb-8">
              Handcrafted Natural Scented Candles
            </h1>
            <p className="font-body text-sm md:text-base text-primary-foreground/70 mb-10 max-w-md leading-relaxed font-light">
              Embrace the warmth. Fill your space with calm, comfort, and the gentle glow of hand-poured fragrance.
            </p>
            <Link to="/shop">
              <Button variant="hero" size="lg" className="px-12 py-7 text-[11px]">
                Shop Now
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
