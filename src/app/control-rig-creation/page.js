'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter
import { motion } from 'framer-motion'; // Import motion for animations 

export default function ControlRigCreationPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Control Rig Creation</h1>
        
        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section highlights my expertise in creating advanced control rigs for animation within game engines like Unreal Engine. 
          </p>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Control Rig Project One: [e.g., Dynamic Facial Rig]</h2>
          <p className="text-lg text-gray-300 text-center font-ovo mb-6">
            Placeholder WIP
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            
            <p>Placeholder for Control Rig Image/Video 1</p>
            {/* Example: <img src="/images/control-rig-1.jpg" alt="Control Rig Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Control Rig Project Two: [e.g., Prop Interaction Rig]</h2>
          <p className="text-lg text-gray-300 text-center font-ovo mb-6">
            A description for my second control rig project. Placeholder WIP
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            
            <p>Placeholder for Control Rig Image/Video 2</p>
            {/* Example: <img src="/images/control-rig-2.jpg" alt="Control Rig Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 text-center font-ovo">
            My control rig creations are designed to be efficient and powerful tools, giving animators the flexibility and precision needed to produce high-quality, expressive animations for any game character or asset.
          </p>
        </div>

        <motion.div
          className="flex justify-center mt-10 sm:mt-12 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
                        >
          <div className="flex justify-center mt-12">
          <a
             href="/projects"
              className="text-white px-8 py-3 rounded-full bg-black border border-white transition duration-300 ease-in-out font-ovo text-lg shadow-lg"
              >
            View My Projects
            </a>
            </div>
         </motion.div>
      
      </section>

      <Footer />
    </main>
  );
}
