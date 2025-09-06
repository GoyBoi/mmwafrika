import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.js';
import './index.css'; // Import the global CSS file
import { loadFonts } from './utils/fontLoader.js'; // Import font loading utility

// Load custom fonts
loadFonts().catch(error => {
  console.warn('Font loading failed:', error);
});

// Create root container
const container = document.getElementById('root');
const root = createRoot(container);

// Render the main app
root.render(<App />);