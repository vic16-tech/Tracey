import './globals.css';
import localFont from 'next/font/local';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import Waitlist from '@/components/ui/Waitlist';
import BackToTopButton from "@/components/ui/BackToTopButton";

const geistMono = localFont({
    src: [
        {
            path: '../../public/fonts/GeistMono-VariableFont_wght.ttf',
        },
    ],
    display: 'swap',
    variable: '--font-geist-mono',
});

// The enhanced metadata object for better SEO
export const metadata = {
    title: 'Tracey: Your Device, Always in Your Control',
    description: 'The ultimate anti-theft and location tracking solution for your smartphone. Never lose your device again.',

    openGraph: {
        title: 'Tracey: Your Device, Always in Your Control',
        description: 'The ultimate anti-theft and location tracking solution for your smartphone.',
        url: 'https://your-website-url.com',
        siteName: 'Tracey App',
        images: [
            {
                url: 'https://your-website-url.com/og-image.png',
                width: 1200,
                height: 630,
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Tracey: Your Device, Always in Your Control',
        description: 'The ultimate anti-theft and location tracking solution for your smartphone.',
        images: ['https://your-website-url.com/og-image.png'],
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={geistMono.variable}>
        <body className={`min-h-screen antialiased bg-gray-900 text-gray-200 font-sans`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Waitlist />
        <BackToTopButton/>
        </body>
        </html>
    );
}