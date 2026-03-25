import bannerImg from "@/assets/banner-festive.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FeatureBanner = () => {
  return (
    <section className="relative w-full py-32 md:py-44">
      <div className="absolute inset-0">
        <img
          src={bannerImg}
          alt="Festive candle collection"
          loading="lazy"
          width={1920}
          height={800}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/55" />
      </div>
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="font-body text-[11px] tracking-[0.3em] uppercase text-primary-foreground/50 mb-6">
          Seasonal Collection
        </p>
        <h2 className="font-heading text-3xl md:text-5xl lg:text-[3.5rem] font-light text-primary-foreground mb-8 max-w-2xl mx-auto leading-[1.15]">
          Celebrate with Warm, Festive Scents
        </h2>
        <Link to="/shop">
          <Button variant="hero" size="lg" className="px-12 py-7 text-[11px]">
            Explore Collection
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeatureBanner;
