import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Privacy = () => {
    return (
        <PageTransition>
            <div className="min-h-screen pt-24 items-center flex flex-col">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                    <h1 className="font-heading text-4xl mb-8 text-foreground pb-4 border-b border-border/50">Privacy Policy</h1>
                    
                    <div className="space-y-8 font-body text-muted-foreground font-light leading-relaxed">
                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">1. Information We Collect</h2>
                            <p>We collect information that you provide directly to us, including your name, email address, physical address, and payment method when you register an account, make a purchase, or communicate with us.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">2. How We Use Your Information</h2>
                            <p>We use the information we collect to fulfill your orders, process payments, communicate with you about your purchases, and send you marketing communications (if you have opted in).</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">3. Information Sharing</h2>
                            <p>We do not sell your personal information. We may share your information with third-party service providers (like shipping companies and payment processors) strictly for the purpose of fulfilling your orders.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">4. Data Security</h2>
                            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-medium text-foreground mb-3">5. Contact Us</h2>
                            <p>If you have any questions about this Privacy Policy, please contact our support team via our Contact page or at hello@thethreadedbloom.com.</p>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Privacy;
