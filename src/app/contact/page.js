'use client'; 

import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import ParticleBackground from '../components/ParticleBackground'; 

export default function ContactPage() {
  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />

      <section className="flex-grow max-w-xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10 rounded-lg shadow-xl text-center">
        <h1 className="text-5xl font-extrabold mb-10 text-white bg-clip-text ">
          Get in Touch
        </h1>

        <div className="space-y-6 text-lg text-gray-200 font-ovo leading-relaxed">
          <p>
            Whether you&apos;re looking to collaborate, have questions about my work, or just want to talk games and tech, I&apos;d love to hear from you.
          </p>
          
          <p>
            I&apos;m open to freelance opportunities, full-time roles, and game development projects of all sizes—especially those that push creative boundaries or explore new mechanics.
            </p>
            
          <p className="text-2xl font-bold">
            Email me at: ashfarmerch@gmail.com
          </p>
          <p className="mt-8 text-xl">
            You can also find me on:
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <a
              href="https://github.com/Cash-f"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition duration-300"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.082-.746.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.835 2.809 1.305 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}