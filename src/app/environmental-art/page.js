'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function EnvironmentalArtPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Environmental Art</h1>
        
        {/* Introduction/Overview for Environmental Art */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            Here you'll find a collection of my environmental art projects, focusing on creating immersive and detailed game worlds. From natural landscapes to bustling cityscapes, I strive to build compelling backdrops that enhance gameplay and storytelling.
          </p>
        </div>

        {/* First Environmental Art Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title One: [e.g., Abandoned Industrial Zone]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this environmental art project. Discuss the mood, techniques used, software, and any challenges or unique aspects.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or image carousel */}
            <p>Placeholder for Environmental Art Image 1 (e.g., `Image` component or `img` tag)</p>
            {/* Example: <img src="/images/environment-art-1.jpg" alt="Environmental Art Scene 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Environmental Art Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title Two: [e.g., Mystical Forest Clearing]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second environmental art project. Detail the design process, inspiration, and specific elements that contribute to the scene's atmosphere.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or image carousel */}
            <p>Placeholder for Environmental Art Image 2 (e.g., `Image` component or `img` tag)</p>
            {/* Example: <img src="/images/environment-art-2.jpg" alt="Environmental Art Scene 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            Explore the diversity of my environmental work, where each piece tells a story through lighting, composition, and meticulous asset placement.
          </p>
        </div>

        {/* Return to Projects Button */}
        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={() => router.push('/projects')}
            className="bg-gray-700 text-white px-8 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 font-ovo text-lg"
          >
            Return to Projects
          </button>
        </div>
      
      </section>

      <Footer />
    </main>
  );
}
