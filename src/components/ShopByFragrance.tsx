const fragrances = [
  { name: "Floral", emoji: "🌸", description: "Rose, Lavender, Jasmine" },
  { name: "Citrus", emoji: "🍊", description: "Bergamot, Lemon, Orange" },
  { name: "Woody", emoji: "🌲", description: "Sandalwood, Cedar, Oud" },
  { name: "Fresh", emoji: "🌿", description: "Eucalyptus, Mint, Sea Salt" },
];

const ShopByFragrance = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-4">
            Shop by Fragrance
          </h2>
          <p className="font-body text-muted-foreground">
            Find your signature scent.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {fragrances.map((frag) => (
            <div
              key={frag.name}
              className="group bg-card rounded-lg p-8 text-center hover:shadow-md transition-all duration-300 cursor-pointer border border-border hover:border-primary/30"
            >
              <div className="text-4xl mb-4">{frag.emoji}</div>
              <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                {frag.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {frag.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByFragrance;
