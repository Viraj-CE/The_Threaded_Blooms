import { Button } from "@/components/ui/button";
import { mockProducts } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

const BestSellers = () => {
  const { addItem } = useCart();
  const products = mockProducts.slice(0, 4);
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
              <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden rounded-sm mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width={640}
                  height={853}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </Link>
              <div className="space-y-1.5 flex flex-col items-center text-center">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-heading text-base md:text-lg font-normal text-foreground hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                <p className="font-body text-muted-foreground text-sm font-light">
                  ${product.price}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                      quantity: 1,
                    });
                  }}
                >
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
