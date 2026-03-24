import { Leaf, Hand, Truck, Heart } from "lucide-react";

const features = [
  { icon: Leaf, title: "Eco-Friendly", description: "Natural ingredients, sustainable packaging" },
  { icon: Hand, title: "Handcrafted", description: "Small-batch, made with love" },
  { icon: Truck, title: "Fast Delivery", description: "Free shipping on orders over $50" },
  { icon: Heart, title: "Trusted by 5000+", description: "Customers who love our products" },
];

const TrustFeatures = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                <feature.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                {feature.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustFeatures;
