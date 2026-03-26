import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Plus, Check } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Checkout = () => {
    const { items, cartTotal, clearCart } = useCart();
    const { isAuthenticated, user, addAddress, setDefaultAddress, addOrder } = useAuth();
    const navigate = useNavigate();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [showNewAddressForm, setShowNewAddressForm] = useState(false);
    const [newAddr, setNewAddr] = useState({ firstName: "", lastName: "", address: "", city: "", state: "", zip: "" });

    useEffect(() => {
        if (!isAuthenticated) {
            toast.error("Please login or register to checkout");
            navigate("/auth");
        }
    }, [isAuthenticated, navigate]);

    if (!isAuthenticated || !user) return null;

    const selectedAddress = user.addresses?.find(a => a.isDefault) || user.addresses?.[0];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (items.length === 0) return;
        if (!selectedAddress) {
            toast.error("Please select a shipping address");
            return;
        }

        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);

            const fullAddress = `${selectedAddress.firstName} ${selectedAddress.lastName}, ${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zip}`;
            addOrder({
                items,
                total: cartTotal,
                shippingAddress: fullAddress
            });

            clearCart();
            toast.success("Order placed successfully!");
        }, 1500);
    };

    const handleSaveNewAddress = (e: React.MouseEvent) => {
        e.preventDefault();
        if (Object.values(newAddr).some(v => v.trim() === "")) {
            toast.error("Please fill in all address fields");
            return;
        }
        addAddress(newAddr);
        setShowNewAddressForm(false);
        setNewAddr({ firstName: "", lastName: "", address: "", city: "", state: "", zip: "" });
    };

    if (isSuccess) {
        return (
            <PageTransition>
                <div className="min-h-screen pt-24 text-center bg-background flex flex-col justify-center items-center">
                    <h1 className="font-heading text-4xl mb-4 text-primary">Thank you for your order!</h1>
                    <p className="font-body text-muted-foreground mb-8">We have received your order and it will be shipped to {selectedAddress?.address}.</p>
                    <div className="flex gap-4">
                        <Link to="/orders">
                            <Button className="px-8 py-6 rounded-sm tracking-widest">
                                TRACK ORDER
                            </Button>
                        </Link>
                        <Link to="/">
                            <Button variant="outline" className="px-8 py-6 rounded-sm tracking-widest">
                                RETURN HOME
                            </Button>
                        </Link>
                    </div>
                </div>
            </PageTransition>
        );
    }

    if (items.length === 0) {
        return (
            <PageTransition>
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
            </PageTransition>
        );
    }

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 flex flex-col">
                <Navbar />

                <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                        <div>
                            <h1 className="font-heading text-4xl mb-8">Checkout</h1>
                            <form onSubmit={handleSubmit} className="space-y-8">

                                <div className="space-y-4">
                                    <h2 className="font-heading text-2xl border-b border-border pb-2">Contact Information</h2>
                                    <p className="font-body text-foreground">Logged in as: <span className="font-medium">{user.email}</span></p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex justify-between items-end border-b border-border pb-2">
                                        <h2 className="font-heading text-2xl">Shipping Address</h2>
                                        {user.addresses?.length < 3 && !showNewAddressForm && (
                                            <button
                                                type="button"
                                                onClick={() => setShowNewAddressForm(true)}
                                                className="text-primary text-sm font-medium hover:underline flex items-center gap-1"
                                            >
                                                <Plus size={14} /> Add New Address
                                            </button>
                                        )}
                                    </div>

                                    {user.addresses?.length > 0 && !showNewAddressForm ? (
                                        <div className="grid gap-4 mt-4">
                                            {user.addresses.map((addr) => (
                                                <div
                                                    key={addr.id}
                                                    onClick={() => setDefaultAddress(addr.id)}
                                                    className={`p-4 border rounded-sm cursor-pointer transition-all ${addr.isDefault ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                                                >
                                                    <div className="flex justify-between items-start mb-2">
                                                        <p className="font-medium text-foreground">{addr.firstName} {addr.lastName}</p>
                                                        {addr.isDefault && <Check size={16} className="text-primary" />}
                                                    </div>
                                                    <p className="text-sm text-muted-foreground">{addr.address}</p>
                                                    <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} {addr.zip}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (!user.addresses || user.addresses.length === 0) && !showNewAddressForm ? (
                                        <p className="text-muted-foreground text-sm py-4">No addresses saved. Please add one.</p>
                                    ) : null}

                                    {showNewAddressForm && (
                                        <div className="mt-4 p-6 border border-border rounded-sm bg-secondary/10 space-y-4">
                                            <h3 className="font-heading text-lg mb-2">New Address Details</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>First Name</Label>
                                                    <Input value={newAddr.firstName} onChange={e => setNewAddr({ ...newAddr, firstName: e.target.value })} className="rounded-sm" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Last Name</Label>
                                                    <Input value={newAddr.lastName} onChange={e => setNewAddr({ ...newAddr, lastName: e.target.value })} className="rounded-sm" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Address</Label>
                                                <Input value={newAddr.address} onChange={e => setNewAddr({ ...newAddr, address: e.target.value })} className="rounded-sm" placeholder="123 Main St" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label>City</Label>
                                                <Input value={newAddr.city} onChange={e => setNewAddr({ ...newAddr, city: e.target.value })} className="rounded-sm" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="space-y-2">
                                                    <Label>State / Province</Label>
                                                    <Input value={newAddr.state} onChange={e => setNewAddr({ ...newAddr, state: e.target.value })} className="rounded-sm" />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Postal Code</Label>
                                                    <Input value={newAddr.zip} onChange={e => setNewAddr({ ...newAddr, zip: e.target.value })} className="rounded-sm" />
                                                </div>
                                            </div>
                                            <div className="flex gap-3 pt-2">
                                                <Button type="button" onClick={handleSaveNewAddress}>Save Address</Button>
                                                {user.addresses?.length > 0 && (
                                                    <Button type="button" variant="outline" onClick={() => setShowNewAddressForm(false)}>Cancel</Button>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="space-y-4">
                                    <h2 className="font-heading text-2xl border-b border-border pb-2">Payment Context (Demo)</h2>
                                    <div className="p-4 bg-secondary/30 rounded-sm text-sm text-muted-foreground border border-border">
                                        This is a demonstration store. No real payment processing is enabled. Clicking "Place Order" will simulate a successful transaction.
                                    </div>
                                </div>

                                <Button type="submit" className="w-full py-6 text-lg tracking-widest rounded-sm" disabled={isSubmitting || (!selectedAddress && !showNewAddressForm)}>
                                    {isSubmitting ? "PROCESSING..." : "PLACE ORDER"}
                                </Button>
                            </form>
                        </div>

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
        </PageTransition>
    );
};

export default Checkout;
