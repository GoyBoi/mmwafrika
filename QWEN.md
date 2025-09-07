# MMWAFRIKA Project Conventions (QWEN.md)

This document defines the coding style, architecture, and conventions for the MMWAFRIKA e-commerce website project.

## Project Structure

```
src/
├── app/                 # Main application entry point
├── components/          # Shared UI components
│   ├── ui/             # shadcn/ui components
│   ├── cart/           # Cart-specific components
│   └── filters/        # Filter components
├── context/            # React context providers
├── lib/                # Utility functions and helpers
├── pages/              # Page components
└── utils/              # Utility functions
```

## Coding Style

### React Component Structure

1. **Component Definition**:
   - Use functional components with hooks
   - Use TypeScript for type safety
   - Place props interface above component definition

2. **Import Order**:
   ```javascript
   // External libraries
   import React, { useState } from 'react';
   import { useNavigate } from 'react-router-dom';
   
   // Internal components
   import Button from '../components/Button.js';
   import { useCart } from '../context/CartContext.js';
   
   // Styles
   import './Component.css';
   ```

3. **Component Naming**:
   - Use PascalCase for component names
   - File names should match component names
   - Export default at the bottom of the file

### Tailwind CSS Usage

1. **Utility Class Order**:
   - Layout (display, position, float, etc.)
   - Flex/Grid
   - Spacing (margin, padding)
   - Sizing (width, height)
   - Typography
   - Backgrounds
   - Borders
   - Effects (shadow, opacity)
   - Transitions/Animations

2. **Responsive Design**:
   - Mobile-first approach
   - Use responsive prefixes appropriately
   - Keep consistent breakpoint usage

3. **Custom Classes**:
   - Define in `tailwind.config.js` for global tokens
   - Use semantic names that describe the purpose
   - Avoid arbitrary values when possible

## Component Architecture

### Single Source of Truth Principle

Each UI pattern should have exactly one implementation:

- One `Button` component for all buttons
- One `Card` component for all cards
- One `Navbar` component for navigation
- One `ProductCard` component for product displays

### Component Props

1. **Consistent Prop Naming**:
   - Boolean props: `disabled`, `loading`, `expanded`
   - Event handlers: `onClick`, `onChange`, `onSubmit`
   - Data props: `items`, `value`, `title`

2. **Default Props**:
   - Define sensible defaults for optional props
   - Use destructuring with default values

## State Management

### Cart Context

- Centralized cart state management
- Persistence using localStorage
- All cart operations through context methods

### Routing

- Single routing configuration in `App.js`
- Lazy loading for all pages
- Consistent route naming conventions

## Performance Optimization

### Code Splitting

- Lazy load all non-critical components
- Use React.Suspense for loading states
- Bundle analysis to identify large dependencies

### Image Optimization

- Compress images before upload
- Use appropriate formats (WebP when supported)
- Implement lazy loading for images
- Responsive images with srcSet

## Testing Strategy

### Unit Testing

- Test business logic in isolation
- Mock external dependencies
- Focus on edge cases and error handling

### Integration Testing

- Test component interactions
- Verify data flow between components
- Test user journeys end-to-end

## Documentation Standards

### Component Documentation

Each component should include:

1. **PropTypes** or TypeScript interface
2. **JSDoc comments** for props
3. **Usage examples** in story files
4. **Accessibility notes**

### API Documentation

- Document all REST API endpoints
- Include request/response examples
- Specify authentication requirements

## Git Workflow

### Branch Naming

- `feature/component-name` for new features
- `fix/issue-description` for bug fixes
- `refactor/component-name` for refactoring

### Commit Messages

Follow conventional commits format:
- `feat: add new component`
- `fix: resolve cart calculation error`
- `refactor: optimize product listing performance`
- `docs: update component documentation`

## Accessibility

### WCAG Compliance

- Ensure proper color contrast ratios
- Implement keyboard navigation
- Use semantic HTML elements
- Provide ARIA labels where needed

### Screen Reader Support

- Add alt text for all images
- Implement proper heading hierarchy
- Use landmark roles appropriately

## Security

### Data Protection

- Validate all user inputs
- Sanitize data before rendering
- Implement proper authentication
- Use HTTPS for all communications

### Dependency Management

- Regular security audits
- Keep dependencies up to date
- Minimize external dependencies

## Deployment

### Environment Configuration

- Separate configs for development, staging, production
- Environment variables for sensitive data
- Feature flags for gradual rollouts

### CI/CD Pipeline

- Automated testing on all branches
- Code quality checks (linting, formatting)
- Security scanning
- Performance monitoring