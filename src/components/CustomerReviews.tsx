import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah M.",
    text: "The Lavender Serenity candle is absolutely divine. The scent fills the entire room without being overwhelming. Will definitely order again!",
    rating: 5,
  },
  {
    name: "James R.",
    text: "Bought the gift set for my wife and she loved it. Beautiful packaging and the candles burn evenly. Top quality.",
    rating: 5,
  },
  {
    name: "Priya K.",
    text: "Finally found candles made with natural ingredients that actually smell amazing. The Amber Glow is my new favorite.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-4">
            What Our Customers Say
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-background rounded-lg p-8 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{review.text}"
              </p>
              <p className="font-heading text-foreground font-medium">
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
