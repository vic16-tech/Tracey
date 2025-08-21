"use client"; // This component uses client-side interactivity (hooks, event listeners)

import React from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline';
import AnimateOnScroll from '../ui/AnimateOnScroll';

const faqs = [
    {
        question: "How does Tracey affect my phone's battery life?",
        answer:
            "Tracey is built with battery efficiency as a top priority. It uses a combination of smart location services, including intervals and geofencing, to minimize battery drain while providing accurate tracking.",
    },
    {
        question: "Is my location data secure and private?",
        answer:
            "Absolutely. Your data is end-to-end encrypted and stored securely. We believe in a privacy-first approach, meaning you are in complete control of your data, and we will never sell it to third parties.",
    },
    {
        question: "What happens if a thief uninstalls the app?",
        answer:
            "We've designed Tracey to be tamper-proof. On Android, we use the Device Admin permission to enable a PIN-protected uninstall. Any attempt to remove or disable the app without your PIN will trigger an immediate alert.",
    },
    {
        question: "What devices are supported?",
        answer:
            "Tracey is designed for both modern Android and iOS devices. Specific feature availability may vary slightly between platforms due to OS restrictions, but the core security and tracking functions are available on both.",
    },
];

export default function FAQ() {
    return (
        <section id="faq" className="bg-black py-24 sm:py-32">
            <AnimateOnScroll className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl divide-y divide-white/10">
                    <h2 className="font-heading text-2xl font-bold leading-10 tracking-tight text-white text-center">
                        Frequently Asked Questions
                    </h2>
                    <dl className="mt-10 space-y-6 divide-y divide-white/10">
                        {faqs.map((faq) => (
                            <Disclosure as="div" key={faq.question} className="pt-6">
                                {({ open }) => (
                                    <>
                                        <dt>
                                            <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                                                <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                <span className="ml-6 flex h-7 items-center">
                          {open ? (
                              <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                              <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                                            </Disclosure.Button>
                                        </dt>
                                        <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                            <p className="text-base leading-7 text-gray-400">{faq.answer}</p>
                                        </Disclosure.Panel>
                                    </>
                                )}
                            </Disclosure>
                        ))}
                    </dl>
                </div>
            </AnimateOnScroll>
        </section>
    );
}