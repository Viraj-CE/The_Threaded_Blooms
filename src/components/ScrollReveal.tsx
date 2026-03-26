import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right";
}

export const ScrollReveal = ({
    children,
    width = "100%",
    delay = 0,
    direction = "up"
}: ScrollRevealProps) => {
    const getInitialPosition = () => {
        switch (direction) {
            case "up": return { opacity: 0, y: 30 };
            case "down": return { opacity: 0, y: -30 };
            case "left": return { opacity: 0, x: 30 };
            case "right": return { opacity: 0, x: -30 };
            default: return { opacity: 0, y: 30 };
        }
    };

    return (
        <div style={{ position: "relative", width }}>
            <motion.div
                variants={{
                    hidden: getInitialPosition(),
                    visible: { opacity: 1, y: 0, x: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};
