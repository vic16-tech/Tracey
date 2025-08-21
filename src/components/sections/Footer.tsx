import React from 'react';

// The 'any' type has been replaced with the correct, specific type
const socialLinks = [
    { name: 'Twitter', href: 'https://x.com/UseTracey', icon: (props: React.ComponentProps<'svg'>) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.288 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg> },
    { name: 'Instagram', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.152A4.702 4.702 0 007.298 8a4.702 4.702 0 004.702 4.702A4.702 4.702 0 0016.702 8 4.702 4.702 0 0012 3.315zm0 8.22A3.51 3.51 0 1112 4.505a3.51 3.51 0 010 7.02zm6.65-7.524a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" /></svg> },
    { name: 'Facebook', href: '#', icon: (props: React.ComponentProps<'svg'>) => <svg {...props} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg> },
];

export default function Footer() {
    return (
        <footer className="bg-black">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 lg:px-8">
                <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2" aria-label="Footer">
                    <a href="#features" className="text-sm leading-6 text-gray-400 hover:text-white">Features</a>
                    <a href="#security" className="text-sm leading-6 text-gray-400 hover:text-white">Security</a>
                    <a href="#faq" className="text-sm leading-6 text-gray-400 hover:text-white">FAQ</a>
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    {socialLinks.map((item) => (
                        <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <p className="mt-10 text-center text-xs leading-5 text-gray-500">
                    &copy; 2025 Tracey, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
}