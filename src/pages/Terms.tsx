import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Terms = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-24 items-center flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                    <h1 className="font-heading text-4xl mb-8 text-foreground pb-4 border-b border-border/50">Terms of Service</h1>
                    
                    <div className="space-y-8 font-body text-muted-foreground font-light leading-relaxed">
                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">1. Agreement to Terms</h2>
                            <p>By accessing or using The Threaded Bloom website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our services.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">2. Products and Pricing</h2>
                            <p>All descriptions of products and product pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">3. Accurate Billing Info</h2>
                            <p>You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. We reserve the right to refuse or cancel any order you place with us.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">4. Intellectual Property</h2>
                            <p>All content included on the site, such as text, graphics, logos, images, and software, is the property of The Threaded Bloom or its content suppliers and protected by copyright laws.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">5. Governing Law</h2>
                            <p>These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of India, operating out of Pune, Maharashtra.</p>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Terms;
