'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter

export default function ControlRigCreationPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Control Rig Creation</h1>
        
        {/* Introduction/Overview for Control Rig Creation */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section highlights my expertise in creating advanced control rigs for animation within game engines like Unreal Engine. I focus on developing intuitive and powerful control systems that empower animators with precise manipulation over character and prop deformation, enhancing the efficiency and quality of the animation pipeline.
          </p>
        </div>

        {/* First Control Rig Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Control Rig Project One: [e.g., Dynamic Facial Rig]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this control rig project. Discuss the complexities of facial animation, the blend shape or joint-based controls implemented, and how this rig offers nuanced expression capabilities for characters.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating the control rig in action */}
            <p>Placeholder for Control Rig Image/Video 1</p>
            {/* Example: <img src="/images/control-rig-1.jpg" alt="Control Rig Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* Second Control Rig Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Control Rig Project Two: [e.g., Prop Interaction Rig]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second control rig project. Detail how this rig facilitates complex prop interactions (e.g., weapon handling, object manipulation), the constraints and drivers used, and its benefits for animators.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            {/* Placeholder for an image or video demonstrating the control rig in action */}
            <p>Placeholder for Control Rig Image/Video 2</p>
            {/* Example: <img src="/images/control-rig-2.jpg" alt="Control Rig Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        {/* General conclusion/additional content */}
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My control rig creations are designed to be efficient and powerful tools, giving animators the flexibility and precision needed to produce high-quality, expressive animations for any game character or asset.
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
