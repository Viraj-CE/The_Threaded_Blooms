import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, MapPin, Check, Trash2, Plus } from "lucide-react";
import PageTransition from "@/components/PageTransition";

const Profile = () => {
    const { user, isAuthenticated, updateProfile, removeAddress, setDefaultAddress } = useAuth();
    const navigate = useNavigate();

    const [isEditing, setIsEditing] = useState(false);
    const [profileData, setProfileData] = useState({
        firstName: user?.firstName || "",
        lastName: user?.lastName || "",
        phone: user?.phone || ""
    });

    if (!isAuthenticated || !user) {
        navigate("/auth");
        return null;
    }

    const handleProfileUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        updateProfile(profileData);
        setIsEditing(false);
    };

    return (
        <PageTransition>
            <div className="min-h-screen pt-24 flex flex-col bg-secondary/5">
                <Navbar />
                <main className="flex-grow container mx-auto px-6 py-12 md:py-20 max-w-4xl">
                    <div className="mb-12 text-center md:text-left">
                        <h1 className="font-heading text-4xl mb-3 text-foreground">My Profile</h1>
                        <p className="font-body text-muted-foreground">Manage your personal information and saved addresses.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {/* Left Column: Personal Info */}
                        <div className="md:col-span-1 space-y-8">
                            <section className="bg-background p-8 border border-border/50 rounded-sm shadow-sm">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-heading text-xl flex items-center gap-2">
                                        <User size={18} className="text-primary" />
                                        Personal Info
                                    </h2>
                                    {!isEditing && (
                                        <button
                                            onClick={() => setIsEditing(true)}
                                            className="text-xs font-medium text-primary hover:underline"
                                        >
                                            Edit
                                        </button>
                                    )}
                                </div>

                                {isEditing ? (
                                    <form onSubmit={handleProfileUpdate} className="space-y-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input
                                                id="firstName"
                                                value={profileData.firstName}
                                                onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                                                className="rounded-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input
                                                id="lastName"
                                                value={profileData.lastName}
                                                onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                                                className="rounded-sm"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                value={profileData.phone}
                                                onChange={(e) => setProfileData({ ...profileData, phone: e.target.value })}
                                                className="rounded-sm"
                                            />
                                        </div>
                                        <div className="flex gap-2 pt-2">
                                            <Button type="submit" size="sm" className="rounded-sm">Save</Button>
                                            <Button type="button" variant="outline" size="sm" onClick={() => setIsEditing(false)} className="rounded-sm">Cancel</Button>
                                        </div>
                                    </form>
                                ) : (
                                    <div className="space-y-4">
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Full Name</p>
                                            <p className="text-foreground font-medium">
                                                {user.firstName || user.lastName ? `${user.firstName} ${user.lastName}` : "Not provided"}
                                            </p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Email Address</p>
                                            <p className="text-foreground font-medium">{user.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-[10px] tracking-widest uppercase text-muted-foreground mb-1">Phone Number</p>
                                            <p className="text-foreground font-medium">{user.phone || "Not provided"}</p>
                                        </div>
                                    </div>
                                )}
                            </section>
                        </div>

                        {/* Right Column: Addresses */}
                        <div className="md:col-span-2 space-y-8">
                            <section className="bg-background p-8 border border-border/50 rounded-sm shadow-sm h-full">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="font-heading text-xl flex items-center gap-2">
                                        <MapPin size={18} className="text-primary" />
                                        Saved Addresses
                                    </h2>
                                    <Link to="/checkout">
                                        <Button variant="outline" size="sm" className="rounded-sm gap-1">
                                            <Plus size={14} /> Add New
                                        </Button>
                                    </Link>
                                </div>

                                {user.addresses?.length === 0 ? (
                                    <div className="text-center py-12 border-2 border-dashed border-border/50 rounded-sm">
                                        <p className="text-muted-foreground text-sm">No saved addresses found.</p>
                                        <p className="text-xs text-muted-foreground/60 mt-1">You can add one during checkout.</p>
                                    </div>
                                ) : (
                                    <div className="grid gap-4">
                                        {user.addresses.map((addr) => (
                                            <div
                                                key={addr.id}
                                                className={`p-5 border rounded-sm transition-all relative ${addr.isDefault ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2 pr-16">
                                                    <div>
                                                        <p className="font-medium text-foreground">{addr.firstName} {addr.lastName}</p>
                                                        <p className="text-sm text-muted-foreground mt-1">{addr.address}</p>
                                                        <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} {addr.zip}</p>
                                                    </div>
                                                    {addr.isDefault && (
                                                        <div className="flex items-center gap-1 text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-1 rounded-sm">
                                                            <Check size={10} /> Default
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="absolute right-4 top-4 flex flex-col gap-2">
                                                    {!addr.isDefault && (
                                                        <button
                                                            onClick={() => setDefaultAddress(addr.id)}
                                                            className="text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors text-right"
                                                        >
                                                            Set Default
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => removeAddress(addr.id)}
                                                        className="text-muted-foreground hover:text-destructive transition-colors flex items-center justify-end"
                                                        title="Remove address"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </PageTransition>
    );
};

export default Profile;
