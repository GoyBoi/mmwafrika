# MMWafrika E-Commerce Design System PRD

## CRITICAL INSTRUCTION FOR CLAUDE CODE
**YOU MUST USE THE AVAILABLE MCP SERVERS AND TOOLS PROVIDED IN THE DEVELOPMENT ENVIRONMENT. DO NOT IMPLEMENT FEATURES FROM SCRATCH WHEN TOOLS ARE AVAILABLE.**

## EXECUTIVE MANDATE
Transform MMWafrika from its current "ugly" state to a premium e-commerce experience that rivals Apple.com and Tesla.com in visual sophistication, minimalism, and professional polish.

## DESIGN PHILOSOPHY: SURGICAL MINIMALISM

### Core Principles
1. **Extreme Visual Restraint**: Every element must earn its place
2. **Breath-Giving Whitespace**: Generous spacing that lets products shine
3. **Invisible Interface**: UI should disappear, letting products be the hero
4. **Micro-Interactions**: Subtle, purposeful animations that feel premium
5. **Typography as Architecture**: Text should create visual hierarchy without screaming

## SPECIFIC VISUAL REQUIREMENTS

### SPACING & LAYOUT SYSTEM
```
Base Unit: 8px
Micro-spacing: 4px, 8px, 12px
Component-spacing: 16px, 24px, 32px
Section-spacing: 48px, 64px, 96px
Hero-spacing: 128px, 192px
```

**CRITICAL**: Use these exact values. No random spacing allowed.

### TYPOGRAPHY HIERARCHY
```
Hero Headline: 48px, font-weight: 300 (ultra-light)
Section Title: 32px, font-weight: 400 (normal)
Product Title: 18px, font-weight: 500 (medium)
Product Price: 16px, font-weight: 600 (semi-bold)
Body Text: 14px, font-weight: 400 (normal)
Micro Text: 12px, font-weight: 400 (normal)
```

**Letter-spacing**: Add 0.5px to all headings, 0.25px to product titles

### COLOR PALETTE (Apple/Tesla Inspired)
```
Primary Black: #000000
Secondary Black: #1d1d1f
Warm Gray: #f5f5f7
Cool Gray: #86868b
Border Gray: #d2d2d7
Background White: #ffffff
Accent Blue: #007aff (use sparingly)
Success Green: #30d158
Danger Red: #ff3b30
```

### PRODUCT CARD SPECIFICATIONS

#### Image Requirements
- **Thumbnail Size**: 48px × 48px (fixed)
- **Card Size**: 280px × 320px (fixed)
- **Modal Size**: 400px × 400px (fixed)
- **Object-fit**: cover
- **Border-radius**: 12px for cards, 8px for thumbnails

#### Card Layout
```css
.product-card {
  padding: 24px;
  border: 1px solid #d2d2d7;
  border-radius: 12px;
  background: white;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: #007aff;
}
```

### BUTTON SYSTEM

#### Primary Button (CTA)
```css
background: #000000;
color: white;
padding: 12px 24px;
border-radius: 8px;
font-weight: 500;
transition: all 0.2s ease;
```

#### Secondary Button
```css
background: transparent;
color: #000000;
border: 1px solid #d2d2d7;
padding: 12px 24px;
border-radius: 8px;
font-weight: 400;
```

#### Ghost Button
```css
background: transparent;
color: #007aff;
border: none;
padding: 8px 16px;
font-weight: 500;
```

### ANIMATION SPECIFICATIONS

#### Page Transitions
- **Fade-in Duration**: 0.6s
- **Easing**: cubic-bezier(0.25, 0.46, 0.45, 0.94)
- **Stagger Delay**: 0.1s between elements

#### Hover States
- **Transform**: translateY(-2px) for cards
- **Duration**: 0.3s
- **Box-shadow**: Subtle lift effect

#### Modal Animations
```css
@keyframes modalFadeIn {
  from { 
    opacity: 0; 
    transform: scale(0.95) translateY(10px); 
  }
  to { 
    opacity: 1; 
    transform: scale(1) translateY(0); 
  }
}
```

### CAROUSEL SPECIFICATIONS

#### Navigation
- **Arrow Size**: 32px × 32px
- **Arrow Style**: Thin stroke, 2px weight
- **Position**: Absolute, centered vertically
- **Background**: rgba(255, 255, 255, 0.9) with blur
- **Hover**: Solid white background

#### Indicators
- **Size**: 8px diameter dots
- **Inactive**: rgba(0, 0, 0, 0.3)
- **Active**: #000000
- **Spacing**: 12px between dots

### MODAL SPECIFICATIONS

#### Backdrop
- **Background**: rgba(0, 0, 0, 0.6)
- **Backdrop-filter**: blur(8px)
- **Animation**: fade-in 0.3s

#### Modal Container
- **Max-width**: 800px
- **Padding**: 48px
- **Border-radius**: 16px
- **Background**: white
- **Shadow**: 0 40px 80px rgba(0, 0, 0, 0.15)

### SPECIFIC COMPONENT FIXES NEEDED

