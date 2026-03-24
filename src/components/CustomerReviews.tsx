const reviews = [
  {
    name: "Sarah M.",
    text: "The Lavender Serenity candle is absolutely divine. The scent fills the entire room without being overwhelming.",
  },
  {
    name: "James R.",
    text: "Bought the gift set for my wife and she loved it. Beautiful packaging and the candles burn evenly.",
  },
  {
    name: "Priya K.",
    text: "Finally found candles made with natural ingredients that actually smell amazing. My new favorite brand.",
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-24 md:py-36">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="font-body text-[11px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl md:text-[2.8rem] font-light text-foreground">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border max-w-4xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background p-8 md:p-10"
            >
              <p className="font-heading text-foreground/80 leading-[1.7] text-base italic mb-8">
                "{review.text}"
              </p>
              <p className="font-body text-[11px] tracking-[0.15em] uppercase text-muted-foreground">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
