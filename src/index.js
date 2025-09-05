import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App.js';
import './index.css'; // Import the global CSS file

// Create root container
const container = document.getElementById('root');
const root = createRoot(container);

// Render the main app
root.render(<App />);