'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader.js';
import { useRouter } from 'next/navigation'; // Import useRouter

// Reusable function to set up and load a 3D model
const setupThreeJSViewer = (mountElement, modelPath, setIsLoadingCallback, modelScale = 0.1) => {
    if (!mountElement) {
        return () => {};
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x282c34);

    const camera = new THREE.PerspectiveCamera(75, mountElement.clientWidth / mountElement.clientHeight, 0.1, 1000);
    camera.position.set(0, 50, 100);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Explicitly remove any existing canvas before appending a new one.
    // This ensures only one Three.js canvas exists within the mountElement at a time.
    const existingCanvas = mountElement.querySelector('canvas');
    if (existingCanvas) {
        mountElement.removeChild(existingCanvas);
    }
    mountElement.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 10;
    controls.maxDistance = 500;
    controls.maxPolarAngle = Math.PI / 2;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

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
        (xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded');
        },
        (error) => {
            console.error('An error occurred loading the FBX model:', error);
            setIsLoadingCallback(false);
            mountElement.textContent = 'Failed to load 3D model. Please check the file path and ensure it&apos;s a valid FBX.'; // Fixed apostrophe
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

    const onWindowResize = () => {
        if (!mountElement) return;
        camera.aspect = mountElement.clientWidth / mountElement.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(mountElement.clientWidth, mountElement.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    return () => {
        window.removeEventListener('resize', onWindowResize);
        if (mountElement && renderer.domElement && mountElement.contains(renderer.domElement)) {
            mountElement.removeChild(renderer.domElement);
            renderer.dispose();
        }
        controls.dispose();
        scene.traverse((object) => {
            if (!object.isMesh) return;
            object.geometry.dispose();
            if (object.material.isMaterial) {
                object.material.dispose();
            } else if (Array.isArray(object.material)) {
                object.material.forEach((material) => material.dispose());
            }
        });
    };
};

export default function HardSurfaceModellingPage() {
    const model1MountRef = useRef(null);
    const [model1IsLoading, setModel1IsLoading] = useState(true);

    const model2MountRef = useRef(null);
    const [model2IsLoading, setModel2IsLoading] = useState(true);

    const model3MountRef = useRef(null);
    const [model3IsLoading, setModel3IsLoading] = useState(true);

    const router = useRouter(); // Initialize useRouter hook

    // Effect for the first model
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && model1MountRef.current) {
                setupThreeJSViewer(model1MountRef.current, '/moderncrate.fbx', setModel1IsLoading, 0.1);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (model1MountRef.current) {
            observer.observe(model1MountRef.current);
        }

        // --- FIX FOR model1MountRef.current warning (line 153) ---
        
        const currentModel1MountRef = model1MountRef.current;

        return () => {
            // Use the captured variable in the cleanup function
            if (currentModel1MountRef) {
                observer.unobserve(currentModel1MountRef);
            }
        };
    }, []);

    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && model2MountRef.current) {
                setupThreeJSViewer(model2MountRef.current, '/akm.fbx', setModel2IsLoading, 0.1);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (model2MountRef.current) {
            observer.observe(model2MountRef.current);
        }

        
        // Capture the ref.current value at the beginning of the effect
        const currentModel2MountRef = model2MountRef.current;

        return () => {
            // Use the captured variable in the cleanup function
            if (currentModel2MountRef) {
                observer.unobserve(currentModel2MountRef);
            }
        };
    }, []);

    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && model3MountRef.current) {
                setupThreeJSViewer(model3MountRef.current, '/flashlight_L.fbx', setModel3IsLoading, 0.4);
                observer.disconnect();
            }
        }, { threshold: 0.1 });

        if (model3MountRef.current) {
            observer.observe(model3MountRef.current);
        }

        
        // Capture the ref.current value at the beginning of the effect
        const currentModel3MountRef = model3MountRef.current;

        return () => {
            // Use the captured variable in the cleanup function
            if (currentModel3MountRef) {
                observer.unobserve(currentModel3MountRef);
            }
            observer.disconnect();
        };
    }, []);

    return (
        <main className="pt-[80px] min-h-screen bg-black text-white flex flex-col">
            <ParticleBackground />
            <Header />

            <section className="flex-grow max-w-7xl mx-auto w-full px-6 sm:px-12 md:px-20 backdrop-blur-2xl py-12 z-10">
                <h1 className="text-5xl font-ovo mb-12 text-center">Hard Surface Modelling</h1>

                {/* First Model Showcase */}
                <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
                    <p className=" text-lg text-gray-300 items-center justify-center font-ovo">
                        Using tools like Blender, Substance Painter, and Unreal Engine, I bring to life everything from weapons and vehicles to modular architectural assets.
                        I pay close attention to form, scale, and detail, ensuring that each model is optimized for real-time performance while maintaining visual impact.
                        Whether I&apos;m designing a stylized prop or a hyper-realistic environment asset, my goal is always the same: to enhance immersion through thoughtful, high-quality design.
                    </p>
                </div>
                <div
                    ref={model1MountRef}
                    className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
                    style={{ minHeight: '400px' }}
                >
                    {model1IsLoading && <p>Loading 3D Model 1...</p>}
                </div>

                {/* Second Model Showcase */}
                <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
                    <p className="text-lg text-gray-300 font-ovo">
                        This futuristic crate blends clean, angular design, with textures allowing for a slight worn feel.
                        Designed for modular use in sci-fi settings, its accents and reinforced panels make it feel both functional and visually striking—ready to be dropped into a space station, cargo bay, or alien outpost.
                    </p>
                </div>
                <div
                    ref={model2MountRef}
                    className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
                    style={{ minHeight: '400px' }}
                >
                    {model2IsLoading && <p>Loading 3D Model 2...</p>}
                </div>

                {/* Third Model Showcase */}
                <div className="rounded-lg p-6 backdrop-blur-md mb-8 text-center">
                    <p className="text-lg text-gray-300 font-ovo">
                        This AKM rifle model captures the distinct form and mechanical complexity of the real-world design.
                        From the curved magazine to the iconic gas tube and receiver detail, each part is carefully modeled to reflect the rifle’s functional construction.
                        The clean geometry and balanced proportions make it ideal for real-time use in FPS or military-themed games.
                    </p>
                </div>
                <div
                    ref={model3MountRef}
                    className="w-full h-[60vh] bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center text-gray-400 text-lg mb-12"
                    style={{ minHeight: '400px' }}
                >
                    {model3IsLoading && <p>Loading 3D Model 3...</p>}
                </div>

                <div className="rounded-lg p-6 backdrop-blur-md mt-8 flex align-middle justify-center items-center text-center">
                    <p className="text-lg text-gray-300 font-ovo">
                        This compact flashlight model features a streamlined cylindrical body with functional details like a ridged grip, push-button switch, and focused lens housing.
                        Its clean topology and balanced scale make it suitable for first-person interactions or as a dynamic prop in modern or survival-themed environments.
                    </p>
                </div>

                <div className=" flex align-middle rounded-lg  justify-center items-centerp-6 backdrop-blur-md mt-8 text-center">
                    <p className="text-lg text-gray-300 font-ovo">
                        And many more game-ready assets.
                    </p>
                </div>

                {/* New Return to Projects Button */}
                <div className="flex justify-center mt-12 mb-8">
                    <button
                        onClick={() => router.push('/projects')}
                        className=" text-white px-8 py-3 rounded-full hover:bg-gray-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 font-ovo text-lg"
                    >
                        Return to Projects
                    </button>
                </div>

            </section>

            <Footer />
        </main>
    );
}