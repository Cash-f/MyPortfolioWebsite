'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation'; 

export default function TexturingPage() {
  const router = useRouter(); 

  return (
    <main className="pt-[80px] min-h-screen  text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
        <h1 className="text-5xl font-ovo mb-12 text-center">Texturing</h1>
        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
          <p className="text-lg text-gray-300 items-center justify-center font-ovo">
            This section highlights my work in creating detailed and visually rich textures for 3D models. Focusing on PBR (Physically Based Rendering) workflows, I aim to bring realism and character to assets through intricate surface details, material properties, and wear, suitable for real-time applications.
          </p>
        </div>

        {/* Project Title One Section */}
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Horror Themed Door</h2>
          <p className="text-lg text-center text-gray-300 font-ovo mb-6">
            This asset was textured to fit a horror environment, with a focus on atmosphere and storytelling. 
            I used Substance Painter&apos;s smart materials and masks to layer rust, grime, and subtle splatters, giving the door a decayed, unsettling appearance. 
            Hand-painted edge wear and dirt buildup around the handle and hinges highlight years of neglect.
          </p>
          
          {/* Main Textured Model View */}
          <div className="w-full h-[60vh]  rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-8"
              style={{ minHeight: '400px' }}>
            <img
                src="/Door_Render.png" 
                alt="Door Render"
                className="rounded-lg object-contain w-full h-full" 
            />
          </div>

          {/* Texture Breakdowns for Project One */}
          <h3 className="text-2xl font-ovo mt-12 mb-6 text-center text-gray-200">Texture Breakdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Base Color Map */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">Base Color Map</h4>
              <div className="w-full h-auto max-w-xs aspect-square rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/door_L_Material.004_BaseColor.png" 
                    alt="Base Color Map 1"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
            {/* Normal Map */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">Normal Map</h4>
              <div className="w-full h-auto max-w-xs aspect-square  rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/door_L_Material.004_Normal.png" 
                    alt="Normal Map 1"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
            {/* ORM Map */}
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">ORM Map</h4>
              <div className="w-full h-auto max-w-xs aspect-square  rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/door_L_Material.004_OcclusionRoughnessMetallic.png" 
                    alt="ORM Map 1"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
          </div>
        </div>

        
        <div className="rounded-lg p-6 backdrop-blur-md mb-8">
          <h2 className="text-3xl font-ovo mb-4 text-center">Worn-down Robot Arm</h2>
          <p className="text-lg text-gray-300 font-ovo mb-6">
            A description for your second texturing project. Detail the design process, challenges in creating organic surfaces, and how different maps (e.g., normal, displacement, roughness) contribute to the final look.
          </p>
          
          
          <div className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-visible flex items-center justify-center text-gray-400 text-lg mt-8 mb-8"
              style={{ minHeight: '400px' }}>
            <img
                src="/robotarmrender.png" 
                alt="Textured Model Render 2"
                className="rounded-lg object-contain w-full h-full"
            />
          </div>

          
          <h3 className="text-2xl font-ovo mt-12 mb-6 text-center text-gray-200">Texture Breakdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">Base Color Map</h4>
              <div className="w-full h-auto max-w-xs aspect-square  rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/robotarmlatest11_Material.001_BaseColor.png" 
                    alt="Base Color Map 2"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">Normal Map</h4>
              <div className="w-full h-auto max-w-xs aspect-square  rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/robotarmlatest11_Material.001_Normal.png" 
                    alt="Normal Map 2"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
            
            <div className="flex flex-col items-center">
              <h4 className="text-xl font-medium mb-3 text-gray-200">Metallic Map </h4>
              <div className="w-full h-auto max-w-xs aspect-square  rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
                <img
                    src="/robotarmlatest11_Material.001_Metallic.png" 
                    alt="ORM Map 2"
                    className="rounded-lg object-contain w-full h-full"
                />
              </div>
              
            </div>
          </div>
        </div>

        <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
          <p className="text-lg text-gray-300 font-ovo">
            Discover how I use color, material properties, and weathering effects to tell stories and enhance the realism of 3D assets.
          </p>
        </div>

        <div className="flex justify-center mt-12 mb-8">
          <button
            onClick={() => router.push('/projects')}
            className=" text-white px-8 py-3 rounded-full  transition duration-300 ease-in-out focus:outline-none focus:ring-2  font-ovo text-lg"
          >
            Return to Projects
          </button>
        </div>
      
      </section>

      <Footer />
    </main>
  );
}