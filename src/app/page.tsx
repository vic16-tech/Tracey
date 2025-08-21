import React from 'react';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Security from '@/components/sections/Security';
import CTA from '@/components/sections/CTA';
// import Footer from '@/components/sections/Footer';
import FAQ from '@/components/sections/FAQ';
// We will add the CTA and Footer components here soon

export default function HomePage() {
  return (
      <main>
        <Navbar />
        <Hero />
        <Features />
        <Security />
          <FAQ/>
          <CTA/>
      </main>
  );
}