#### ProductCarousel Component
1. **Image sizing**: Exactly 72px height, auto width
2. **Navigation arrows**: Use Lucide icons (ChevronLeft, ChevronRight)
3. **Smooth scrolling**: Implement snap-scroll behavior
4. **Loading states**: Skeleton placeholders while loading

#### MinimalProductCard Component  
1. **Fixed dimensions**: 280px × 320px
2. **Image aspect ratio**: 1:1 with object-fit cover
3. **Price typography**: Make price more prominent
4. **Hover animation**: Lift effect with shadow

#### ProductDetailModal Component
1. **Close button**: Position top-right with 24px margin
2. **Image gallery**: Thumbnail navigation if multiple images
3. **Content layout**: 60% image, 40% content split
4. **Add to cart**: Primary button, full width

### HOMEPAGE HERO SECTION
```
Height: 60vh minimum
Background: Linear gradient from #f5f5f7 to white
Content: Centered, maximum 600px width
Title: 48px, ultra-light weight
Subtitle: 18px, normal weight, 32px line-height
CTA Button: Primary style, 16px margin-top
```

### GRID SYSTEMS

#### Product Grid
- **Desktop**: 4 columns with 24px gaps
- **Tablet**: 3 columns with 16px gaps  
- **Mobile**: 2 columns with 12px gaps

#### Content Grid
- **Max-width**: 1200px
- **Padding**: 0 24px on mobile, 0 48px on desktop
- **Margin**: 0 auto for centering

## INTERACTION REQUIREMENTS

### Loading States
- **Skeleton screens**: For product cards while loading
- **Progressive loading**: Load above-the-fold content first
- **Smooth transitions**: Between loading and loaded states

### Error States
- **Subtle messaging**: Inline errors, not intrusive
- **Recovery options**: Always provide next steps
- **Visual consistency**: Maintain design system

### Empty States
- **Illustration + Message**: Friendly but minimal
- **Action oriented**: Guide users to add content
- **Brand consistent**: Use established visual language

## ACCESSIBILITY REQUIREMENTS

### Color Contrast
- **Minimum ratio**: 4.5:1 for normal text
- **Large text**: 3:1 minimum ratio
- **Interactive elements**: Clear focus states

### Keyboard Navigation
- **Tab order**: Logical and intuitive
- **Focus indicators**: Visible and branded
- **Skip links**: For screen readers

### Screen Readers
- **Alt text**: Descriptive for all images
- **ARIA labels**: For complex interactions
- **Semantic HTML**: Use proper heading hierarchy

## PERFORMANCE REQUIREMENTS

### Image Optimization
- **Lazy loading**: Below-the-fold images
- **Responsive images**: Multiple sizes for different screens  
- **Modern formats**: WebP with JPEG fallback
- **Compression**: Maintain quality while optimizing size

### Animation Performance
- **GPU acceleration**: Use transform and opacity for animations
- **60fps target**: Smooth animations on all devices
- **Reduced motion**: Respect user preferences

## TECHNICAL IMPLEMENTATION NOTES

### CSS Framework
- **Use Tailwind CSS**: Leverage utility classes
- **Custom components**: For complex interactions
- **CSS Variables**: For theming and consistency

### React Patterns
- **Functional components**: With hooks
- **Prop validation**: TypeScript or PropTypes
- **Error boundaries**: Graceful error handling

### State Management
- **Local state**: React hooks for component state
- **Global state**: Context API for app-wide state
- **Loading states**: Handle async operations properly

## QUALITY CHECKLIST

Before marking any component complete, verify:
- [ ] Matches exact spacing specifications
- [ ] Uses correct typography scale
- [ ] Implements proper hover states
- [ ] Includes loading/error states
- [ ] Responsive across all breakpoints
- [ ] Accessible keyboard navigation
- [ ] Smooth animations at 60fps
- [ ] Consistent with design system

## COMMON MISTAKES TO AVOID

1. **Random spacing**: Use the 8px base unit system
2. **Heavy fonts**: Keep typography light and readable  
3. **Harsh transitions**: Use easing functions for smoothness
4. **Inconsistent colors**: Stick to the defined palette
5. **Oversized images**: Follow exact dimension requirements
6. **Missing states**: Always include loading/error/empty states
7. **Poor contrast**: Test accessibility requirements
8. **Choppy animations**: Optimize for 60fps performance

## INSPIRATION REFERENCES

Study these for visual inspiration:
- **Apple.com product pages**: Clean typography, generous spacing
- **Tesla.com configurator**: Minimal interface, focus on product  
- **Stripe.com**: Subtle animations, perfect spacing
- **Linear.app**: Modern color palette, typography hierarchy

## SUCCESS METRICS

The redesign succeeds when:
- **Visual hierarchy** is immediately clear
- **Product focus** is maintained throughout
- **Interactions feel** premium and responsive  
- **Loading states** provide smooth experience
- **Responsive design** works flawlessly
- **Brand perception** shifts to premium/professional

---

**FINAL NOTE**: Every design decision should pass the "Apple Test" - would this element/spacing/animation feel at home on Apple.com? If not, refine until it does.
