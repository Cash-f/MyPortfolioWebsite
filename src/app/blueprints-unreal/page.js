'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function UnrealBlueprintsPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Unreal Engine Blueprint Coding</h1>
        
        {/* Introduction/Overview for Unreal Engine Blueprint Coding */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my proficiency in Unreal Engine's Blueprint visual scripting. I focus on creating robust, scalable, and intuitive gameplay systems, interactive mechanics, and UI/UX flows, demonstrating how visual scripting can power complex game features efficiently.
          </p>
        </div>

        {/* First Blueprint Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title One: [e.g., Interactive Door System Blueprint]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this Blueprint project. Discuss the logic implemented (e.g., player proximity, animation control, sound events), modularity, and how it contributes to gameplay. You can describe the Blueprint graph or its resulting functionality.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating Blueprint logic/result */}
            <p>Placeholder for Blueprint Showcase Image/Video 1</p>
            {/* Example: <img src="/images/blueprint-showcase-1.jpg" alt="Blueprint Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Blueprint Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title Two: [e.g., Dynamic AI Behavior Tree]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second Blueprint project. Detail the AI behaviors (e.g., patrol, attack, flee), how the Behavior Tree is structured, and the benefits of using Blueprint for rapid iteration and complex AI design.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating Blueprint logic/result */}
            <p>Placeholder for Blueprint Showcase Image/Video 2</p>
            {/* Example: <img src="/images/blueprint-showcase-2.jpg" alt="Blueprint Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            Explore how I leverage Blueprint to create intricate and efficient gameplay mechanics, bringing ideas to life directly within Unreal Engine.
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
