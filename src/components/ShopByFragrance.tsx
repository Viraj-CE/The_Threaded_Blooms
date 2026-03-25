import { Link } from "react-router-dom";

const fragrances = [
  { name: "Floral", notes: "Rose · Lavender · Jasmine" },
  { name: "Citrus", notes: "Bergamot · Lemon · Orange" },
  { name: "Woody", notes: "Sandalwood · Cedar · Oud" },
  { name: "Fresh", notes: "Eucalyptus · Mint · Sea Salt" },
];

const ShopByFragrance = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Find your signature scent
          </p>
          <h2 className="font-heading text-3xl md:text-[2.8rem] font-light text-foreground">
            Shop by Fragrance
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {fragrances.map((frag) => (
            <Link
              to="/shop"
              key={frag.name}
              className="group border border-border rounded-sm p-8 md:p-10 text-center cursor-pointer hover:border-primary/40 transition-colors duration-500 block"
            >
              <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-3">
                {frag.name}
              </h3>
              <p className="font-body text-xs text-muted-foreground tracking-wide font-light">
                {frag.notes}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByFragrance;
