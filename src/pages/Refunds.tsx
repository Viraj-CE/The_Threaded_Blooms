import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Refunds = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-24 items-center flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                    <h1 className="font-heading text-4xl mb-8 text-foreground pb-4 border-b border-border/50">Shipping & Refunds Policy</h1>
                    
                    <div className="space-y-8 font-body text-muted-foreground font-light leading-relaxed">
                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">1. Shipping Options</h2>
                            <p>We process all orders within 1-2 business days. Standard shipping usually takes 3-5 business days. Expedited shipping options (1-2 days) are available at checkout. You will receive a tracking number once your order is shipped.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">2. Return Eligibility</h2>
                            <p>We want you to love your purchase. If you are not completely satisfied, you may return any unused items in their original condition and packaging within 14 days of delivery for a full refund (excluding shipping costs).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">3. How to Start a Return</h2>
                            <p>To initiate a return, please contact our support team with your order number. We will provide you with a return shipping address and instructions. Please note that return shipping costs are the responsibility of the customer.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">4. Damaged Items</h2>
                            <p>If your order arrives damaged, please send us an email within 48 hours of delivery including photos of the damaged items and the packaging. We will gladly send a replacement at no extra cost.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">5. Processing Refunds</h2>
                            <p>Once we receive and inspect your return, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and applied to your original method of payment within 5-7 business days.</p>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Refunds;
