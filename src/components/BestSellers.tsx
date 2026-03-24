import product1 from "@/assets/product-candle-1.jpg";
import product2 from "@/assets/product-candle-2.jpg";
import product3 from "@/assets/product-candle-3.jpg";
import product4 from "@/assets/product-candle-4.jpg";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Amber Glow", price: "$28", image: product1 },
  { id: 2, name: "Lavender Serenity", price: "$32", image: product2 },
  { id: 3, name: "Rosé Copper", price: "$35", image: product3 },
  { id: 4, name: "Bloom Gift Set", price: "$72", image: product4 },
];

const BestSellers = () => {
  return (
    <section id="shop" className="py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Curated for you
          </p>
          <h2 className="font-heading text-3xl md:text-[2.8rem] font-light text-foreground">
            Best Sellers
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={853}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>
              <div className="space-y-1.5">
                <h3 className="font-heading text-base md:text-lg font-normal text-foreground">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm font-light">
                  {product.price}
                </p>
                <Button variant="cart" size="sm" className="w-full mt-3 rounded-sm">
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
