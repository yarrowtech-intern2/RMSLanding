import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;

    container.innerHTML = "";

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      70,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 55;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;

    container.appendChild(renderer.domElement);

    // ✅ Mobile optimization
    const isMobile = window.innerWidth < 640;
    const geometry = new THREE.OctahedronGeometry(isMobile ? 13 : 18, 2);

    const material = new THREE.MeshStandardMaterial({
      color: 0xbbbbbb,
      wireframe: true,
      metalness: 0.25,
      roughness: 0.45,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lights
    scene.add(new THREE.AmbientLight(0xffffff, 0.6));

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.4);
    directionalLight.position.set(50, 50, 50);
    scene.add(directionalLight);

    // ✅ Smooth animation using clock
    const clock = new THREE.Clock();

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // target rotation for smooth lerp
    let targetX = 0;
    let targetY = 0;

    const animate = () => {
      if (!prefersReducedMotion && !document.hidden) {
        const dt = clock.getDelta();

        // smooth speed
        targetX += dt * 0.45;
        targetY += dt * 0.75;

        // smooth lerp
        mesh.rotation.x += (targetX - mesh.rotation.x) * 0.06;
        mesh.rotation.y += (targetY - mesh.rotation.y) * 0.06;
      }

      renderer.render(scene, camera);
    };

    renderer.setAnimationLoop(animate);

    // ✅ Resize
    const resizeObserver = new ResizeObserver(() => {
      const { clientWidth, clientHeight } = container;
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      renderer.setAnimationLoop(null);

      geometry.dispose();
      material.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10"
    >
      {/* 3D Background */}
      <div
        ref={canvasRef}
        className="absolute inset-0 opacity-70 sm:opacity-80 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl text-center py-16 sm:py-20 lg:py-24">
        {/* Badge */}
        <div
          className="inline-flex items-center justify-center
                     px-5 sm:px-8 lg:px-10
                     py-3 sm:py-4
                     bg-gray-900/70 border border-gray-600
                     rounded-full
                     text-base sm:text-2xl lg:text-3xl
                     font-bold tracking-wider
                     text-white
                     mb-6 sm:mb-8"
        >
          <span className="leading-tight">RETAIL MANAGEMENT SYSTEM</span>
        </div>

        {/* Heading */}
        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-5 sm:mb-6 leading-[1.2] tracking-tight">
          <span className="block">A unified digital platform</span>
          <span className="block bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            that connects all retail departments
          </span>
          <span className="block">into one smart, automated system.</span>
        </h1>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed opacity-90 px-1 sm:px-0">
          Simplifies operations, improves coordination, and delivers
          <span className="text-white font-medium"> real-time insights </span>
          for faster, data-driven decisions.
        </p>
      </div>
    </section>
  );
};

export default Hero;
