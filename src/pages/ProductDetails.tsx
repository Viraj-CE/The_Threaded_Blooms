import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import type { Review } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const product = mockProducts.find((p) => p.id === id);
    const { addItem } = useCart();
    const [quantity, setQuantity] = useState(1);

    const [reviews, setReviews] = useState<Review[]>(product ? product.reviews : []);
    const [newReview, setNewReview] = useState({ author: "", rating: 5, text: "" });

    React.useEffect(() => {
        if (product) {
            setReviews(product.reviews);
        }
    }, [product]);

    const handleAddReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newReview.author || !newReview.text) return;

        const review: Review = {
            id: Date.now().toString(),
            author: newReview.author,
            rating: newReview.rating,
            text: newReview.text,
            date: new Date().toISOString().split('T')[0]
        };

        setReviews([review, ...reviews]);
        setNewReview({ author: "", rating: 5, text: "" });
    };

    const currentRating = reviews.length > 0
        ? reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
        : product?.rating || 0;

    if (!product) {
        return (
            <div className="min-h-screen pt-24 text-center">
                <Navbar />
                <div className="py-32">
                    <h1 className="font-heading text-3xl mb-4">Product Not Found</h1>
                    <Link to="/shop" className="text-primary underline">Return to Shop</Link>
                </div>
                <Footer />
            </div>
        );
    }

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity,
        });
    };

    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-12 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Product Image */}
                    <div className="aspect-[4/5] overflow-hidden rounded-sm bg-secondary/30">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        <div>
                            <p className="font-body text-muted-foreground text-sm tracking-widest uppercase mb-2">
                                {product.category}
                            </p>
                            <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-center gap-2 mb-4">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star
                                            key={star}
                                            size={16}
                                            strokeWidth={1.5}
                                            className={star <= Math.round(currentRating) ? "fill-primary text-primary" : "text-muted-foreground/30"}
                                        />
                                    ))}
                                </div>
                                <span className="font-body text-sm text-muted-foreground">
                                    {currentRating.toFixed(1)} ({reviews.length} reviews)
                                </span>
                            </div>
                            <p className="font-body text-2xl font-light text-foreground">
                                ${product.price}
                            </p>
                        </div>

                        <div className="prose prose-sm font-body text-muted-foreground">
                            <p className="leading-relaxed">{product.description}</p>
                        </div>

                        {/* Fragrance Notes */}
                        {product.fragranceNotes.length > 0 && product.fragranceNotes[0] !== "Various" && (
                            <div className="space-y-3">
                                <h3 className="font-heading text-xl font-medium text-foreground">Fragrance Notes</h3>
                                <ul className="list-disc list-inside font-body text-muted-foreground text-sm space-y-1">
                                    {product.fragranceNotes.map((note, index) => (
                                        <li key={index}>{note}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Actions */}
                        <div className="pt-6 border-t border-border flex flex-col sm:flex-row gap-4">
                            <div className="flex items-center border border-border rounded-sm w-fit">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                                >
                                    -
                                </button>
                                <span className="w-12 text-center font-body">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(quantity + 1)}
                                    className="px-4 py-3 hover:bg-secondary/50 transition-colors"
                                >
                                    +
                                </button>
                            </div>

                            <Button
                                onClick={handleAddToCart}
                                className="flex-grow py-6 text-lg tracking-wider rounded-sm bg-primary text-primary-foreground hover:bg-primary/90"
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-24 pt-12 border-t border-border">
                    <h2 className="font-heading text-3xl font-light text-foreground mb-8 text-center">Customer Reviews</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-1">
                            <h3 className="font-heading text-xl mb-6">Write a Review</h3>
                            <form onSubmit={handleAddReview} className="space-y-4">
                                <div>
                                    <label className="block font-body text-sm mb-2 text-muted-foreground">Name</label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full border border-border p-3 rounded-sm font-body bg-transparent focus:outline-none focus:border-primary"
                                        value={newReview.author}
                                        onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block font-body text-sm mb-2 text-muted-foreground">Rating</label>
                                    <div className="flex gap-2">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <button
                                                type="button"
                                                key={star}
                                                onClick={() => setNewReview({ ...newReview, rating: star })}
                                                className="focus:outline-none"
                                            >
                                                <Star
                                                    size={24}
                                                    className={star <= newReview.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-body text-sm mb-2 text-muted-foreground">Review</label>
                                    <textarea
                                        required
                                        rows={4}
                                        className="w-full border border-border p-3 rounded-sm font-body bg-transparent focus:outline-none focus:border-primary"
                                        value={newReview.text}
                                        onChange={(e) => setNewReview({ ...newReview, text: e.target.value })}
                                    />
                                </div>
                                <Button type="submit" className="w-full rounded-sm">Submit Review</Button>
                            </form>
                        </div>

                        <div className="lg:col-span-2 space-y-8">
                            {reviews.length === 0 ? (
                                <p className="font-body text-muted-foreground">No reviews yet. Be the first to review!</p>
                            ) : (
                                reviews.map((review) => (
                                    <div key={review.id} className="border-b border-border pb-6 last:border-0 relative">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <span className="font-body font-medium mr-4 text-foreground">{review.author}</span>
                                                <span className="font-body text-xs text-muted-foreground">{review.date}</span>
                                            </div>
                                            <div className="flex">
                                                {[1, 2, 3, 4, 5].map((star) => (
                                                    <Star
                                                        key={star}
                                                        size={14}
                                                        strokeWidth={1.5}
                                                        className={star <= review.rating ? "fill-primary text-primary" : "text-muted-foreground/30"}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="font-body text-sm text-foreground/80 mt-2">{review.text}</p>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ProductDetails;
