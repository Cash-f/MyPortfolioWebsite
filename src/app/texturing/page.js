'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation';

export default function TexturingPage() {
  const router = useRouter();

  return (
    <main className="pt-[80px] min-h-screen text-white flex flex-col relative overflow-x-hidden">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-8 md:px-16 py-12 z-10">
        <motion.h1
          className="text-3xl sm:text-5xl font-ovo mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Texturing
        </motion.h1>

        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md mb-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-base sm:text-lg text-gray-300 font-ovo">
            This section highlights my work in creating detailed and visually rich textures for 3D models. Focusing on PBR workflows, I aim to bring realism and character to assets through intricate surface details, material properties, and wear, suitable for real-time applications.
          </p>
        </motion.div>

        {/* Project 1 */}
        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-ovo mb-4 text-center">Horror Themed Door</h2>
          <p className="text-base sm:text-lg text-center text-gray-300 font-ovo mb-6">
            This asset was textured to fit a horror environment, with a focus on atmosphere and storytelling. I used Substance Painter&apos;s smart materials and masks to layer rust, grime, and subtle splatters, giving the door a decayed, unsettling appearance. Hand-painted edge wear and dirt buildup around the handle and hinges highlight years of neglect.
          </p>

          <div className="w-full h-[50vh] sm:h-[60vh] rounded-lg overflow-hidden flex items-center justify-center mb-8">
            <img
              src="/Door_Render.png"
              alt="Door Render"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-ovo mb-6 text-center text-gray-200">Texture Breakdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Base Color Map',
                src: '/door_L_Material.004_BaseColor.png',
                alt: 'Base Color Map 1',
              },
              {
                title: 'Normal Map',
                src: '/door_L_Material.004_Normal.png',
                alt: 'Normal Map 1',
              },
              {
                title: 'ORM Map',
                src: '/door_L_Material.004_OcclusionRoughnessMetallic.png',
                alt: 'ORM Map 1',
              },
            ].map(({ title, src, alt }) => (
              <div className="flex flex-col items-center" key={title}>
                <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-200">{title}</h4>
                <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden">
                  <img src={src} alt={alt} className="object-contain w-full h-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project 2 */}
        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-ovo mb-4 text-center">Worn-down Robot Arm</h2>
          <p className="text-base sm:text-lg text-gray-300 font-ovo mb-6 text-center">
            A description for your second texturing project. Detail the design process, challenges in creating organic surfaces, and how different maps (e.g., normal, displacement, roughness) contribute to the final look.
          </p>

          <div className="w-full h-[50vh] sm:h-[60vh] rounded-lg overflow-hidden flex items-center justify-center mb-8">
            <img
              src="/robotarmrender.png"
              alt="Robot Arm Render"
              className="rounded-lg object-contain w-full h-full"
            />
          </div>

          <h3 className="text-xl sm:text-2xl font-ovo mb-6 text-center text-gray-200">Texture Breakdowns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Base Color Map',
                src: '/robotarmlatest11_Material.001_BaseColor.png',
                alt: 'Base Color Map 2',
              },
              {
                title: 'Normal Map',
                src: '/robotarmlatest11_Material.001_Normal.png',
                alt: 'Normal Map 2',
              },
              {
                title: 'Metallic Map',
                src: '/robotarmlatest11_Material.001_Metallic.png',
                alt: 'Metallic Map 2',
              },
            ].map(({ title, src, alt }) => (
              <div className="flex flex-col items-center" key={title}>
                <h4 className="text-lg sm:text-xl font-medium mb-3 text-gray-200">{title}</h4>
                <div className="w-full max-w-xs aspect-square rounded-lg overflow-hidden">
                  <img src={src} alt={alt} className="object-contain w-full h-full rounded-lg" />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-300 font-ovo">
            Discover how I use color, material properties, and weathering effects to tell stories and enhance the realism of 3D assets.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => router.push('/projects')}
            className="text-white px-8 py-3 rounded-full bg-black border border-white font-ovo text-lg shadow-md transition hover:scale-105"
          >
            View My Projects
          </button>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
