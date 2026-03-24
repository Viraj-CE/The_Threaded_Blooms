import storyImg from "@/assets/our-story.jpg";

const OurStory = () => {
  return (
    <section id="our-story" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="overflow-hidden rounded-lg">
            <img
              src={storyImg}
              alt="Artisan hand-pouring candles in our workshop"
              loading="lazy"
              width={800}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
              Our Story
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              The Threaded Bloom was born from a passion for natural fragrance and mindful living. Every candle is hand-poured in small batches using 100% natural soy wax, cotton wicks, and premium essential oils.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-5">
              We believe that a beautifully scented space can transform your day — bringing calm to chaos, warmth to winter, and joy to every moment. Our mission is to craft products that feel as luxurious as they are sustainable.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              From our studio to your home, each product carries our commitment to quality, care, and a touch of natural beauty.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
