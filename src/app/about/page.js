'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

export default function AboutPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-4xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10 rounded-lg shadow-xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          About Me
        </motion.h1>

        <motion.div
          className="space-y-8 text-base sm:text-lg text-gray-200 font-ovo text-center leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p>Hello! I&apos;m Charlie Farmer, an aspiring game developer and 3D artist.</p>

          <p>
            Throughout my life, I&apos;ve always had a deep passion for video games. But it wasn&apos;t just about playing them — I was fascinated by how they worked behind the scenes. That curiosity quickly turned into a drive to understand the systems, design, and creativity that bring games to life.
          </p>

          <p>
            Pursuing a career in game development has always been more than just a goal — it&apos;s been a lifelong ambition rooted in my love for games and creativity. From an early age, I knew I wanted to be part of the process that brings interactive worlds to life. Determined to follow that path, I took the initiative to start learning game development on my own. I explored everything from game engines and basic programming to design theory and asset creation, laying a strong personal foundation before committing to formal education. This self-driven journey ultimately led me to enroll in the Game Development degree program at UCNL, where I could refine my skills, collaborate with others, and dive even deeper into the industry I&apos;ve always dreamed of joining.
          </p>

          <p>
            During my time at UCNL, I&apos;ve explored a wide range of disciplines within the field — from programming and level design to 3D modeling and story creation. This broad foundation has helped me grow as a developer, and I&apos;m constantly looking to push my abilities further through hands-on projects and collaboration.
          </p>

          <p>
            I&apos;m excited to continue my journey in the world of games, and I&apos;m always open to connecting with like-minded developers, teams, and studios.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <a
            href="/projects"
            className="text-white px-8 py-3 rounded-full bg-black border border-white transition duration-300 ease-in-out font-ovo text-lg shadow-lg hover:scale-105"
          >
            View My Projects
          </a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
