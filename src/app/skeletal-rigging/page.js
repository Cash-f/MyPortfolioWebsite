'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function SkeletalRiggingPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Skeletal Rigging</h1>
        
        {/* Introduction/Overview for Skeletal Rigging */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my work in skeletal rigging for game characters and assets. I focus on building robust, animator-friendly rigs that provide intuitive controls, efficient deformation, and seamless integration into game engines, ensuring characters move naturally and expressively.
          </p>
        </div>

        {/* First Rigging Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Rigging Project One: [e.g., Biped Character Rig]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this rigging project. Discuss the challenges of the character (e.g., complex anatomy, unique limbs), the control systems implemented (e.g., IK/FK blending, custom deformers), and how it streamlines the animation pipeline.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating the rig/deformation */}
            <p>Placeholder for Skeletal Rigging Image/Video 1</p>
            {/* Example: <img src="/images/rigging-showcase-1.jpg" alt="Rigging Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Rigging Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Rigging Project Two: [e.g., Creature Quadruped Rig]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second rigging project. Detail the complexities of rigging a non-humanoid, how joint limits and constraints were managed, and any custom tools or scripts developed to aid the rigging process.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating the rig/deformation */}
            <p>Placeholder for Skeletal Rigging Image/Video 2</p>
            {/* Example: <img src="/images/rigging-showcase-2.jpg" alt="Rigging Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My rigging work focuses on creating intuitive and robust systems that empower animators to bring characters to life with precision and ease, ensuring high-quality animation in any game project.
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
