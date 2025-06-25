'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

export default function ContactPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10 rounded-lg shadow-xl text-center">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 font-ovo leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p>
            Whether you&apos;re looking to collaborate, have questions about my work, or just want to talk games and tech, I&apos;d love to hear from you.
          </p>

          <p>
            I&apos;m open to freelance opportunities, full-time roles, and game development projects of all sizes—especially those that push creative boundaries or explore new mechanics.
          </p>

          <p className="text-2xl font-bold">
            Email me at: ashfarmerch@gmail.com
          </p>

          <p className="mt-8 text-xl">You can also find me on:</p>

          <div className="flex justify-center items-center gap-6 mt-4 flex-wrap">
            {/* GitHub */}
            <motion.a
              href="https://github.com/Cash-f"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="GitHub Profile"
              whileHover={{ scale: 1.15 }}
            >
              <img
                src="/github.png"
                alt="GitHub"
                width={80}
                height={80}
                className="w-16 sm:w-20 h-auto"
              />
            </motion.a>

            {/* ArtStation */}
            <motion.a
              href="https://www.artstation.com/charlieash-farmer/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-300"
              aria-label="ArtStation Profile"
              whileHover={{ scale: 1.15 }}
            >
              <img
                src="/artstation-logo-white.png"
                alt="ArtStation"
                width={80}
                height={80}
                className="w-16 sm:w-20 h-auto"
              />
            </motion.a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
