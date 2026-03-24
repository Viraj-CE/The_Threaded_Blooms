import bannerImg from "@/assets/banner-festive.jpg";
import { Button } from "@/components/ui/button";

const FeatureBanner = () => {
  return (
    <section className="relative w-full py-28 md:py-36">
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt="Festive candle collection"
          loading="lazy"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-primary-foreground mb-6">
          Celebrate with Warm, Festive Scents
        </h2>
        <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
          Discover our seasonal collection — perfect for gifting or setting the mood at home.
        </p>
        <Button variant="hero" size="lg" className="px-10 py-6">
          Explore Collection
        </Button>
      </div>
    </section>
  );
};

export default FeatureBanner;
