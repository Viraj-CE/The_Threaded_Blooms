import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import storyImg from "@/assets/our-story.jpg";

const OurStory = () => {
    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <img
                        src="https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&q=80"
                        alt="Candle making process"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="relative z-20 text-center text-primary-foreground px-6">
                        <h1 className="font-heading text-5xl md:text-6xl font-light mb-4 text-white">Our Story</h1>
                        <p className="font-body tracking-widest uppercase text-sm text-white/90">
                            The heart behind the glow
                        </p>
                    </div>
                </section>

                {/* Content Section */}
                <section className="py-20 md:py-32 container mx-auto px-6">
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="text-center">
                            <h2 className="font-heading text-3xl md:text-4xl mb-6">Rooted in Nature</h2>
                            <div className="w-16 h-[1px] bg-primary mx-auto mb-8"></div>
                            <p className="font-body text-muted-foreground leading-relaxed text-lg">
                                The Threaded Bloom began with a simple belief: the spaces we inhabit should reflect the peace and beauty of the natural world. What started as a small, personal endeavor in a humble kitchen has blossomed into a dedicated studio crafting premium home fragrances.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="aspect-square bg-secondary/30 rounded-sm overflow-hidden">
                               <img
                                             src={storyImg}
                                             alt="Artisan hand-pouring candles in our workshop"
                                             loading="lazy"
                                             width={800}
                                             height={1000}
                                             className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="space-y-6">
                                <h3 className="font-heading text-2xl">The Craft</h3>
                                <p className="font-body text-muted-foreground leading-relaxed">
                                    Every product is painstakingly poured by hand. We use only 100% natural, sustainable soy wax, free from harmful additives and toxins. Our wicks are lead-free cotton, ensuring a clean, consistent burn that protects your home's air quality.
                                </p>
                                <p className="font-body text-muted-foreground leading-relaxed">
                                    The fragrances we curate are complex algorithms of nature—sophisticated blends of essential oils and premium phthalate-free fragrance oils designed to evoke memories and create perfectly balanced atmospheres.
                                </p>
                            </div>
                        </div>

                        <div className="text-center pt-8">
                            <h3 className="font-heading text-2xl mb-4">Our Promise</h3>
                            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                                We are committed to ethical sourcing, sustainable packaging, and creating products that elevate your everyday rituals. When you light a Threaded Bloom candle, you are experiencing a small piece of our passion, carefully crafted just for you.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OurStory;
