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

    
    const colors = [
      { hex: '#CCCCCC', weight: 8 }, 
      { hex: '#E0E0E0', weight: 8 }, 
      { hex: '#FFFFFF', weight: 6 }, 
      { hex: '#FFFF00', weight: 1 }, 
      { hex: '#F0E68C', weight: 1 }, 
    ];

    // Pre-calculate the distribution
    const colorDistribution = [];
    colors.forEach(c => {
      for (let i = 0; i < c.weight; i++) {
        colorDistribution.push(c.hex);
      }
    });


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
        
        this.color = colorDistribution[Math.floor(Math.random() * colorDistribution.length)];
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
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
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
            const combinedOpacity = 0.1 * (1 - distance / maxConnectionDistance);
            const mixedColor = mixColors(p1.color, p2.color, combinedOpacity);
            ctx.strokeStyle = mixedColor;
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

    const handleMouseMove = (event) => {
      mousePosition.current = { x: event.clientX, y: event.clientY };
    };

    // Helper function to convert hex to rgb
    function hexToRgb(hex) {
        const bigint = parseInt(hex.slice(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return [r, g, b];
    }

    // Helper function 
    function mixColors(color1, color2, alpha) {
        let rgb1 = hexToRgb(color1);
        let rgb2 = hexToRgb(color2);

        let r = Math.round(rgb1[0] * (1 - alpha) + rgb2[0] * alpha);
        let g = Math.round(rgb1[1] * (1 - alpha) + rgb2[1] * alpha);
        let b = Math.round(rgb1[2] * (1 - alpha) + rgb2[2] * alpha);

        return `rgba(${r}, ${g}, ${b}, ${alpha})`;
    }


    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
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