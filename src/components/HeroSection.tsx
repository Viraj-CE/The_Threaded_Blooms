import heroImg from "@/assets/hero-candles.jpg";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Handcrafted natural scented candles by The Threaded Bloom"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40" />
      </div>
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-2xl animate-fade-in-up">
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-primary-foreground leading-tight mb-6">
            Handcrafted Natural Scented Candles
          </h1>
          <p className="font-body text-base md:text-lg text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
            Embrace the warmth. Fill your space with calm, comfort, and the gentle glow of hand-poured fragrance.
          </p>
          <Button variant="hero" size="lg" className="px-10 py-6">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
