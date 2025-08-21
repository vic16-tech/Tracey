import React from 'react';
import Button from '../ui/Button';
import AnimateOnScroll from '../ui/AnimateOnScroll';
// import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center px-4 overflow-hidden">
            <Image
                src="/HERO2.png"
                alt="Abstract digital network representing security and location tracking"
                layout="fill"
                objectFit="cover"
                className="-z-10 opacity-30"
                priority
            />

            <AnimateOnScroll className="max-w-4xl pt-32">
                <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
                    Your Device, Always in Your Control
                </h1>
                <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                    Tracey provides military-grade tracking and remote security for your smartphone, giving you complete peace of mind.
                </p>

                <div className="mt-8 flex items-center justify-center gap-x-4">
                    {/* Added classes to reduce size */}
                    <Button variant="primary" opensWaitlist className="px-4 py-2 text-sm">
                        Join Waitlist
                    </Button>

                    <Button variant="secondary" href="#features" className="flex items-center gap-x-2 whitespace-nowrap">
                        Learn More
                    </Button>
                </div>

            </AnimateOnScroll>
        </section>
    );
}