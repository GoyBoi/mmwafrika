/* src/lib/constants/layout.js */

// Standardized spacing values based on 8px grid
export const SPACING = {
  // Micro spacing for detailed adjustments
  micro_xs: '0.125rem',    // 2px
  micro_sm: '0.25rem',     // 4px
  micro_md: '0.375rem',    // 6px
  micro_lg: '0.5rem',      // 8px
  
  // Component spacing for consistent component padding/margin
  component_xs: '0.5rem',  // 8px
  component_sm: '0.75rem', // 12px
  component_md: '1rem',    // 16px
  component_lg: '1.25rem', // 20px
  component_xl: '1.5rem',  // 24px
  
  // Section spacing for consistent vertical rhythm
  section_xs: '1rem',      // 16px
  section_sm: '1.5rem',    // 24px
  section_md: '2rem',      // 32px
  section_lg: '3rem',      // 48px
  section_xl: '4rem',      // 64px
  section_2xl: '5rem',     // 80px
  
  // Page/container max widths for consistent horizontal limits
  container_sm: '640px',
  container_md: '768px',
  container_lg: '1024px',
  container_xl: '1280px',
  container_2xl: '1440px',
};

// Standardized alignment classes
export const ALIGNMENT = {
  // Container alignment
  container_center: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
  
  // Content alignment
  text_center: 'text-center',
  text_left: 'text-left',
  text_right: 'text-right',
  
  // Flexbox alignment utilities
  flex_center_col: 'flex flex-col items-center justify-center',
  flex_center_row: 'flex items-center justify-center',
  flex_start_col: 'flex flex-col items-start justify-start',
  flex_start_row: 'flex items-start justify-start',
  flex_between_row: 'flex items-center justify-between',
  
  // Grid alignment utilities
  grid_center: 'grid justify-items-center',
  grid_stretch: 'grid justify-items-stretch',
};

// Standardized typography classes
export const TYPOGRAPHY = {
  // Headings
  heading_xl: 'text-4xl md:text-5xl lg:text-6xl font-heading font-semibold tracking-tight',
  heading_lg: 'text-3xl md:text-4xl font-heading font-semibold',
  heading_md: 'text-2xl md:text-3xl font-heading font-semibold',
  heading_sm: 'text-xl md:text-2xl font-heading font-semibold',
  heading_xs: 'text-lg md:text-xl font-heading font-semibold',
  
  // Body text
  body_lg: 'text-base md:text-lg font-body leading-relaxed',
  body_md: 'text-base font-body leading-relaxed',
  body_sm: 'text-sm font-body leading-relaxed',
  body_xs: 'text-xs font-body leading-relaxed',
  
  // Captions and small text
  caption: 'text-xs font-body text-gray-600',
  caption_sm: 'text-2xs font-body text-gray-500',
};

// Standardized divider/separator styles
export const DIVIDERS = {
  primary: 'w-20 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full',
  secondary: 'w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto rounded-full',
  accent: 'w-12 h-0.5 bg-amber-600 mx-auto rounded-full',
};

// Standardized card styles
export const CARDS = {
  base: 'bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md transition-all duration-300',
  hover: 'hover:shadow-xl hover:-translate-y-1',
  elevated: 'shadow-lg',
  elevated_hover: 'hover:shadow-2xl hover:-translate-y-2',
};

// Standardized grid layouts
export const GRIDS = {
  section_base: 'grid gap-6 md:gap-8 lg:gap-12 justify-items-center mx-auto w-full',
  section_product: 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center mx-auto w-full',
};