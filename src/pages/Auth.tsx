import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useAuth, Address } from "@/context/AuthContext";
import { toast } from "sonner";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [phone, setPhone] = useState("");

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    const { login, register, isAuthenticated } = useAuth();
    const navigate = useNavigate();

    React.useEffect(() => {
        if (isAuthenticated) {
            navigate(-1);
        }
    }, [isAuthenticated, navigate]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isLogin) {
            login(email);
        } else {
            if (password !== confirmPassword) {
                toast.error("Passwords do not match");
                return;
            }
            const initialAddress: Address = {
                id: Date.now().toString(),
                firstName,
                lastName,
                address,
                city,
                state,
                zip,
                isDefault: true
            };
            register({ email, phone, addresses: [initialAddress] });
        }
    };

    return (
        <div className="min-h-screen pt-24 flex flex-col bg-secondary/10">
            <Navbar />
            <main className="flex-grow flex items-center justify-center container mx-auto px-6 py-12">
                <div className={`w-full ${isLogin ? 'max-w-md' : 'max-w-3xl'} bg-background p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-primary/10 rounded-sm transition-all duration-300`}>
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-3xl font-light text-foreground mb-3">
                            {isLogin ? "Welcome Back" : "Create Account"}
                        </h1>
                        <p className="font-body text-muted-foreground text-sm leading-relaxed">
                            {isLogin ? "Enter your details to access your account." : "Join us to manage orders and save your favorite fragrances."}
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className={isLogin ? "space-y-5" : "grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"}>
                        <div className="space-y-5">
                            {!isLogin && <h3 className="font-heading text-lg border-b border-border pb-2 mb-4">Account Details</h3>}
                            <div>
                                <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Email Address</label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Phone Number</label>
                                    <input
                                        type="tel"
                                        required={!isLogin}
                                        className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                            )}

                            <div>
                                <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Password</label>
                                <input
                                    type="password"
                                    required
                                    className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            {!isLogin && (
                                <div>
                                    <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Confirm Password</label>
                                    <input
                                        type="password"
                                        required={!isLogin}
                                        className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                </div>
                            )}
                        </div>

                        {!isLogin && (
                            <div className="space-y-5">
                                <h3 className="font-heading text-lg border-b border-border pb-2 mb-4">Shipping Address</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">First Name</label>
                                        <input
                                            type="text"
                                            required={!isLogin}
                                            className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Last Name</label>
                                        <input
                                            type="text"
                                            required={!isLogin}
                                            className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Address</label>
                                    <input
                                        type="text"
                                        required={!isLogin}
                                        className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">City</label>
                                    <input
                                        type="text"
                                        required={!isLogin}
                                        className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">State / Province</label>
                                        <input
                                            type="text"
                                            required={!isLogin}
                                            className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                        />
                                    </div>
                                    <div>
                                        <label className="block font-body text-[10px] tracking-widest uppercase mb-2 text-muted-foreground">Postal Code</label>
                                        <input
                                            type="text"
                                            required={!isLogin}
                                            className="w-full border border-border p-3 text-sm rounded-sm font-body bg-transparent focus:outline-none focus:border-primary transition-colors"
                                            value={zip}
                                            onChange={(e) => setZip(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className={isLogin ? "" : "md:col-span-2 md:w-1/2 md:mx-auto mt-6"}>
                            <Button type="submit" className="w-full py-6 text-sm tracking-widest uppercase rounded-sm">
                                {isLogin ? "Sign In" : "Register & Save"}
                            </Button>
                        </div>
                    </form>

                    <div className="mt-8 text-center pt-8 border-t border-border">
                        <p className="font-body text-sm text-muted-foreground">
                            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
                            <button
                                type="button"
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-primary hover:underline font-medium ml-1 transition-all"
                            >
                                {isLogin ? "Sign Up" : "Log In"}
                            </button>
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Auth;
