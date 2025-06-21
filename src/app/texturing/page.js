'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function TexturingPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Texturing</h1>
        
        {/* Introduction/Overview for Texturing */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section highlights my work in creating detailed and visually rich textures for 3D models. Focusing on PBR (Physically Based Rendering) workflows, I aim to bring realism and character to game assets through intricate surface details, material properties, and wear.
          </p>
        </div>

        {/* First Texturing Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title One: [e.g., Sci-Fi Panel Textures]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this texturing project. Discuss the techniques used (e.g., Substance Painter/Designer, Photoshop), material focus (e.g., metallic, rough, worn), and how these textures enhance the model&apos;s appearance.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or image carousel */}
            <p>Placeholder for Texturing Image 1 (e.g., `Image` component or `img` tag)</p>
            {/* Example: <img src="/images/texture-art-1.jpg" alt="Texturing Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Texturing Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Title Two: [e.g., Organic Creature Skin]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second texturing project. Detail the design process, challenges in creating organic surfaces, and how different maps (e.g., normal, displacement, roughness) contribute to the final look.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or image carousel */}
            <p>Placeholder for Texturing Image 2 (e.g., `Image` component or `img` tag)</p>
            {/* Example: <img src="/images/texture-art-2.jpg" alt="Texturing Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            Discover how I use color, material properties, and weathering effects to tell stories and enhance the realism of game assets.
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
