import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import Button from '../ui/Button';

export default function CTA() {
    return (
        <section className="bg-gray-900">
            <AnimateOnScroll className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
                <div className="relative isolate overflow-hidden bg-black px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">

                    {/* Main Content */}
                    <h2 className="font-heading mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Ready to secure your device?
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                        Be the first to know when Tracey launches. Join our waitlist for exclusive early access and updates.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        {/* Add the opensWaitlist prop here */}
                        <Button variant="primary" opensWaitlist>
                            Join Waitlist
                        </Button>
                    </div>

                    {/* Background Gradient Blobs */}
                    <svg
                        viewBox="0 0 1024 1024"
                        className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                        aria-hidden="true"
                    >
                        <circle cx={512} cy={512} r={512} fill="url(#8d958450-c69f-4251-94bc-4e091a323369)" fillOpacity="0.7" />
                        <defs>
                            <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                <stop stopColor="#7775D6" />
                                <stop offset={1} stopColor="#1D4ED8" />
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
            </AnimateOnScroll>
        </section>
    );
}