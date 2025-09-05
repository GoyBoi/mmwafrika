import React from 'react';

// Fade In Animation Hook
export const useFadeIn = (duration = 300) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);
  
  return {
    style: {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}ms ease-in-out`,
    }
  };
};

// Slide In Animation Hook
export const useSlideIn = (direction = 'up', distance = 20, duration = 300) => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);
  
  const transforms = {
    up: `translateY(${isVisible ? 0 : -distance}px)`,
    down: `translateY(${isVisible ? 0 : distance}px)`,
    left: `translateX(${isVisible ? 0 : -distance}px)`,
    right: `translateX(${isVisible ? 0 : distance}px)`,
  };
  
  return {
    style: {
      transform: transforms[direction],
      opacity: isVisible ? 1 : 0,
      transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
    }
  };
};

// Scale Animation Hook
export const useScale = (initialScale = 0.9, duration = 300) => {
  const [isScaled, setIsScaled] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => setIsScaled(true), 50);
    return () => clearTimeout(timer);
  }, []);
  
  return {
    style: {
      transform: `scale(${isScaled ? 1 : initialScale})`,
      opacity: isScaled ? 1 : 0,
      transition: `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`,
    }
  };
};

// Hover Scale Component
export const HoverScale = ({ children, scale = 1.05, className = '' }) => {
  return (
    <div 
      className={`transform transition-transform duration-300 ease-in-out hover:scale-${scale} ${className}`}
      style={{
        '--scale': scale,
      }}
    >
      {children}
    </div>
  );
};

// Staggered Animation Container
export const StaggeredContainer = ({ children, delay = 100 }) => {
  const childrenArray = React.Children.toArray(children);
  
  return (
    <>
      {childrenArray.map((child, index) => (
        <div
          key={index}
          style={{
            animationDelay: `${index * delay}ms`,
          }}
          className="animate-fadeInUp"
        >
          {child}
        </div>
      ))}
    </>
  );
};

// Fade In Up Animation Component
export const FadeInUp = ({ children, delay = 0, duration = 300 }) => {
  return (
    <div
      style={{
        animation: `fadeInUp ${duration}ms ease-out ${delay}ms forwards`,
        opacity: 0,
      }}
      className="animate-fadeInUp"
    >
      {children}
    </div>
  );
};

// CSS for animations (to be added to index.css)
/*
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-fadeIn {
  animation: fadeIn 300ms ease-in-out forwards;
}

.animate-fadeInUp {
  animation: fadeInUp 300ms ease-out forwards;
}

.animate-fadeInDown {
  animation: fadeInDown 300ms ease-out forwards;
}

.animate-fadeInLeft {
  animation: fadeInLeft 300ms ease-out forwards;
}

.animate-fadeInRight {
  animation: fadeInRight 300ms ease-out forwards;
}

.animate-scaleIn {
  animation: scaleIn 300ms ease-out forwards;
}
*/

export default {
  useFadeIn,
  useSlideIn,
  useScale,
  HoverScale,
  StaggeredContainer,
  FadeInUp,
};