import { Flame, Wind, Droplets, Gift } from "lucide-react";

const categories = [
  { name: "Candles", icon: Flame, description: "Hand-poured soy & beeswax" },
  { name: "Air Fresheners", icon: Wind, description: "Natural room sprays" },
  { name: "Reed Diffusers", icon: Droplets, description: "Long-lasting fragrance" },
  { name: "Gift Sets", icon: Gift, description: "Curated collections" },
];

const ShopByCategory = () => {
  return (
    <section id="categories" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-4">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-background rounded-lg p-8 text-center hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <cat.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {cat.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {cat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
