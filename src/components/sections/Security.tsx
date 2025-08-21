import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { ShieldCheckIcon, KeyIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

const securityFeatures = [
    {
        name: 'End-to-End Encryption',
        description: 'All your location and device data is encrypted at every stage, making it unreadable to anyone but you.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'User-Controlled Data',
        description: 'You have full control over your data. View, manage, and delete your location history anytime you want.',
        icon: KeyIcon,
    },
    {
        name: 'Privacy-First Design',
        description: 'We don\'t sell your data. Our business model is built on protecting our users, not profiting from their information.',
        icon: EyeSlashIcon,
    },
];

export default function Security() {
    return (
        <section id={'security'} className="relative bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {/* Left Column: Text Content */}
                    <AnimateOnScroll className="lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-blue-400">Your Security, Our Priority</h2>
                            <p className="font-heading mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Built on a foundation of trust
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-400">
                                We take your privacy and security extremely seriously. Tracey is engineered from the ground up to ensure your sensitive data remains safe, private, and entirely under your control.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-400 lg:max-w-none">
                                {securityFeatures.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon className="absolute left-1 top-1 h-5 w-5 text-blue-400" aria-hidden="true" />
                                            {feature.name}
                                        </dt>
                                        <dd className="inline">: {feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </AnimateOnScroll>

                    {/* Right Column: Image */}
                    <AnimateOnScroll className="flex items-start justify-end lg:order-first">
                        <Image
                            src="https://images.pexels.com/photos/5473302/pexels-photo-5473302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt="Abstract security illustration"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            width={2432}
                            height={1442}
                        />
                    </AnimateOnScroll>
                </div>
            </div>
        </section>
    );
}