import { Flame, Wind, Flower2, Gift } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Candles", icon: Flame },
  { name: "Air Fresheners", icon: Wind },
  { name: "Bouquets", icon: Flower2 },
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
            <Link
              to={`/shop?category=${encodeURIComponent(cat.name)}`}
              key={cat.name}
              className="group bg-secondary p-10 md:p-14 text-center cursor-pointer hover:bg-background transition-colors duration-500 block"
            >
              <cat.icon size={28} strokeWidth={1.2} className="mx-auto mb-5 text-foreground/60 group-hover:text-primary transition-colors duration-500" />
              <h3 className="font-heading text-lg md:text-xl font-normal text-foreground">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByCategory;
