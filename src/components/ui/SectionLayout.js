/* src/components/ui/SectionLayout.js */
import React from 'react';
import { SPACING, ALIGNMENT, TYPOGRAPHY, DIVIDERS } from '../../lib/constants/layout.js';

/**
 * Consistent section layout component with standardized spacing and alignment
 */
const SectionLayout = ({ 
  children, 
  title, 
  subtitle, 
  divider = true,
  containerClass = '',
  contentClass = '',
  titleClass = '',
  subtitleClass = '',
  ...props 
}) => {
  return (
    <div className={`${SPACING.section_md} ${ALIGNMENT.container_center} ${containerClass}`} {...props}>
      {(title || subtitle) && (
        <div className={`${ALIGNMENT.text_center} mb-10`}>
          {title && (
            <h2 className={`${TYPOGRAPHY.heading_lg} text-gray-900 mb-2 ${titleClass}`}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className={`${TYPOGRAPHY.body_md} text-gray-600 ${subtitleClass}`}>
              {subtitle}
            </p>
          )}
          {divider && (
            <div className={`${DIVIDERS.primary} mt-4`}></div>
          )}
        </div>
      )}
      <div className={contentClass}>
        {children}
      </div>
    </div>
  );
};

export default SectionLayout;