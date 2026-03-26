import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Star, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mockProducts } from "@/data/mockProducts";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import PageTransition from "@/components/PageTransition";

const Shop = () => {
    const { addItem } = useCart();
    const [searchParams, setSearchParams] = useSearchParams();

    // Dynamically generate categories based on mockProducts
    const categories = ["All", ...Array.from(new Set(mockProducts.map((p) => p.category)))];

    const urlCategory = searchParams.get("category");
    const searchQuery = searchParams.get("search");
    const [filter, setFilter] = useState(urlCategory && categories.includes(urlCategory) ? urlCategory : "All");

    useEffect(() => {
        const cat = searchParams.get("category");
        if (cat && categories.includes(cat)) {
            setFilter(cat);
        } else {
            setFilter("All");
        }
    }, [searchParams]);

    const handleFilterChange = (cat: string) => {
        setFilter(cat);
        if (cat === "All") {
            setSearchParams({});
        } else {
            setSearchParams({ category: cat });
        }
    };

    const filteredProducts = mockProducts.filter((p) => {
        const matchesCategory = filter === "All" || p.category === filter;
        const matchesSearch = !searchQuery ||
            p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const clearSearch = () => {
        setSearchParams({});
        setFilter("All");
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 flex flex-col">
                <Navbar />

                <main className="flex-grow container mx-auto px-6 py-12">
                    <div className="text-center mb-12">
                        <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
                            Our Collection
                        </h1>
                        <p className="font-body text-muted-foreground tracking-widest uppercase text-sm">
                            Handcrafted with Nature's Best
                        </p>
                    </div>

                    {/* Filters */}
                    <div className="flex justify-center gap-4 mb-12 flex-wrap">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => handleFilterChange(cat)}
                                className={`font-body text-sm tracking-widest uppercase transition-colors px-4 py-2 ${filter === cat
                                    ? "text-primary border-b-2 border-primary"
                                    : "text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                            {filteredProducts.map((product, index) => (
                                <ScrollReveal key={product.id} delay={index * 0.05}>
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="group flex flex-col h-full bg-background p-4 rounded-sm shadow-sm hover:shadow-xl transition-shadow duration-300"
                                    >
                                        <Link to={`/product/${product.id}`} className="block aspect-[3/4] overflow-hidden rounded-sm mb-5 relative">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                            />
                                        </Link>
                                        <div className="text-center space-y-2 flex-grow flex flex-col items-center">
                                            <Link to={`/product/${product.id}`}>
                                                <h3 className="font-heading text-xl font-normal text-foreground hover:text-primary transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <div className="flex items-center gap-1 justify-center pb-2">
                                                <Star size={12} className="fill-primary text-primary" />
                                                <span className="font-body text-xs text-muted-foreground">
                                                    {product.rating.toFixed(1)} ({product.reviews.length})
                                                </span>
                                            </div>
                                            <p className="font-body text-muted-foreground text-md font-light mt-auto">
                                                ${product.price}
                                            </p>
                                        </div>
                                        <Button
                                            variant="outline"
                                            className="w-full mt-4 rounded-sm border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all active:scale-95"
                                            onClick={() =>
                                                addItem({
                                                    id: product.id,
                                                    name: product.name,
                                                    price: product.price,
                                                    image: product.image,
                                                    quantity: 1,
                                                })
                                            }
                                        >
                                            Add to Cart
                                        </Button>
                                    </motion.div>
                                </ScrollReveal>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-secondary/10 rounded-sm border border-border/50">
                            <Search size={48} strokeWidth={1} className="mx-auto mb-4 text-muted-foreground/30" />
                            <h2 className="font-heading text-2xl mb-2 text-foreground">No products found</h2>
                            <p className="font-body text-muted-foreground mb-6">
                                We couldn't find anything matching "{searchQuery}"
                                {filter !== "All" && ` in the ${filter} category`}.
                            </p>
                            <Button onClick={clearSearch} className="px-8 py-6 rounded-sm tracking-widest uppercase">
                                Clear all filters
                            </Button>
                        </div>
                    )}
                </main>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default Shop;
