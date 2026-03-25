import product1 from "@/assets/product-candle-1.jpg";
import product2 from "@/assets/product-candle-2.jpg";
import product3 from "@/assets/product-candle-3.jpg";
import product4 from "@/assets/product-candle-4.jpg";

export type Review = {
    id: string;
    author: string;
    rating: number;
    text: string;
    date: string;
};

export type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    fragranceNotes: string[];
    category: string;
    rating: number;
    reviews: Review[];
};

export const mockProducts: Product[] = [
    {
        id: "amber-glow",
        name: "Amber Glow",
        price: 28,
        image: product1,
        description: "A warm and inviting blend of rich amber and subtle vanilla notes, perfect for cozy evenings. Hand-poured with natural soy wax.",
        fragranceNotes: ["Top: Bergamot", "Heart: Warm Amber", "Base: Vanilla Bean"],
        category: "Candles",
        rating: 4.5,
        reviews: [
            { id: "1", author: "Sarah M.", rating: 5, text: "Absolutely love the smell! Fills the whole room.", date: "2026-03-20" },
            { id: "2", author: "James T.", rating: 4, text: "Great candle, burns evenly.", date: "2026-03-15" }
        ]
    },
    {
        id: "lavender-serenity",
        name: "Lavender Serenity",
        price: 32,
        image: product2,
        description: "Experience pure relaxation with our premium French lavender mixed with hints of eucalyptus. Designed to melt away the stress of the day.",
        fragranceNotes: ["Top: Eucalyptus", "Heart: French Lavender", "Base: White Musk"],
        category: "Candles",
        rating: 5,
        reviews: [
            { id: "3", author: "Emily R.", rating: 5, text: "So calming, perfect for my evening routine.", date: "2026-03-18" }
        ]
    },
    {
        id: "rose-copper",
        name: "Rosé Copper",
        price: 35,
        image: product3,
        description: "An elegant infusion of crushed rose petals and luxurious oud wood. A sophisticated and romantic fragrance for any setting.",
        fragranceNotes: ["Top: Pink Peppercorn", "Heart: Damask Rose", "Base: Oud Wood"],
        category: "Candles",
        rating: 4,
        reviews: [
            { id: "4", author: "Michael B.", rating: 4, text: "Very sophisticated scent.", date: "2026-03-10" }
        ]
    },
    {
        id: "bloom-gift-set",
        name: "Bloom Gift Set",
        price: 72,
        image: product4,
        description: "The ultimate collection of our three best-selling fragrances in beautiful miniature copper vessels. Features Amber Glow, Lavender Serenity, and Rosé Copper.",
        fragranceNotes: ["Various"],
        category: "Gift Sets",
        rating: 5,
        reviews: []
    },
    {
        id: "citrus-breeze",
        name: "Citrus Breeze",
        price: 25,
        image: product1,
        description: "A refreshing burst of lemon zest and sweet orange, designed to energize any space. Our essential oil blend is uplifting and bright.",
        fragranceNotes: ["Top: Lemon Zest", "Heart: Sweet Orange", "Base: Vetiver"],
        category: "Air Fresheners",
        rating: 4,
        reviews: []
    },
    {
        id: "ocean-mist",
        name: "Ocean Mist",
        price: 30,
        image: product2,
        description: "Crisp aquatic notes blended with sea salt and driftwood. Brings the serene feeling of a coastal morning right into your home.",
        fragranceNotes: ["Top: Sea Salt", "Heart: Aquatic Accord", "Base: Driftwood"],
        category: "Candles",
        rating: 4.8,
        reviews: []
    },
    {
        id: "dried-lavender-bouquet",
        name: "Dried Lavender Bouquet",
        price: 45,
        image: product3,
        description: "A gorgeous, long-lasting handcrafted bouquet featuring French lavender and dried botanicals. Brings a subtle, constant fragrance to any space.",
        fragranceNotes: ["Top: Lavender", "Heart: Sage", "Base: Dried Woods"],
        category: "Bouquets",
        rating: 5,
        reviews: []
    }
];
