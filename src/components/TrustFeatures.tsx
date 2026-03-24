import { Leaf, Hand, Truck, Heart } from "lucide-react";

const features = [
  { icon: Leaf, title: "Eco-Friendly" },
  { icon: Hand, title: "Handcrafted" },
  { icon: Truck, title: "Free Shipping 50+" },
  { icon: Heart, title: "5000+ Happy Customers" },
];

const TrustFeatures = () => {
  return (
    <section className="py-16 md:py-20 border-y border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-center gap-3">
              <feature.icon size={18} strokeWidth={1.5} className="text-muted-foreground" />
              <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
