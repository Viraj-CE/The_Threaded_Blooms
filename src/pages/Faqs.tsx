import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
    {
        question: "What are your candles made of?",
        answer: "Our candles are hand-poured using 100% natural soy wax, premium fragrance oils, and lead-free cotton wicks for a clean, consistent burn."
    },
    {
        question: "How long do the candles burn?",
        answer: "Our standard 8oz candles offer approximately 45–50 hours of burn time when cared for properly. Always trim your wick to 5mm before each use!"
    },
    {
        question: "Do you use synthetic fragrances?",
        answer: "We use a blend of natural essential oils and high-quality, phthalate-free fragrance oils to ensure a safe and beautiful scent throw."
    },
    {
        question: "Can I recycle the vessels?",
        answer: "Absolutely! Once your candle has burned down to about 1cm, simply wash out the remaining wax with hot, soapy water and reuse the jar for plants, pens, or trinkets."
    },
    {
        question: "How does the Custom Fragrance Candle work?",
        answer: "On our Custom Fragrance Candle product page, you'll find three dropdown menus to select your Top, Heart, and Base notes. We hand-pour each custom candle to order, blending your chosen notes to create a truly unique scent profile."
    },
    {
        question: "How long does it take to receive a custom candle?",
        answer: "Custom candles are made to order and typically take 3–5 business days to prepare before dispatch. You'll receive a tracking notification once your order is on its way."
    },
    {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer complimentary standard shipping on all orders over ₹999. Orders below this threshold are charged a flat shipping fee, calculated at checkout."
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns on unused, unopened products within 14 days of delivery. Custom fragrance candles are made to order and are non-returnable unless they arrive damaged. Please contact us at hello@thethreadedbloom.com to initiate a return."
    },
    {
        question: "How do I care for my candle?",
        answer: "For the best experience: trim your wick to 5mm before each use, allow the wax to melt to the edge of the jar on the first burn (2–3 hours), and never burn for more than 4 hours at a time. Keep away from drafts and never leave a burning candle unattended."
    },
    {
        question: "Do you offer wholesale or bulk orders?",
        answer: "Yes, we'd love to work with you! For wholesale enquiries or bulk gifting orders (10+ units), please reach out to us at hello@thethreadedbloom.com and our team will get back to you within 48 hours."
    }
];

const Faqs = () => {
    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />
            <main className="flex-grow container mx-auto px-6 py-12 md:py-24 max-w-3xl">
                <ScrollReveal direction="up">
                    <h1 className="font-heading text-4xl md:text-5xl font-light text-center mb-4 text-foreground">Frequently Asked Questions</h1>
                </ScrollReveal>
                <ScrollReveal direction="up" delay={0.2}>
                    <p className="font-body text-center text-muted-foreground mb-12">
                        Find answers to common questions about our products and processes.
                    </p>
                </ScrollReveal>

                <div className="w-full">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <ScrollReveal key={index} direction="up" delay={0.1 * (index + 1)}>
                                <AccordionItem value={`item-${index}`}>
                                    <AccordionTrigger className="font-body text-lg font-medium hover:text-primary transition-colors text-left">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="font-body text-muted-foreground leading-relaxed text-base pt-2">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            </ScrollReveal>
                        ))}
                    </Accordion>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Faqs;
