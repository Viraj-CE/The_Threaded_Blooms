import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Truck, Package, Clock, RefreshCw } from "lucide-react";

const Shipping = () => {
    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-12 md:py-24 max-w-4xl">
                <ScrollReveal direction="up">
                    <h1 className="font-heading text-4xl md:text-5xl font-light text-center mb-4 text-foreground">Shipping & Returns</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                    <p className="font-body text-center text-muted-foreground mb-16">
                        Everything you need to know about getting our products to your door.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-12">
                    <ScrollReveal direction="up" delay={0.2}>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Truck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-medium mb-2 text-foreground">Standard Delivery</h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        We offer flat-rate standard shipping of $5.99 on all orders within the contiguous US. Orders typically arrive within 3-5 business days from the date of dispatch.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Package className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-medium mb-2 text-foreground">Free Shipping</h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        Enjoy complimentary standard shipping on all orders over $75. The discount is automatically applied at checkout once your cart meets the minimum requirement.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal direction="up" delay={0.3}>
                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-medium mb-2 text-foreground">Processing Time</h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        Every order is carefully packaged by hand. Please allow 1-2 business days for us to process and dispatch your order. You'll receive a tracking number via email once shipped.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="flex-shrink-0 mt-1">
                                    <RefreshCw className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-heading text-xl font-medium mb-2 text-foreground">Returns & Exchanges</h3>
                                    <p className="font-body text-muted-foreground leading-relaxed">
                                        We stand by our products. If you are not completely satisfied, we accept returns of unused candles in their original packaging within 14 days of delivery.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal direction="up" delay={0.4}>
                    <div className="mt-16 p-8 bg-secondary/50 rounded-sm text-center">
                        <h3 className="font-heading text-xl font-medium mb-3 text-foreground">International Shipping</h3>
                        <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Currently, we only ship within the United States. We are working hard to expand our shipping capabilities globally to bring our handcrafted fragrances to you soon!
                        </p>
                    </div>
                </ScrollReveal>
            </main>
            <Footer />
        </div>
    );
};

export default Shipping;
