# MMWafrika E-commerce Website

A modern, responsive e-commerce website for African fashion and lifestyle products.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Product listing with grid layout
- Shopping cart functionality
- Checkout process with multi-step form
- Modern UI with smooth animations and transitions

## Technologies Used

- React
- Material-UI (MUI)
- Tailwind CSS
- Webpack
- Babel
- React Router

## Setup Instructions

1. Clone the repository:
   ```
   git clone https://github.com/GoyBoi/mmwafrika.git
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable components
├── context/        # React context for state management
├── pages/          # Page components
├── App.js          # Main app component
├── index.js        # Entry point
└── index.css       # Global styles
```

## UI/UX Improvements

This version includes significant UI/UX improvements:

- Enhanced product cards with consistent sizing and better image display
- Improved whitespace and alignment throughout the website
- Better typography hierarchy
- Enhanced button styling with consistent design language
- Optimized responsive design for all screen sizes
- Improved cart and checkout pages with better layouts

## Pushing to GitHub

To push this code to your GitHub repository (https://github.com/GoyBoi/mmwafrika), follow these steps:

1. Make sure you're logged into GitHub in your browser

2. If you have SSH keys set up:
   ```bash
   git remote add origin git@github.com:GoyBoi/mmwafrika.git
   git branch -M main
   git push -u origin main
   ```

3. If using HTTPS authentication:
   ```bash
   git remote add origin https://github.com/GoyBoi/mmwafrika.git
   git branch -M main
   git push -u origin main
   ```
   
   If you get authentication errors, you may need to:
   - Use a Personal Access Token instead of your password
   - Configure Git credentials helper:
     ```bash
     git config --global credential.helper store
     ```
   - Then try pushing again

4. If you continue to have issues, you can also:
   - Delete the existing remote repository on GitHub
   - Create a new one (making sure you're logged in as GoyBoi)
   - Follow the setup instructions provided by GitHub

## License

This project is licensed under the MIT License.