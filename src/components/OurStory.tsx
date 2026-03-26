import storyImg from "@/assets/our-story.jpg";
import { ScrollReveal } from "./ScrollReveal";

const OurStory = () => {
  return (
    <section id="our-story" className="py-24 md:py-36 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <ScrollReveal>
             <div className="overflow-hidden rounded-sm">
                <img
                  src={storyImg}
                  alt="Artisan hand-pouring candles in our workshop"
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="max-w-md">
              <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                Our Story
              </p>
              <h2 className="font-heading text-3xl md:text-[2.8rem] font-light text-foreground mb-8 leading-[1.15]">
                Crafted with Intention
              </h2>
              <div className="space-y-5">
                <p className="font-body text-muted-foreground leading-[1.8] text-sm font-light">
                  The Threaded Bloom was born from a passion for natural fragrance and mindful living. Every candle is hand-poured in small batches using 100% natural soy wax, cotton wicks, and premium essential oils.
                </p>
                <p className="font-body text-muted-foreground leading-[1.8] text-sm font-light">
                  We believe that a beautifully scented space can transform your day — bringing calm to chaos, warmth to winter, and joy to every moment.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
