 "use client";

import React, { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Button from './Button';

export default function Waitlist() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    function closeModal() {
        setIsOpen(false);
        setTimeout(() => {
            setSubmitted(false);
            setEmail('');
            setError('');
        }, 300);
    }

    function openModal() {
        setIsOpen(true);
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError('');

        // Formspree URL here
        const response = await fetch('https://formspree.io/f/mvgqjkyo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        if (response.ok) {
            setSubmitted(true);
        } else {
            setError('Something went wrong. Please try again.');
        }
    }

    useEffect(() => {
        window.addEventListener('openWaitlistModal', openModal);
        return () => {
            window.removeEventListener('openWaitlistModal', openModal);
        };
    }, []);

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100"
                    leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>
                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all border border-white/10">
                                {submitted ? (
                                    <div className="text-center">
                                        <Dialog.Title as="h3" className="text-lg font-heading font-medium leading-6 text-white">You're on the list! 🎉</Dialog.Title>
                                        <p className="mt-2 text-sm text-gray-400">We'll notify you the moment Tracey is available. Thanks for your support!</p>
                                        <div className="mt-4">
                                            <Button variant="secondary" onClick={closeModal}>Close</Button>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <Dialog.Title as="h3" className="text-lg font-heading font-medium leading-6 text-white">Join the Waitlist</Dialog.Title>
                                        <p className="mt-2 text-sm text-gray-400">Be the first to know when Tracey launches. No spam, we promise.</p>
                                        <form onSubmit={handleSubmit} className="mt-4">
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder="victor@tracey.app"
                                                className="w-full rounded-md border-gray-700 bg-gray-800 px-3 py-2 text-white placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                                            />
                                            <div className="mt-4 flex justify-end items-center">
                                                {error && <p className="text-sm text-red-500 mr-4">{error}</p>}
                                                <Button type="submit" variant="primary">Notify Me</Button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
}