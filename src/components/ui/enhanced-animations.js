/* src/components/ui/animations.js */

import { motion } from 'framer-motion';

// Staggered animation container
export const StaggeredContainer = ({ children, className, ...props }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Staggered animation item
export const StaggeredItem = ({ children, className, ...props }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { 
            duration: 0.6, 
            ease: "easeOut" 
          }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Fade in animation
export const FadeIn = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Slide in animation
export const SlideIn = ({ children, className, direction = 'left', delay = 0, ...props }) => {
  const directions = {
    left: { x: -100 },
    right: { x: 100 },
    top: { y: -100 },
    bottom: { y: 100 }
  };

  return (
    <motion.div
      initial={{ ...directions[direction], opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Scale in animation
export const ScaleIn = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced bounce animation
export const BounceIn = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 500, 
        damping: 20,
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced fade up animation
export const FadeUp = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced fade down animation
export const FadeDown = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced fade left animation
export const FadeLeft = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced fade right animation
export const FadeRight = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced pulse animation
export const Pulse = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        scale: [1, 1.05, 1]
      }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced shake animation
export const Shake = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        x: [0, -5, 5, -5, 5, 0]
      }}
      transition={{ 
        duration: 0.5,
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced spin animation
export const Spin = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotate: 360
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        ease: "linear",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced float animation
export const Float = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        y: [0, -10, 0]
      }}
      transition={{ 
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced wiggle animation
export const Wiggle = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        rotate: [0, 5, -5, 5, -5, 0]
      }}
      transition={{ 
        duration: 0.5,
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced reveal animation
export const Reveal = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced slide up reveal animation
export const SlideUpReveal = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced slide down reveal animation
export const SlideDownReveal = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced slide left reveal animation
export const SlideLeftReveal = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

// Enhanced slide right reveal animation
export const SlideRightReveal = ({ children, className, delay = 0, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut",
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default {
  StaggeredContainer,
  StaggeredItem,
  FadeIn,
  SlideIn,
  ScaleIn,
  BounceIn,
  FadeUp,
  FadeDown,
  FadeLeft,
  FadeRight,
  Pulse,
  Shake,
  Spin,
  Float,
  Wiggle,
  Reveal,
  SlideUpReveal,
  SlideDownReveal,
  SlideLeftReveal,
  SlideRightReveal
};