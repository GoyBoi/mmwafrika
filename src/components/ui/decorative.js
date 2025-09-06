import React from 'react';
import { motion } from 'framer-motion';

// Floating decorative elements
export const FloatingElements = () => {
  return (
    <>
      {/* Floating circles */}
      <motion.div
        className="absolute top-1/4 left-10 w-16 h-16 rounded-full bg-amber-400/20 blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-orange-500/20 blur-xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 rounded-full bg-amber-600/10 blur-xl"
        animate={{
          y: [0, -15, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-8 h-8 border-2 border-amber-400/30 rotate-45"
        animate={{
          rotate: [45, 135, 225, 315, 405],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-6 h-6 rounded-full border-2 border-orange-500/30"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />
    </>
  );
};

// Gradient overlay
export const GradientOverlay = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/60 md:via-black/20 md:to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
  );
};

export default {
  FloatingElements,
  GradientOverlay
};