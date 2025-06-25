'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function EnvironmentalArtPage() {
  const router = useRouter();

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 backdrop-blur-2xl py-8 sm:py-12 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-ovo mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Environmental Art
        </motion.h1>

        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md mb-6 sm:mb-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-300 font-ovo">
            Here you&apos;ll find a collection of my environmental art projects, focusing on creating immersive and detailed game worlds. From natural landscapes to bustling cityscapes, I strive to build compelling backdrops that enhance gameplay and storytelling.
          </p>
        </motion.div>

        {/* Art Section Template */}
        {[
          {
            title: 'Abandoned Industrial Zone',
            desc: `This render aims to immerse the viewer in a sprawling, automated factory floor, where a brightly lit conveyor belt carries vibrant yellow objects beneath the imposing presence of robotic arms. Adding atmospheric volumetric lighting, combined with thick fog enhances the sense of scale and the repetitive nature of industrial production. The largely monochromatic palette, punctuated by the striking yellow products and subtle red operational lights, effectively conveys a mood of gritty efficiency.`,
            img: '/factoryscene.png',
            alt: 'Factory Scene'
          },
          {
            title: 'Forest Clearing',
            desc: `This render captures a mysterious scene within a forest clearing, bathed in an almost apocalyptic red-orange light that immediately establishes a dramatic mood. A weathered wooden table in the foreground, adorned with survival-oriented tools like a flashlight and axe, draws the viewer&apos;s eye into a narrative of isolation or urgent activity. The meticulous texturing on the tools and table hints at a story unfolding in the depths of a remote wilderness.`,
            img: '/ForestClearing.png',
            alt: 'Forest Scene'
          },
          {
            title: 'Beachside Sunset',
            desc: `This render masterfully blends a warm, desaturated palette with a low-angle composition to create a strikingly atmospheric scene of a beach at dusk. The prominent campfire and abandoned AK-47 rifle, strategically positioned against a table and framed by the expansive ocean and a setting sun, immediately evoke a sense of quiet tension and an untold narrative of survival or a temporary outpost. Effective use of PBR textures is used to show the detailed metallic and stone surfaces, while the overall lighting highlights the scene&apos;s desolate yet compelling mood.`,
            img: '/BeachCampfire.png',
            alt: 'Beach Scene'
          }
        ].map((art, index) => (
          <motion.div
            key={index}
            className="rounded-lg p-4 sm:p-6 backdrop-blur-md mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-ovo mb-4 text-center">{art.title}</h2>
            <p className="text-base sm:text-lg text-gray-300 text-center font-ovo mb-6">{art.desc}</p>
            <div className="w-full h-[40vh] sm:h-[60vh] rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg">
              <img
                src={art.img}
                alt={art.alt}
                className="rounded-lg object-contain w-full h-full"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          className="rounded-lg p-4 sm:p-6 backdrop-blur-md mt-10 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-base sm:text-lg text-gray-300 font-ovo">
            Explore the diversity of my environmental work, where each piece tells a story through lighting, composition, and meticulous asset placement.
          </p>
        </motion.div>

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