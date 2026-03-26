import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Package, Truck, CheckCircle2 } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Orders = () => {
    const { user, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/auth");
        }
    }, [isAuthenticated, navigate]);

    if (!user) return null;

    const orders = user.orders || [];

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Processing":
                return <Package size={16} className="text-orange-500" />;
            case "Shipped":
                return <Truck size={16} className="text-blue-500" />;
            case "Delivered":
                return <CheckCircle2 size={16} className="text-green-500" />;
            default:
                return <Package size={16} className="text-orange-500" />;
        }
    };

    const getStatusStyle = (status: string) => {
        switch (status) {
            case "Processing":
                return "bg-orange-500/10 text-orange-600 border-orange-500/20";
            case "Shipped":
                return "bg-blue-500/10 text-blue-600 border-blue-500/20";
            case "Delivered":
                return "bg-green-500/10 text-green-600 border-green-500/20";
            default:
                return "bg-secondary/20 text-foreground border-border";
        }
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 flex flex-col bg-secondary/5">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="font-heading text-4xl mb-3 text-foreground">My Orders</h1>
                        <p className="font-body text-muted-foreground">Track and manage your recent purchases.</p>
                    </div>

                    {orders.length === 0 ? (
                        <div className="text-center py-20 bg-background border border-border/50 rounded-sm shadow-sm">
                            <Package size={48} strokeWidth={1} className="mx-auto mb-4 text-muted-foreground/30" />
                            <h2 className="font-heading text-2xl mb-2 text-foreground">No orders yet</h2>
                            <p className="font-body text-muted-foreground mb-6">Looks like you haven't placed any orders with us.</p>
                            <Link to="/shop">
                                <Button className="px-8 py-6 rounded-sm tracking-widest uppercase">Start Shopping</Button>
                            </Link>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            {orders.map((order) => (
                                <div key={order.orderId} className="bg-background border border-border/50 rounded-sm shadow-sm overflow-hidden">
                                    <div className="p-6 md:p-8 border-b border-border/50 bg-secondary/10 flex flex-col md:flex-row md:items-center justify-between gap-4">
                                        <div>
                                            <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Order Number</p>
                                            <p className="font-medium text-foreground">{order.orderId}</p>
                                        </div>
                                        <div>
                                            <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Order Date</p>
                                            <p className="font-medium text-foreground">{new Date(order.date).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Total</p>
                                            <p className="font-medium text-foreground">${order.total.toFixed(2)}</p>
                                        </div>
                                        <div>
                                            <p className="font-body text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Status</p>
                                            <div className={`flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-medium ${getStatusStyle(order.status)}`}>
                                                {getStatusIcon(order.status)}
                                                {order.status}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-6 md:p-8">
                                        <h3 className="font-heading text-lg mb-4 text-foreground">Items Ordered</h3>
                                        <div className="space-y-4">
                                            {order.items.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-center">
                                                    <div className="w-16 h-16 bg-secondary/30 rounded-sm overflow-hidden flex-shrink-0 border border-border/50">
                                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                                    </div>
                                                    <div className="flex-grow">
                                                        <h4 className="font-body font-medium text-sm md:text-base text-foreground mb-1">{item.name}</h4>
                                                        <p className="font-body text-xs text-muted-foreground">Qty: {item.quantity}</p>
                                                    </div>
                                                    <p className="font-body font-medium text-sm md:text-base text-foreground">${(item.price * item.quantity).toFixed(2)}</p>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mt-8 pt-6 border-t border-border/50">
                                            <h3 className="font-heading text-lg mb-2 text-foreground">Shipping Details</h3>
                                            <p className="font-body text-sm text-muted-foreground leading-relaxed">{order.shippingAddress}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Orders;
