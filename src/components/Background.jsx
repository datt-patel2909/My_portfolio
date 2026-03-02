import { useEffect, useRef, useState } from 'react';

const Background = () => {
    const canvasRef = useRef(null);
    const spotlightRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (spotlightRef.current) {
                // Use requestAnimationFrame to throttle CSS updates to the display refresh rate
                requestAnimationFrame(() => {
                    spotlightRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(29, 78, 216, 0.10), transparent 80%)`;
                });
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const initParticles = () => {
            particles = [];
            // Optimize: Significantly reduce particle density on smaller screens
            const isMobile = window.innerWidth < 768;
            const density = isMobile ? 0.02 : 0.05;
            const particleCount = Math.floor(window.innerWidth * density);

            for (let i = 0; i < particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.2, // Very slow horizontal drift
                    vy: (Math.random() - 0.5) * 0.2, // Very slow vertical drift
                    size: Math.random() * 1.5 + 0.5,
                    opacity: Math.random() * 0.5 + 0.1
                });
            }
        };

        const drawParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Star color

            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();

                // Update position
                p.x += p.vx;
                p.y += p.vy;

                // Wrap around screen
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });

            animationFrameId = requestAnimationFrame(drawParticles);
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        drawParticles();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Animated Gradient Orbs (Nebula Effect) */}
            {/* Animated Gradient Orbs (Nebula Effect) - Enhanced Visibility & Optimized for mobile */}
            <div className="absolute inset-0">
                {/* Optimize: Removed mix-blend-screen and high duration pulse/bounce animations which destroy mobile GPU performance */}
                <div className="absolute top-[-20%] left-[-20%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-[-20%] right-[-20%] w-[800px] h-[800px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
            </div>

            {/* Canvas for Particles */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />

            {/* Mouse Spotlight */}
            <div
                ref={spotlightRef}
                className="absolute inset-0 pointer-events-none transition-opacity duration-300"
                style={{
                    background: `radial-gradient(600px circle at 0px 0px, rgba(29, 78, 216, 0.10), transparent 80%)`,
                }}
            />
        </div>
    );
};

export default Background;
