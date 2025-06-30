'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';

const projectsData = [
  {
    mainTitle: 'Modelling',
    subElements: [
      {
        title: 'Environmental Art',
        description: 'I create atmospheric, modular environments and props for immersive worlds that tell stories visually.',
        route: '/environmental-art',
      },
      {
        title: 'Hard Surface Modelling',
        description: 'I create game-ready, intricate and functional hard-surface models, from weaponry to environments.',
        route: '/hard-surface-modelling',
      },
      {
        title: 'Texturing',
        description: 'I hand-paint or procedurally texture assets for realism or stylization, always optimized for game performance.',
        route: '/texturing',
      },
    ],
  },
  {
    mainTitle: 'Programming',
    subElements: [
      {
        title: 'Blueprints (Unreal)',
        description: 'I design and implement gameplay systems visually using Unreal Engine’s Blueprint system.',
        route: '/blueprints-unreal',
      },
      {
        title: 'C++ (Unreal)',
        description: 'I develop robust, efficient game systems using C++ within Unreal Engine for performance-critical features.',
        route: '/cpp-unreal',
      },
      {
        title: 'C# (Unity) & Misc Scripting',
        description: 'I build gameplay mechanics and tools using C# scripting in Unity for versatile game development. And various other languages for different engines, web development, or tools.',
        route: '/csharp-unity',
      },
    ],
  },
  {
    mainTitle: 'Technical Animation',
    subElements: [
      {
        title: 'Skeletal Rigging',
        description: 'I create skeletons and rig assets to enable smooth, realistic animations and deformation.',
        route: '/skeletal-rigging',
      },
      {
        title: 'Control Rig Creation',
        description: 'I engineer intuitive control rigs to empower animators with precise control over characters.',
        route: '/control-rig-creation',
      },
      {
        title: 'Engine Implementation',
        description: 'I integrate and optimize systems within game engines to ensure performance and polish.',
        route: '/engine-implementation',
      },
    ],
  },
];

export default function Projects() {
  const router = useRouter();

  const onKeyPressNavigate = (e, route) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      router.push(route);
    }
  };

  return (
    <main className="pt-[80px] min-h-screen  text-white flex flex-col">
      <Header />
      <ParticleBackground />

      <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 py-12 backdrop-blur-2xl rounded-lg shadow-xl">
        <motion.h1
          className="text-4xl sm:text-5xl font-ovo mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h1>

        <div className="flex flex-col md:flex-row w-full gap-8 md:gap-0">
          {projectsData.map(({ mainTitle, subElements }, colIndex) => (
            <motion.div
              key={colIndex}
              className={`relative flex-1 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 py-6 ${
                colIndex < projectsData.length - 1 ? 'md:border-r border-white border-opacity-20' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + colIndex * 0.3 }}
            >
              <h2 className="text-3xl font-ovo mb-6 relative">
                {mainTitle}
                <span
                  aria-hidden="true"
                  className="block h-[2px] w-24 mx-auto mt-3 bg-gradient-to-r from-transparent via-white to-transparent"
                />
              </h2>

              <div className="flex flex-col gap-6 w-full max-w-md">
                {subElements.map(({ title, description, route }, i) => (
                  <motion.div
                    key={i}
                    role="button"
                    tabIndex={0}
                    onClick={() => router.push(route)}
                    onKeyDown={(e) => onKeyPressNavigate(e, route)}
                    className="cursor-pointer select-none px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-white transition-colors  hover:bg-opacity-10"
                    aria-label={`Navigate to ${title}`}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.1 + colIndex * 0.3 }}
                  >
                    <h3 className="text-2xl font-ovo mb-1">{title}</h3>
                    <p className="text-gray-300 font-ovo">{description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
