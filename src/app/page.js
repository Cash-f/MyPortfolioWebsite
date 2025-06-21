'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useInView } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../components/ui/tooltip';
import ParticleBackground from './components/ParticleBackground';

const softwareTools = [
  { name: 'Blender', file: 'blender.png', experience: 'Advanced' },
  { name: 'Unreal Engine', file: 'unreal.png', experience: 'Advanced' },
  { name: 'Unity', file: 'unity.png', experience: 'Basic' },
  { name: 'Substance Painter', file: 'substance-painter.png', experience: 'Intermediate' },
  { name: 'Substance Designer', file: 'substance-designer.png', experience: 'Basic' },
];

const carouselItems = [
  { id: 1, src: '/Torch_Render.png', alt: 'Project One', label: 'Game-Ready Torch' },
  { id: 2, src: '/LightShade_Render.png', alt: 'Project Two', label: 'Game-Ready Ceiling Light' },
  { id: 3, src: '/Door_Render.png', alt: 'Project Three', label: 'Game-Ready Door' },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const router = useRouter();

  const nextItem = () => setCurrent((prev) => (prev + 1) % carouselItems.length);
  const prevItem = () => setCurrent((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: '-100px' });
  const isInView2 = useInView(ref2, { once: true, margin: '-100px' });
  const isInView3 = useInView(ref3, { once: true, margin: '-100px' });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

      const handleMouseMove = (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      };

      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <TooltipProvider>
      <ParticleBackground />

      <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col z-10">
        <Header />

        <section className="flex flex-col items-center justify-center text-center p-8 flex-grow">
          
          <div className="rounded-lg p-6 backdrop-blur-md mb-10 max-w-xl w-full">
            <motion.h2
              className="text-4xl font-ovo mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hello, I'm Charlie
            </motion.h2>

            <motion.p
              className="text-lg font-ovo text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              I'm a game developer practicing 3D asset creation and gameplay
              engineering. Welcome to my portfolio.
            </motion.p>
          </div>

          <div className="mb-16" />

          <motion.p
            className="text-lg max-w-xl font-ovo mb-2 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Latest Projects
          </motion.p>

          
          <div
            className="rounded-lg p-6 backdrop-blur-md flex items-center justify-center space-x-8 mb-2 px-12"
            style={{ minHeight: '400px' }}
          >
            <button
              onClick={prevItem}
              className="text-white hover:text-gray-300 transition mx-2 z-20"
            >
              <ChevronLeft size={32} />
            </button>

            <div className="flex items-center justify-center gap-10 mx-6">
              {carouselItems.map((item, index) => {
                const isActive = index === current;
                return (
                  <motion.div
                    key={item.id}
                    className={`flex flex-col items-center justify-center transition-all duration-300 ${
                      isActive ? 'scale-110' : 'scale-90 opacity-50'
                    }`}
                    animate={{
                      opacity: isActive ? 1 : 0.5,
                      scale: isActive ? 1.1 : 0.9,
                    }}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={220}
                      height={220}
                      className="object-contain rounded-lg"
                      priority={isActive}
                    />
                    <p className="mt-3 text-white text-lg font-medium">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>

            <button
              onClick={nextItem}
              className="text-white hover:text-gray-300 transition mx-2 z-20"
            >
              <ChevronRight size={32} />
            </button>
          </div>

          <motion.button
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-700 transition"
            whileHover={{ scale: 1.05 }}
            onClick={() => router.push('/projects')}
          >
            View More Projects
          </motion.button>

          <div className="max-w-6xl w-full mx-auto mt-16 rounded-lg p-6 backdrop-blur-md">
            <div className="flex flex-col md:flex-row justify-center items-stretch overflow-hidden">
              <motion.div
                ref={ref1}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView1 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="flex-1 p-6 text-center"
              >
                <h3 className="text-xl font-ovo mb-2">Hard Surface Modelling</h3>
                <p className="text-gray-300 font-ovo">
                  I create game-ready, intricate and functional hard-surface models, from weaponry to environments.
                </p>
              </motion.div>

              <motion.div
                ref={ref2}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView2 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 p-6 text-center relative 
                  md:before:absolute md:before:top-0 md:before:bottom-0 md:before:left-0 md:before:w-[2px] 
                  md:before:bg-gradient-to-b md:before:from-transparent md:before:via-white md:before:to-transparent 
                  md:after:absolute md:after:top-0 md:after:bottom-0 md:after:right-0 md:after:w-[2px] 
                  md:after:bg-gradient-to-b md:after:from-transparent md:after:via-white md:after:to-transparent
                  before:pointer-events-none after:pointer-events-none"
              >
                <h3 className="text-xl font-ovo mb-2">Development</h3>
                <p className="text-gray-300 font-ovo">
                  I develop and architect robust and efficient game systems, with clean and optimized code to ensure smooth user experience.
                </p>
              </motion.div>

              <motion.div
                ref={ref3}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView3 ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex-1 p-6 text-center"
              >
                <h3 className="text-xl font-ovo mb-2">Technical Animation</h3>
                <p className="text-gray-300 font-ovo">
                  I engineer complex yet intuitive rigs, empowering animators with precise control and the foundational skeleton for lifelike movement.
                </p>
              </motion.div>
            </div>
          </div>

          <div className="mt-16 w-full max-w-5xl">
            <h3 className="text-xl font-ovo mb-4">Software Experience</h3>
            <div className="flex flex-nowrap justify-center gap-8 overflow-x-auto pb-4 scrollbar-hide">
              {softwareTools.map(({ name, file, experience }) => (
                <Tooltip key={name}>
                  <TooltipTrigger asChild>
                    <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 relative cursor-pointer hover:scale-105 transition-transform">
                      <Image src={`/${file}`} alt={name} fill className="object-contain" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent className="bg-neutral-800 text-white border border-neutral-700 text-sm">
                    {name}: {experience}
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </TooltipProvider>
  );
}
