# MMWAFRIKA COMPONENT LIBRARY

## Overview

This document defines the reusable components that make up the MMWafrika e-commerce website. All components follow the design system principles and are built with accessibility in mind.

## Component Categories

### 1. Navigation Components

#### Navbar
```jsx
// Props
{
  showBackButton: boolean,  // Show back button
  onBack: function,          // Back button handler
  onHome: function,          // Home button handler
  onViewCart: function       // View cart handler
}

// Usage
<Navbar showBackButton={true} />
```

#### Breadcrumbs
```jsx
// Props
{
  crumbs: array of {label, path},  // Breadcrumb items
  onCrumbClick: function           // Crumb click handler
}

// Usage
<Breadcrumbs crumbs={[{label: 'Home', path: '/'}, {label: 'Products', path: '/products'}]} />
```

### 2. Product Components

#### ProductCard
```jsx
// Props
{
  product: object,           // Product data
  onViewProduct: function,  // View product handler
  onAddToCart: function,     // Add to cart handler
  onQuickView: function      // Quick view handler
}

// Usage
<ProductCard product={product} onViewProduct={handleViewProduct} />
```

#### ProductCarousel
```jsx
// Props
{
  products: array,           // Array of products
  title: string,             // Carousel title
  onViewProduct: function,   // View product handler
  onAddToCart: function      // Add to cart handler
}

// Usage
<ProductCarousel products={featuredProducts} title="Featured Products" />
```

#### ProductDetailModal
```jsx
// Props
{
  product: object,           // Product data
  isOpen: boolean,           // Modal open state
  onClose: function,         // Close handler
  onAddToCart: function      // Add to cart handler
}

// Usage
<ProductDetailModal product={selectedProduct} isOpen={isModalOpen} onClose={handleCloseModal} />
```

### 3. Form Components

#### Input
```jsx
// Props
{
  label: string,             // Input label
  id: string,                // Input ID
  error: string,             // Error message
  helperText: string,        // Helper text
  fullWidth: boolean,        // Full width input
  className: string          // Additional classes
}

// Usage
<Input label="Email" id="email" type="email" />
```

#### Textarea
```jsx
// Props
{
  label: string,             // Textarea label
  id: string,                // Textarea ID
  error: string,             // Error message
  helperText: string,        // Helper text
  fullWidth: boolean,        // Full width textarea
  rows: number,              // Number of rows
  className: string          // Additional classes
}

// Usage
<Textarea label="Message" id="message" rows={4} />
```

#### Select
```jsx
// Props
{
  label: string,             // Select label
  id: string,               // Select ID
  options: array,            // Select options [{value, label}]
  error: string,             // Error message
  helperText: string,        // Helper text
  fullWidth: boolean,        // Full width select
  className: string          // Additional classes
}

// Usage
<Select 
  label="Country" 
  id="country" 
  options={[
    {value: 'us', label: 'United States'},
    {value: 'ca', label: 'Canada'}
  ]} 
/>
```

#### Checkbox
```jsx
// Props
{
  label: string,             // Checkbox label
  id: string,                // Checkbox ID
  checked: boolean,          // Checked state
  onChange: function,       // Change handler
  className: string          // Additional classes
}

// Usage
<Checkbox label="Remember me" id="remember" checked={checked} onChange={handleChange} />
```

#### RadioButton
```jsx
// Props
{
  label: string,             // Radio button label
  id: string,                // Radio button ID
  checked: boolean,          // Checked state
  onChange: function,        // Change handler
  className: string          // Additional classes
}

// Usage
<RadioButton label="Male" id="male" checked={gender === 'male'} onChange={() => setGender('male')} />
```

### 4. UI Components

#### Button
```jsx
// Props
{
  variant: 'primary' | 'secondary' | 'ghost' | 'accent',  // Button style
  size: 'sm' | 'md' | 'lg',                   // Button size
  onClick: function,                           // Click handler
  disabled: boolean,                          // Disabled state
  fullWidth: boolean,                         // Full width button
  className: string,                          // Additional CSS classes
  style: object,                              // Custom inline styles
  children: node                               // Button content
}

// Usage
<Button variant="primary" onClick={handleSubmit}>Add to Cart</Button>
<Button variant="accent" size="lg" style={{ minWidth: '200px' }}>Shop Now</Button>
```

