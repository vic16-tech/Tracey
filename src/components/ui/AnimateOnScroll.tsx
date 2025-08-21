"use client"; // This is a client component

import React from 'react';
import { motion } from 'framer-motion';

type AnimateOnScrollProps = {
    children: React.ReactNode;
    className?: string;
};

export default function AnimateOnScroll({ children, className }: AnimateOnScrollProps) {
    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}