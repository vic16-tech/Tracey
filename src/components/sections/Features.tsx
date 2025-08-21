import React from 'react';
import AnimateOnScroll from '../ui/AnimateOnScroll';
import { GlobeAltIcon, LockClosedIcon, BellAlertIcon } from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Live Location Tracking',
        description: 'Pinpoint your device’s location in real-time on a detailed map, ensuring you always know where it is.',
        icon: GlobeAltIcon,
    },
    {
        name: 'Remote Security Actions',
        description: 'Instantly lock your device, wipe your data, or sound a loud alarm to deter thieves and protect your privacy.',
        icon: LockClosedIcon,
    },
    {
        name: 'Intelligent Smart Alerts',
        description: 'Receive instant notifications for critical events like SIM card swaps, geofence breaches, or when the app is tampered with.',
        icon: BellAlertIcon,
    },
];

export default function Features() {
    return (
        <section id='features' className="  bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <AnimateOnScroll className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-blue-400">Peace of Mind</h2>
                    <p className="font-heading mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need for total device security
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Tracey is packed with powerful features designed to give you ultimate control and protect what's most important.
                    </p>
                </AnimateOnScroll>

                <AnimateOnScroll className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <feature.icon className="h-5 w-5 flex-none text-blue-400" aria-hidden="true" />
                                    {feature.name}
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-400">
                                    <p className="flex-auto">{feature.description}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </AnimateOnScroll>
            </div>
        </section>
    );
}