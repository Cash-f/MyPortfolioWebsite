'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Grip } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full min-h-[70px] flex items-center justify-between px-6 py-3 transition-all duration-300 shadow-md
        ${isScrolled ? 'bg-black/60 backdrop-blur-xl' : 'bg-black/40 backdrop-blur-sm'}
      `}
    >
      <a
        href="mailto:ashfarmerch@gmail.com"
        className="flex items-center p-2 rounded-md hover:bg-gray-700 transition"
        aria-label="Send Email"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25"
          />
        </svg>
      </a>

      <Link href="/" passHref>
        <div className="cursor-pointer">
          <Image src="/logonew.png" alt="Logo" width={100} height={100} />
        </div>
      </Link>

      <div className="relative">
        <button
          onClick={toggleMenu}
          className="flex items-center p-2 rounded-md hover:bg-gray-700 transition"
          aria-label="Toggle Menu"
          aria-expanded={menuOpen}
        >
          <Grip size={28} className="text-white" />
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg border border-white"
            >
              <nav className="flex flex-col p-2 text-white">
                <a href="/" className="px-4 py-2 rounded hover:bg-gray-700 transition">
                  Home
                </a>
                <a href="/projects" className="px-4 py-2 rounded hover:bg-gray-700 transition">
                  Projects
                </a>
                <a href="/about" className="px-4 py-2 rounded hover:bg-gray-700 transition">
                  About
                </a>
                <a href="/contact" className="px-4 py-2 rounded hover:bg-gray-700 transition">
                  Contact
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
