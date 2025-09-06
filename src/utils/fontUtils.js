/**
 * Font utility functions for MMWAFRIKA
 * Provides consistent font application across components
 */

// Apply Merienda font to an element
export const applyMeriendaFont = (element) => {
  if (element) {
    element.style.fontFamily = "'Merienda', cursive";
  }
};

// Apply Cormorant Garamond font to an element
export const applyCormorantGaramondFont = (element) => {
  if (element) {
    element.style.fontFamily = "'Cormorant Garamond', serif";
  }
};

// Apply Lora font to an element
export const applyLoraFont = (element) => {
  if (element) {
    element.style.fontFamily = "'Lora', serif";
  }
};

// Apply Dancing Script font to an element
export const applyDancingScriptFont = (element) => {
  if (element) {
    element.style.fontFamily = "'Dancing Script', cursive";
  }
};

// Font classes for Tailwind
export const FONT_CLASSES = {
  heading: "font-heading",
  headingAlt: "font-heading-alt",
  body: "font-body",
  accent: "font-accent"
};

// CSS variable names for fonts
export const FONT_VARIABLES = {
  heading: "var(--font-heading)",
  headingAlt: "var(--font-heading-alt)",
  body: "var(--font-body)",
  accent: "var(--font-accent)"
};

export default {
  applyMeriendaFont,
  applyCormorantGaramondFont,
  applyLoraFont,
  applyDancingScriptFont,
  FONT_CLASSES,
  FONT_VARIABLES
};