import React from 'react';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@/components/ui/tooltip.jsx';

const HelpTooltip = ({ 
  children, 
  content, 
  side = 'top',
  align = 'center',
  delayDuration = 300,
  className = '' 
}) => {
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip>
        <TooltipTrigger asChild>
          {children}
        </TooltipTrigger>
        <TooltipContent 
          side={side} 
          align={align}
          className={`px-3 py-2 text-xs rounded-md bg-gray-900 text-white max-w-xs ${className}`}
        >
          {content}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default HelpTooltip;