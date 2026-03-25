import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (items.length === 0) return;

        setIsSubmitting(true);
        // Simulate API call processing
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            clearCart();
            toast.success("Order placed successfully!");
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen pt-24 text-center bg-background flex flex-col justify-center items-center">
                <h1 className="font-heading text-4xl mb-4 text-primary">Thank you for your order!</h1>
                <p className="font-body text-muted-foreground mb-8">We have received your order and will begin processing it right away.</p>
                <Link to="/">
                    <Button className="px-8 py-6 rounded-sm tracking-widest">
                        RETURN HOME
                    </Button>
                </Link>
            </div>
        );
    }

    if (items.length === 0) {
        return (
            <div className="min-h-screen pt-24 flex flex-col justify-center items-center text-center">
                <Navbar />
                <div className="py-20 flex-grow w-full flex flex-col justify-center items-center">
                    <h2 className="font-heading text-3xl mb-4">Checkout empty</h2>
                    <p className="font-body text-muted-foreground mb-6">Your cart is empty. Please add items to checkout.</p>
                    <Link to="/shop">
                        <Button>Go to Shop</Button>
                    </Link>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Checkout Form */}
                    <div>
                        <h1 className="font-heading text-4xl mb-8">Checkout</h1>
                        <form onSubmit={handleSubmit} className="space-y-8">

                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl border-b border-border pb-2">Contact Information</h2>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input id="email" type="email" required placeholder="you@example.com" className="rounded-sm" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl border-b border-border pb-2">Shipping Address</h2>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">First Name</Label>
                                        <Input id="firstName" required className="rounded-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">Last Name</Label>
                                        <Input id="lastName" required className="rounded-sm" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" required placeholder="123 Main St" className="rounded-sm" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="city">City</Label>
                                    <Input id="city" required className="rounded-sm" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="state">State / Province</Label>
                                        <Input id="state" required className="rounded-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="zip">Postal Code</Label>
                                        <Input id="zip" required className="rounded-sm" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h2 className="font-heading text-2xl border-b border-border pb-2">Payment Context (Demo)</h2>
                                <div className="p-4 bg-secondary/30 rounded-sm text-sm text-muted-foreground border border-border">
                                    This is a demonstration store. No real payment processing is enabled. Clicking "Place Order" will simulate a successful transaction.
                                </div>
                            </div>

                            <Button type="submit" className="w-full py-6 text-lg tracking-widest rounded-sm" disabled={isSubmitting}>
                                {isSubmitting ? "PROCESSING..." : "PLACE ORDER"}
                            </Button>
                        </form>
                    </div>

                    {/* Order Summary sidebar */}
                    <div className="bg-secondary/10 p-8 rounded-sm h-fit">
                        <h2 className="font-heading text-2xl mb-6">Order Summary</h2>
                        <div className="space-y-4 max-h-[40vh] overflow-y-auto pr-2 mb-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 items-center">
                                    <div className="w-16 h-16 relative flex-shrink-0 bg-secondary/30 rounded-sm overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
                                            {item.quantity}
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <h4 className="font-heading text-md">{item.name}</h4>
                                        <p className="text-sm text-muted-foreground">${item.price}</p>
                                    </div>
                                    <p className="font-body font-medium">${item.price * item.quantity}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-border pt-4 space-y-3 font-body">
                            <div className="flex justify-between text-muted-foreground text-sm">
                                <span>Subtotal</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-muted-foreground text-sm">
                                <span>Shipping</span>
                                <span>Free</span>
                            </div>
                            <div className="border-t border-border pt-3 flex justify-between font-medium text-lg">
                                <span>Total</span>
                                <span>${cartTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Checkout;
