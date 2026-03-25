import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

export interface Address {
    id: string;
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    isDefault: boolean;
}

export interface OrderItem {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export interface Order {
    orderId: string;
    date: string;
    items: OrderItem[];
    total: number;
    status: "Processing" | "Shipped" | "Delivered";
    shippingAddress: string;
}

export interface User {
    id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    phone: string;
    addresses: Address[];
    orders: Order[];
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string) => void;
    logout: () => void;
    register: (userObj: Partial<User>) => void;
    updateProfile: (data: Partial<Pick<User, "firstName" | "lastName" | "phone">>) => void;
    addAddress: (address: Omit<Address, "id" | "isDefault">) => void;
    removeAddress: (id: string) => void;
    setDefaultAddress: (id: string) => void;
    addOrder: (orderData: Omit<Order, "orderId" | "date" | "status">) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("threadBloomUser");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email: string) => {
        const storedUser = localStorage.getItem("threadBloomUser");
        if (storedUser) {
            const parsed = JSON.parse(storedUser);
            if (parsed.email === email) {
                setUser(parsed);
                toast.success("Welcome back!");
                return;
            }
        }
        const fallbackUser: User = { id: Date.now().toString(), email, phone: "", addresses: [], orders: [] };
        setUser(fallbackUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(fallbackUser));
        toast.success("Welcome back!");
    };

    const updateProfile = (data: Partial<Pick<User, "firstName" | "lastName" | "phone">>) => {
        if (!user) return;
        const updatedUser = { ...user, ...data };
        setUser(updatedUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(updatedUser));
        toast.success("Profile updated.");
    };

    const register = (userObj: Partial<User>) => {
        const newUser: User = {
            id: Date.now().toString(),
            email: userObj.email || "",
            firstName: userObj.firstName || "",
            lastName: userObj.lastName || "",
            phone: userObj.phone || "",
            addresses: userObj.addresses || [],
            orders: userObj.orders || []
        };
        setUser(newUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(newUser));
        toast.success("Account created successfully!");
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("threadBloomUser");
        toast.success("You have been logged out.");
    };

    const addAddress = (address: Omit<Address, "id" | "isDefault">) => {
        if (!user) return;
        if (user.addresses.length >= 3) {
            toast.error("You can only save up to 3 addresses.");
            return;
        }

        const newAddress: Address = {
            ...address,
            id: Date.now().toString(),
            isDefault: user.addresses.length === 0
        };

        const updatedUser = { ...user, addresses: [...user.addresses, newAddress] };
        setUser(updatedUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(updatedUser));
        toast.success("Address added.");
    };

    const removeAddress = (id: string) => {
        if (!user) return;
        const updatedAddresses = user.addresses.filter(a => a.id !== id);
        // If we removed the default, set first remaining as default
        if (updatedAddresses.length > 0 && !updatedAddresses.some(a => a.isDefault)) {
            updatedAddresses[0].isDefault = true;
        }
        const updatedUser = { ...user, addresses: updatedAddresses };
        setUser(updatedUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(updatedUser));
        toast.success("Address removed.");
    };

    const setDefaultAddress = (id: string) => {
        if (!user) return;
        const updatedAddresses = user.addresses.map(a => ({
            ...a,
            isDefault: a.id === id
        }));
        const updatedUser = { ...user, addresses: updatedAddresses };
        setUser(updatedUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(updatedUser));
    };

    const addOrder = (orderData: Omit<Order, "orderId" | "date" | "status">) => {
        if (!user) return;

        const newOrder: Order = {
            ...orderData,
            orderId: "ORD-" + Math.floor(100000 + Math.random() * 900000).toString(),
            date: new Date().toISOString().split('T')[0],
            status: "Processing"
        };

        const updatedUser = {
            ...user,
            orders: [newOrder, ...(user.orders || [])]
        };
        setUser(updatedUser);
        localStorage.setItem("threadBloomUser", JSON.stringify(updatedUser));
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            login,
            logout,
            register,
            updateProfile,
            addAddress,
            removeAddress,
            setDefaultAddress,
            addOrder
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
