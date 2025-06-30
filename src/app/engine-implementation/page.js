'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; // Import useRouter
import { motion } from 'framer-motion'; // Import motion for animations

export default function EngineAnimationImplementationPage() {
  const router = useRouter(); // Initialize useRouter hook

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Engine Implementation of Animations</h1>
        
        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section showcases my experience in integrating, optimizing, and implementing character and object animations within game engines like Unreal Engine and Unity. My focus is on creating seamless animation blending, robust state machines, and efficient animation blueprints or controllers that bring characters and game elements to life dynamically.
          </p>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project One: [e.g., Advanced Locomotion System]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A detailed description of this animation implementation project. Placeholder WIP
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            
            <p>Placeholder WIP</p>
            {/* <img src="/images/animation-impl-1.jpg" alt="Animation Implementation Showcase 1" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Project Two: [e.g., Dynamic Combat Animation Flow]</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            Placeholder WIP
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            
            <p>Placeholder WIP</p>
            {/* <img src="/images/animation-impl-2.jpg" alt="Animation Implementation Showcase 2" className="w-full h-full object-cover" /> */}
          </div>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            My work in animation implementation ensures fluid and responsive character movement, enhancing player immersion and visual fidelity through optimized animation pipelines and robust engine-side logic.
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
