import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast.success("Message sent successfully! We'll get back to you soon.");
            (e.target as HTMLFormElement).reset();
        }, 1000);
    };

    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                <div className="text-center mb-16">
                    <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-4">
                        Contact Us
                    </h1>
                    <p className="font-body text-muted-foreground tracking-widest uppercase text-sm">
                        We'd love to hear from you
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="font-heading text-3xl mb-6">Get in Touch</h2>
                            <p className="font-body text-muted-foreground leading-relaxed">
                                Whether you have a question about our collections, need assistance with an order, or are interested in wholesale opportunities, our team is ready to answer all your questions.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4 text-muted-foreground">
                                <Mail className="mt-1 text-primary" size={20} />
                                <div>
                                    <h4 className="font-body font-medium text-foreground">Email</h4>
                                    <p>hello@thethreadedbloom.com</p>
                                    <p className="text-sm">We aim to reply within 24 hours.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-muted-foreground">
                                <Phone className="mt-1 text-primary" size={20} />
                                <div>
                                    <h4 className="font-body font-medium text-foreground">Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                    <p className="text-sm">Mon-Fri from 9am to 6pm EST.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 text-muted-foreground">
                                <MapPin className="mt-1 text-primary" size={20} />
                                <div>
                                    <h4 className="font-body font-medium text-foreground">Studio</h4>
                                    <p>123 Artisan Maker Way</p>
                                    <p>Brooklyn, NY 11201</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-secondary/10 p-8 rounded-sm">
                        <h2 className="font-heading text-3xl mb-6">Send a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" required placeholder="Jane Doe" className="rounded-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" required placeholder="jane@example.com" className="rounded-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input id="subject" required placeholder="How can we help?" className="rounded-sm" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <textarea
                                    id="message"
                                    required
                                    rows={5}
                                    className="flex w-full rounded-sm border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your message here..."
                                />
                            </div>
                            <Button type="submit" className="w-full py-6 tracking-widest rounded-sm" disabled={isSubmitting}>
                                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                            </Button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Contact;
