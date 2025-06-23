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
            Here you&apos;ll find a collection of my environmental art projects, focusing on creating immersive and detailed game worlds. From natural landscapes to bustling cityscapes, I strive to build compelling backdrops that enhance gameplay and storytelling.
          </p>
        </div>

        {/* First Environmental Art Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Abandoned Industrial Zone</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            This render aims to immerses the viewer in a sprawling, automated factory floor, where a brightly lit conveyor belt carries vibrant yellow objects beneath the imposing presence of robotic arms. 
            Adding atmospheric volumetric lighting, combined with thick fog enhances the sense of scale and the repetitive nature of industrial production. 
            The largely monochromatic palette, punctuated by the striking yellow products and subtle red operational lights, effectively conveys a mood of gritty efficiency.
          </p>
          <div className="w-full h-[60vh]  rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>
            
             <img
                    src="/factoryscene.png" 
                    alt="Factory Scene"
                    className="rounded-lg object-contain w-full h-full"
                /> 
          </div>
        </div>

        {/* Second Environmental Art Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Forest Clearing</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            This render captures a mysterious scene within a forest clearing, bathed in an almost apocalyptic red-orange light that immediately establishes a dramatic mood. 
            A weathered wooden table in the foreground, adorned with survival-oriented tools like a flashlight and axe, draws the viewer's eye into a narrative of isolation or urgent activity. 
            The meticulous texturing on the tools and table, hints at a story unfolding in the depths of a remote wilderness.
          </p>
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>

                <img
                    src="/ForestClearing.png" 
                    alt="Forest Scene"
                    className="rounded-lg object-contain w-full h-full"
                />
            
          </div>
        </div>


        {/* Third Environmental Art Showcase */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Beachside Sunset</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            This render masterfully blends a warm, desaturated palette with a low-angle composition to create a strikingly atmospheric scene of a beach at dusk. 
            The prominent campfire and abandoned AK-47 rifle, strategically positioned against a table and framed by the expansive ocean and a setting sun, immediately evoke a sense of quiet tension and an untold narrative of survival or a temporary outpost. 
            Effective use of PBR textures is used to show the detailed metallic and stone surfaces, while the overall lighting highlights the scene's desolate yet compelling mood.
          </p>
          <div className="w-full h-[60vh]  rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
               style={{ minHeight: '400px' }}>

                <img
                    src="/BeachCampfire.png" 
                    alt="Beach Scene"
                    className="rounded-lg object-contain w-full h-full"
                />
            
          </div>
        </div>

        
        
        {/*
        
        
        
        
        
        
        space for more environmental art showcases if needed
        
        
        
        
        
        
        */}
        
        
        
        
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
            className=" text-white px-8 py-3 rounded-full transition duration-300 ease-in-out focus:outline-none focus:ring-2  focus:ring-opacity-75 font-ovo text-lg"
          >
            Return to Projects
          </button>
        </div>
      
      </section>

      <Footer />
    </main>
  );
}
