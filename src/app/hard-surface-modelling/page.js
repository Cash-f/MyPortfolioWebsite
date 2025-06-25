'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const setupThreeJSViewer = (mountElement, modelPath, setIsLoadingCallback, modelScale = 0.1) => {
  if (!mountElement) return () => {};
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x282c34);

  const camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
  camera.position.set(0, 50, 100);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const existingCanvas = mountElement.querySelector('canvas');
  if (existingCanvas) mountElement.removeChild(existingCanvas);
  mountElement.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.05;
  controls.screenSpacePanning = false;
  controls.minDistance = 10;
  controls.maxDistance = 500;
  controls.maxPolarAngle = Math.PI / 2;

  scene.add(new THREE.AmbientLight(0xffffff, 0.7));

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(100, 100, 50);
  scene.add(directionalLight);

  const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.6);
  directionalLight2.position.set(-100, 50, -50);
  scene.add(directionalLight2);

  const loader = new FBXLoader();
  loader.load(
    modelPath,
    (fbx) => {
      fbx.scale.set(modelScale, modelScale, modelScale);
      scene.add(fbx);

      const bbox = new THREE.Box3().setFromObject(fbx);
      const center = bbox.getCenter(new THREE.Vector3());
      const size = bbox.getSize(new THREE.Vector3());
      fbx.position.sub(center);

      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2));
      cameraZ *= 1.5;
      camera.position.set(center.x, center.y + size.y / 4, center.z + cameraZ);
      camera.lookAt(center);
      controls.target.copy(center);
      controls.update();
      setIsLoadingCallback(false);
    },
    () => {},
    (error) => {
      console.error('Error loading model:', error);
      setIsLoadingCallback(false);
      mountElement.textContent = 'Failed to load model.';
      mountElement.style.color = 'white';
      mountElement.style.textAlign = 'center';
    }
  );

  const animate = () => {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
  };
  animate();

  const onResize = () => {
    if (!mountElement) return;
    camera.aspect = mountElement.clientWidth / mountElement.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
  };
  window.addEventListener('resize', onResize);

  return () => {
    window.removeEventListener('resize', onResize);
    if (mountElement && renderer.domElement && mountElement.contains(renderer.domElement)) {
      mountElement.removeChild(renderer.domElement);
      renderer.dispose();
    }
    controls.dispose();
    scene.traverse((object) => {
      if (object.isMesh) {
        object.geometry.dispose();
        if (Array.isArray(object.material)) {
          object.material.forEach((m) => m.dispose());
        } else {
          object.material.dispose();
        }
      }
    });
  };
};

export default function HardSurfaceModellingPage() {
  const model1Ref = useRef(null);
  const model2Ref = useRef(null);
  const model3Ref = useRef(null);

  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && model1Ref.current) {
        setupThreeJSViewer(model1Ref.current, '/moderncratewithembedtex.fbx', setLoading1, 0.1);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (model1Ref.current) observer.observe(model1Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && model2Ref.current) {
        setupThreeJSViewer(model2Ref.current, '/akmwithembedtex.fbx', setLoading2, 0.1);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (model2Ref.current) observer.observe(model2Ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && model3Ref.current) {
        setupThreeJSViewer(model3Ref.current, '/flashlightwithembedtex.fbx', setLoading3, 0.4);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    if (model3Ref.current) observer.observe(model3Ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
      <ParticleBackground />
      <Header />
      <section className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-12 py-8 sm:py-12 z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-ovo mb-10 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Hard Surface Modelling
        </motion.h1>

        {[
          {
            ref: model1Ref,
            loading: loading1,
            title: 'Futuristic Crate',
            desc: 'A sci-fi style crate designed for modular placement in futuristic environments.',
            image: '/Crate_Wireframe.png',
            caption: 'This hard surface asset is ideal for inventory props, environmental storytelling, or as loot containers in action/sci-fi games.'
          },
          {
            ref: model2Ref,
            loading: loading2,
            title: 'AKM Rifle',
            desc: 'A faithful digital representation of a classic automatic rifle.',
            image: '/AKM_Wireframe.png',
            caption: 'Modeled with accuracy and detail, this AKM rifle is optimized for use in FPS or cinematic scenes, with clean topology and embedded textures.'
          },
          {
            ref: model3Ref,
            loading: loading3,
            title: 'Tactical Flashlight',
            desc: 'A modern flashlight asset designed for tactical or survival scenarios.',
            image: '/Torch_Wireframe.png',
            caption: 'Designed for use in modern game environments, this asset has great real-time performance with PBR-ready surfaces.'
          }
        ].map((model, idx) => (
          <motion.div
            key={model.title}
            className="mb-16 sm:mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-ovo text-center mb-4">{model.title}</h2>
            <p className="text-base sm:text-lg text-gray-300 text-center mb-6">{model.desc}</p>
            <div
              ref={model.ref}
              className="w-full h-[50vh] sm:h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-6"
            >
              {model.loading && <p>Loading 3D Model...</p>}
            </div>
            <div className="w-full h-[30vh] sm:h-[40vh] rounded-lg overflow-hidden flex items-center justify-center mb-6">
              <img src={model.image} alt={`${model.title} Preview`} className="w-full h-full object-cover" />
            </div>
            <p className="text-sm sm:text-md text-gray-400 text-center max-w-3xl mx-auto">{model.caption}</p>
          </motion.div>
        ))}

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
