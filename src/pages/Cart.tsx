import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const Cart = () => {
    const { items, updateQuantity, removeItem, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    return (
        <div className="min-h-screen pt-24 flex flex-col">
            <Navbar />

            <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                <h1 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-12 text-center md:text-left">
                    Your Cart
                </h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 bg-secondary/20 rounded-sm">
                        <h2 className="font-heading text-2xl mb-4">Your cart is currently empty.</h2>
                        <p className="font-body text-muted-foreground mb-8">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link to="/shop">
                            <Button className="px-8 py-6 rounded-sm tracking-wider">
                                CONTINUE SHOPPING
                            </Button>
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-8">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-6 py-6 border-b border-border relative">
                                    <div className="w-24 h-32 md:w-32 md:h-40 flex-shrink-0 bg-secondary/30 rounded-sm overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <div className="flex-grow flex flex-col justify-between">
                                        <div>
                                            <div className="flex justify-between items-start">
                                                <Link to={`/product/${item.id}`}>
                                                    <h3 className="font-heading text-xl md:text-2xl hover:text-primary transition-colors">
                                                        {item.name}
                                                    </h3>
                                                </Link>
                                                <p className="font-body font-medium">${item.price * item.quantity}</p>
                                            </div>
                                            <p className="font-body text-muted-foreground mt-1">${item.price} each</p>
                                        </div>

                                        <div className="flex items-center justify-between mt-4">
                                            <div className="flex items-center border border-border rounded-sm w-fit">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="px-3 py-2 hover:bg-secondary/50 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="w-10 text-center font-body text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-2 hover:bg-secondary/50 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.id)}
                                                className="text-muted-foreground hover:text-destructive flex items-center gap-1 text-sm font-body transition-colors"
                                            >
                                                <Trash2 size={16} />
                                                <span className="hidden sm:inline">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="pt-4 flex justify-between items-center">
                                <Link to="/shop" className="text-primary hover:underline font-body text-sm tracking-wider uppercase">
                                    ← Continue Shopping
                                </Link>
                                <button
                                    onClick={clearCart}
                                    className="text-muted-foreground hover:text-foreground text-sm font-body tracking-wider uppercase"
                                >
                                    Clear Cart
                                </button>
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-secondary/20 p-8 rounded-sm sticky top-32">
                                <h2 className="font-heading text-2xl mb-6 border-b border-border pb-4">
                                    Order Summary
                                </h2>

                                <div className="space-y-4 font-body mb-8">
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Shipping</span>
                                        <span>Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between text-muted-foreground">
                                        <span>Taxes</span>
                                        <span>Calculated at checkout</span>
                                    </div>

                                    <div className="border-t border-border pt-4 mt-4 flex justify-between font-medium text-lg text-foreground">
                                        <span>Estimated Total</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <Button
                                    onClick={() => navigate('/checkout')}
                                    className="w-full py-6 text-base tracking-widest rounded-sm"
                                >
                                    PROCEED TO CHECKOUT
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Cart;
