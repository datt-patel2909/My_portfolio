import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

const PullString = ({ isOpen, onToggle }) => {
  const y = useMotionValue(0);

  // Spring physics for the handle return - bouncy but controlled
  const ySpring = useSpring(y, { stiffness: 400, damping: 15, mass: 1 });

  const handleDragEnd = (_, info) => {
    // Threshold to trigger toggle
    if (info.offset.y > 100) {
      onToggle();
    }
  };

  // Rope path logic
  const initialLength = 120;

  // The path depends on the spring value
  const path = useTransform(ySpring, (latestY) => {
    const currentHeight = initialLength + latestY;
    return `M 15 0 L 15 ${currentHeight}`;
  });

  return (
    <div className="fixed top-0 right-6 md:right-10 z-50 flex flex-col items-center pointer-events-none">
      {/* Container for the SVG rope */}
      <svg className="w-10 overflow-visible h-screen pointer-events-none" style={{ zIndex: 45 }}>
        {/* Main Rope Visual - Requested Color #B47C55 */}
        <motion.path
          d={path}
          stroke="#B47C55"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
        />

        {/* Subtle twist texture overlay */}
        <motion.path
          d={path}
          stroke="rgba(0,0,0,0.1)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray="2 4"
          fill="transparent"
        />
      </svg>

      {/* The Interactive Layer */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0.2}
        onDragEnd={handleDragEnd}
        style={{ y }}
        className="absolute top-[120px] cursor-grab active:cursor-grabbing pointer-events-auto touch-none"
      >
        {/* 
            Invisible Hit Area:
            Extends upwards from the bottom tip to coordinate 0 (top of screen).
            This allows the user to grab "anywhere" on the rope length.
            Height 150px covers the initial length + some buffer.
            As we drag down, we hold onto this relative point.
        */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1000px] bg-transparent" />

        {/* No visual children here - relying on SVG strokeLinecap="round" for the tip */}
      </motion.div>
    </div>
  );
};

export default PullString;
