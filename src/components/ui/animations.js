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

export default {
  StaggeredContainer,
  StaggeredItem,
  FadeIn,
  SlideIn,
  ScaleIn
};