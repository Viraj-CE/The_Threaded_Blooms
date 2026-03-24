import { Flame, Wind, Droplets, Gift } from "lucide-react";

const categories = [
  { name: "Candles", icon: Flame },
  { name: "Air Fresheners", icon: Wind },
  { name: "Reed Diffusers", icon: Droplets },
  { name: "Gift Sets", icon: Gift },
];

const ShopByCategory = () => {
  return (
    <section id="categories" className="py-24 md:py-36 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-[2.8rem] font-light text-foreground">
            Shop by Category
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group bg-secondary p-10 md:p-14 text-center cursor-pointer hover:bg-background transition-colors duration-500"
            >
              <cat.icon size={28} strokeWidth={1.2} className="mx-auto mb-5 text-foreground/60 group-hover:text-primary transition-colors duration-500" />
              <h3 className="font-heading text-lg md:text-xl font-normal text-foreground">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
