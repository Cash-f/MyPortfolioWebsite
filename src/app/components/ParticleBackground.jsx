import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const mousePosition = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
        this.originalVx = this.vx; 
        this.originalVy = this.vy;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        const mouseX = mousePosition.current.x;
        const mouseY = mousePosition.current.y;
        const repulsionRadius = 100;
        const repulsionStrength = 1.5;

        const dxMouse = this.x - mouseX;
        const dyMouse = this.y - mouseY;
        const distanceToMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distanceToMouse < repulsionRadius) {
          const force = repulsionStrength * (1 - distanceToMouse / repulsionRadius);
          const angle = Math.atan2(dyMouse, dxMouse);

          this.vx += Math.cos(angle) * force * 0.05;
          this.vy += Math.sin(angle) * force * 0.05;
        } else {
          this.vx += (this.originalVx - this.vx) * 0.01;
          this.vy += (this.originalVy - this.vy) * 0.01;
        }

        this.vx *= 0.99; 
        this.vy *= 0.99;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 7500); 
      
      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p1 = particlesRef.current[i];
          const p2 = particlesRef.current[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxConnectionDistance = 100;

          if (distance < maxConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / maxConnectionDistance)})`;
            ctx.stroke();
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };
    
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(); 
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const handleMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    
    window.addEventListener('mousemove', handleMouseMove);

    initParticles();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{
        zIndex: 0,
        background: 'transparent'
      }}
    />
  );
};

export default ParticleBackground;