**Implementation Details**:
- Uses design system color values directly (#d97706 for accent, #000000 for primary)
- Implements hover effects with React state management
- Supports custom styling through className and style props
- Fully accessible with proper focus states
- Responsive design with appropriate padding and font sizes

#### Badge
```jsx
// Props
{
  variant: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark',  // Badge style
  size: 'sm' | 'md' | 'lg',                   // Badge size
  children: node                               // Badge content
}

// Usage
<Badge variant="success">New</Badge>
```

#### Rating
```jsx
// Props
{
  value: number,             // Rating value (0-5)
  count: number,             // Number of reviews
  size: 'sm' | 'md' | 'lg',  // Icon size
  readonly: boolean,         // Read-only mode
  onChange: function          // Value change handler
}

// Usage
<Rating value={4.5} count={128} />
```

#### Card
```jsx
// Props
{
  variant: 'default' | 'elevated' | 'bordered',  // Card style
  hoverable: boolean,          // Hover effect
  children: node                // Card content
}

// Usage
<Card hoverable={true}>
  {/* Card content */}
</Card>
```

### 5. Layout Components

#### Container
```jsx
// Props
{
  maxWidth: string,          // Max width (e.g., 'md', 'lg', 'xl')
  padding: boolean,          // Add padding
  children: node             // Content
}

// Usage
<Container maxWidth="lg" padding={true}>
  {/* Content */}
</Container>
```

#### Grid
```jsx
// Props
{
  columns: number,           // Number of columns
  gap: string,               // Gap size
  children: node             // Grid items
}

// Usage
<Grid columns={4} gap="md">
  {/* Grid items */}
</Grid>
```

#### Section
```jsx
// Props
{
  title: string,             // Section title
  subtitle: string,          // Section subtitle
  children: node             // Content
}

// Usage
<Section title="Featured Products" subtitle="Discover our latest collection">
  {/* Content */}
</Section>
```

### 6. Feedback Components

#### Toast
```jsx
// Props
{
  message: string,          // Toast message
  type: 'success' | 'error' | 'warning' | 'info',  // Toast type
  isVisible: boolean,         // Visibility state
  onClose: function          // Close handler
}

// Usage
<Toast message="Item added to cart!" type="success" isVisible={toastVisible} onClose={hideToast} />
```

#### Modal
```jsx
// Props
{
  isOpen: boolean,           // Modal open state
  onClose: function,         // Close handler
  title: string,             // Modal title
  children: node             // Modal content
}

// Usage
<Modal isOpen={isModalOpen} onClose={handleCloseModal} title="Product Details">
  {/* Modal content */}
</Modal>
```

#### Skeleton
```jsx
// Props
{
  width: string,             // Width
  height: string,            // Height
  borderRadius: string      // Border radius
}

// Usage
<Skeleton width="100%" height="200px" borderRadius="lg" />
```

### 7. Interactive Components

#### Accordion
```jsx
// Props
{
  items: array of {title, content},  // Accordion items
  multiple: boolean                   // Allow multiple open items
}

// Usage
<Accordion items={faqItems} multiple={false} />
```

#### Tabs
```jsx
// Props
{
  tabs: array of {label, content},    // Tab items
  activeTab: number,                 // Active tab index
  onTabChange: function              // Tab change handler
}

// Usage
<Tabs tabs={productTabs} activeTab={activeTab} onTabChange={setActiveTab} />
```

#### Carousel
```jsx
// Props
{
  items: array,              // Carousel items
  autoplay: boolean,         // Auto-play slides
  interval: number          // Slide interval (ms)
}

// Usage
<Carousel items={slides} autoplay={true} interval={5000} />
```

## Component Design Principles

### 1. Accessibility
- All components must be keyboard navigable
- Proper ARIA attributes for screen readers
- Sufficient color contrast ratios
- Focus management for interactive elements

### 2. Responsiveness
- Mobile-first design approach
- Flexible layouts that adapt to screen size
- Touch-friendly targets for mobile devices
- Progressive enhancement for different capabilities

### 3. Performance
- Minimal re-renders through React.memo
- Efficient event handling
- Lazy loading for heavy components
- Code splitting for large components

### 4. Consistency
- Follow design system guidelines
- Consistent naming conventions
- Shared props and interfaces
- Uniform user interactions

### 5. Reusability
- Generic implementations
- Flexible props for customization
- Well-documented APIs
- Clear usage examples

## Micro-Interactions Framework

### Animation Hooks
- `useFadeIn` - Fade in animation
- `useSlideIn` - Slide in animation
- `useScale` - Scale animation

### Animation Components
- `HoverScale` - Hover scale effect
- `StaggeredContainer` - Staggered animations
- `FadeInUp` - Fade in from bottom

Last Updated: September 4, 2025
Status: In Progress