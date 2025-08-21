"use client";

import React from 'react';

// Add href?: string; to the type definition
type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    opensWaitlist?: boolean;
    href?: string; // <-- ADDED
};

export default function Button({
                                   children,
                                   variant = 'primary',
                                   className = '',
                                   onClick,
                                   type = 'button',
                                   opensWaitlist = false,
                                   href // <-- ADDED
                               }: ButtonProps) {
    const baseStyles = "px-6 py-3 rounded-md font-semibold transition-transform transform hover:scale-105 inline-block";

    const variantStyles = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-700 text-gray-200 hover:bg-gray-600",
    };

    const handleClick = () => {
        if (opensWaitlist) {
            window.dispatchEvent(new CustomEvent('openWaitlistModal'));
        }
        if (onClick) {
            onClick();
        }
    };

    const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

    // ADDED: Logic to render a link if href exists
    if (href) {
        return (
            <a href={href} className={combinedClassName}>
                {children}
            </a>
        );
    }

    return (
        <button type={type} onClick={handleClick} className={combinedClassName}>
            {children}
        </button>
    );
}