'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function EngineAnimationImplementationPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Engine Implementation of Animations</h1>
        
        {/* Introduction/Overview for Engine Animation Implementation */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my experience in integrating, optimizing, and implementing character and object animations within game engines like Unreal Engine and Unity. My focus is on creating seamless animation blending, robust state machines, and efficient animation blueprints or controllers that bring characters and game elements to life dynamically.
          </p>
        </div>

        {/* First Animation Implementation Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project One: [e.g., Advanced Locomotion System]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this animation implementation project. Discuss the animation blending techniques used (e.g., 1D/2D blend spaces, aiming offsets), state machine transitions, and how input from the player controller drives complex movement states (walk, run, sprint, crouch).
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating animation implementation */}
            <p>Placeholder for Animation Implementation Image/Video 1</p>
            {/* Example: <img src="/images/animation-impl-1.jpg" alt="Animation Implementation Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Animation Implementation Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Two: [e.g., Dynamic Combat Animation Flow]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second animation implementation project. Detail the setup for combat animations (e.g., attack combos, hit reactions, blocking), the use of animation montages or animation layers, and how animation notifies or events trigger gameplay logic.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating animation implementation */}
            <p>Placeholder for Animation Implementation Image/Video 2</p>
            {/* Example: <img src="/images/animation-impl-2.jpg" alt="Animation Implementation Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My work in animation implementation ensures fluid and responsive character movement, enhancing player immersion and visual fidelity through optimized animation pipelines and robust engine-side logic.
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
