# MMWAFRIKA DESIGN SYSTEM

## Overview

This document defines the visual design system for MMWafrika e-commerce website, focusing on a minimalist, futuristic aesthetic that celebrates African culture and heritage.

## Color Palette

### Primary Colors
These colors form the foundation of our visual identity:

```css
:root {
  /* Primary Colors - African Inspired */
  --color-black: #000000;
  --color-white: #ffffff;
  --color-dark-gray: #1d1d1f;
  --color-cool-gray: #86868b;
  
  /* Accent Colors - African Inspired */
  --color-amber: #d97706;
  --color-orange: #ea580c;
  --color-terracotta: #c2410c;
  
  /* Neutral Colors */
  --color-warm-gray: #f5f5f7;
  --color-gray-50: #fafaf9;
  --color-gray-100: #f5f5f4;
  --color-gray-200: #e7e5e4;
  --color-gray-300: #d6d3d1;
  --color-gray-500: #78716c;
  --color-gray-700: #44403c;
  --color-gray-900: #1c1917;
  
  /* Semantic Colors */
  --color-background: var(--color-white);
  --color-surface: var(--color-warm-gray);
  --color-text-primary: var(--color-dark-gray);
  --color-text-secondary: var(--color-cool-gray);
  --color-text-tertiary: var(--color-gray-500);
  --color-border: var(--color-gray-200);
  --color-accent: var(--color-amber);
  --color-success: #30d158;
  --color-danger: #ff3b30;
}
```

### Color Usage Guidelines

1. **Primary Black (#000000)**: Headings, primary text, CTAs
2. **Dark Gray (#1d1d1f)**: Body text, secondary elements
3. **Cool Gray (#86868b)**: Tertiary text, disabled states
4. **Amber (#d97706)**: Accents, sale badges, CTAs
5. **Orange (#ea580c)**: Hover states, secondary CTAs
6. **Warm Gray (#f5f5f7)**: Backgrounds, cards
7. **White (#ffffff)**: Backgrounds, text on dark backgrounds

## Typography

### Font Family
```css
:root {
  /* Headings */
  --font-heading: 'Playfair Display', serif;
  --font-heading-weight: 700;
  
  /* Body Text */
  --font-body: 'Inter', sans-serif;
  --font-body-weight: 400;
  
  /* Special Text */
  --font-accent: 'Dancing Script', cursive;
}
```

### Typography Scale
```css
:root {
  /* Hero Headline */
  --font-size-hero: 3rem;          /* 48px */
  --font-weight-hero: 300;         /* Ultra-light */
  --line-height-hero: 1.2;
  --letter-spacing-hero: -0.02em;
  
  /* Section Title */
  --font-size-section: 2rem;       /* 32px */
  --font-weight-section: 400;       /* Normal */
  --line-height-section: 1.25;
  --letter-spacing-section: -0.01em;
  
  /* Product Title */
  --font-size-product-title: 1.125rem; /* 18px */
  --font-weight-product-title: 500;    /* Medium */
  --line-height-product-title: 1.33;
  --letter-spacing-product-title: 0;
  
  /* Product Price */
  --font-size-product-price: 1rem;     /* 16px */
  --font-weight-product-price: 600;      /* Semi-bold */
  --line-height-product-price: 1.5;
  --letter-spacing-product-price: 0;
  
  /* Body Text */
  --font-size-body: 0.875rem;      /* 14px */
  --font-weight-body: 400;          /* Normal */
  --line-height-body: 1.57;
  --letter-spacing-body: 0.01em;
  
  /* Caption */
  --font-size-caption: 0.75rem;     /* 12px */
  --font-weight-caption: 400;        /* Normal */
  --line-height-caption: 1.5;
  --letter-spacing-caption: 0.02em;
}
```

## Spacing System

### Base Unit
Our spacing system is based on an 8px grid:

```css
:root {
  /* Spacing Scale */
  --spacing-4xs: 0.125rem;   /* 2px */
  --spacing-3xs: 0.25rem;    /* 4px */
  --spacing-2xs: 0.5rem;     /* 8px */
  --spacing-xs: 0.75rem;     /* 12px */
  --spacing-sm: 1rem;        /* 16px */
  --spacing-md: 1.5rem;      /* 24px */
  --spacing-lg: 2rem;        /* 32px */
  --spacing-xl: 3rem;        /* 48px */
  --spacing-2xl: 4rem;       /* 64px */
  --spacing-3xl: 6rem;       /* 96px */
  --spacing-4xl: 8rem;       /* 128px */
}
```

### Spacing Usage Guidelines
1. **Component Spacing**: Use --spacing-2xs to --spacing-sm
2. **Section Spacing**: Use --spacing-md to --spacing-xl
3. **Hero Spacing**: Use --spacing-2xl to --spacing-4xl

## Shadows & Depth

```css
:root {
  /* Subtle shadows for depth */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  
  /* Hover shadows for interaction */
  --shadow-hover: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

## Borders & Radius

```css
:root {
  /* Border Radius */
  --radius-xs: 0.25rem;     /* 4px */
  --radius-sm: 0.5rem;      /* 8px */
  --radius-md: 0.75rem;     /* 12px */
  --radius-lg: 1rem;         /* 16px */
  --radius-xl: 1.5rem;      /* 24px */
  --radius-full: 9999px;
  
  /* Border Widths */
  --border-thin: 1px;
  --border-thick: 2px;
}
```

## Transitions & Animations

```css
:root {
  /* Transition Durations */
  --duration-fast: 150ms;
  --duration-normal: 300ms;
  --duration-slow: 500ms;
  
  /* Easing Functions */
  --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
}
```

## Breakpoints

```css
:root {
  /* Responsive Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
  --breakpoint-2xl: 1536px;
}
```

## Component Library

### Buttons

```css
.btn {
  /* Base Button Styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  font-weight: 500;
  transition: all var(--duration-normal) var(--ease-in-out);
  cursor: pointer;
  border: none;
  outline: none;
}

.btn-primary {
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-2xs) var(--spacing-sm);
  font-size: var(--font-size-body);
}

.btn-primary:hover {
  background-color: var(--color-dark-gray);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: transparent;
  color: var(--color-black);
  border: var(--border-thin) solid var(--color-border);
  padding: var(--spacing-2xs) var(--spacing-sm);
  font-size: var(--font-size-body);
}

.btn-secondary:hover {
  background-color: var(--color-warm-gray);
  border-color: var(--color-cool-gray);
}
```

### Cards

```css
.card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  border: var(--border-thin) solid var(--color-border);
  overflow: hidden;
  transition: all var(--duration-normal) var(--ease-in-out);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}
```

## Accessibility

### Color Contrast
- Minimum 4.5:1 contrast ratio for normal text
- Minimum 3:1 contrast ratio for large text
- Clear focus states for interactive elements

### Focus States
```css
:focus {
  outline: 2px solid var(--color-amber);
  outline-offset: 2px;
}
```

Last Updated: September 4, 2025
Status: Draft