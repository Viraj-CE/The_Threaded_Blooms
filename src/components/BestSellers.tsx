import product1 from "@/assets/product-candle-1.jpg";
import product2 from "@/assets/product-candle-2.jpg";
import product3 from "@/assets/product-candle-3.jpg";
import product4 from "@/assets/product-candle-4.jpg";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Amber Glow Soy Candle", price: "$28.00", image: product1 },
  { id: 2, name: "Lavender Serenity", price: "$32.00", image: product2 },
  { id: 3, name: "Rosé Copper Candle", price: "$35.00", image: product3 },
  { id: 4, name: "Bloom Gift Set", price: "$72.00", image: product4 },
];

const BestSellers = () => {
  return (
    <section id="shop" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-4">
            Best Sellers
          </h2>
          <p className="font-body text-muted-foreground max-w-md mx-auto">
            Our most loved scents, handcrafted with natural ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-medium text-foreground mb-1">
                  {product.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {product.price}
                </p>
                <Button variant="cart" size="sm" className="w-full">
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
