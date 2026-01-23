# Design System

## Overview

This design system provides a comprehensive set of CSS variables, animations, and utility classes to maintain consistency across the portfolio.

## Colors

### Primary Colors
- `--primary`: #00ff41 - Main accent color
- `--primary-dark`: #00cc34 - Darker variant
- `--primary-light`: #33ff66 - Lighter variant

### Secondary Colors
- `--secondary`: #64ffda - Secondary accent
- `--accent`: #00ff41 - Primary accent (same as primary)
- `--accent-glow`: rgba(0, 255, 65, 0.3) - Glow effect

### Background Colors
- `--bg-primary`: #0a192f - Main background
- `--bg-secondary`: #112240 - Secondary background
- `--bg-tertiary`: #1a2f4f - Tertiary background
- `--bg-card`: rgba(17, 34, 64, 0.5) - Card background with transparency
- `--bg-card-hover`: rgba(17, 34, 64, 0.8) - Card hover state

### Text Colors
- `--text-primary`: #e6f1ff - Primary text
- `--text-secondary`: #a8b2d1 - Secondary text
- `--text-muted`: #8892b0 - Muted text
- `--text-accent`: #64ffda - Accent text

### Border Colors
- `--border-primary`: rgba(100, 255, 218, 0.1) - Primary border
- `--border-active`: rgba(100, 255, 218, 0.5) - Active state border
- `--border-accent`: var(--accent) - Accent border

## Spacing

A consistent spacing scale based on rem units:

- `--spacing-xs`: 0.5rem (8px)
- `--spacing-sm`: 1rem (16px)
- `--spacing-md`: 2rem (32px)
- `--spacing-lg`: 4rem (64px)
- `--spacing-xl`: 6rem (96px)
- `--spacing-2xl`: 8rem (128px)

### Usage Example

```css
.element {
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
}
```

## Typography

### Font Families
- `--font-primary`: System font stack for optimal performance
- `--font-code`: Monospace font for code

### Font Sizes
- `--text-xs`: 0.75rem (12px)
- `--text-sm`: 0.875rem (14px)
- `--text-base`: 1rem (16px)
- `--text-lg`: 1.125rem (18px)
- `--text-xl`: 1.25rem (20px)
- `--text-2xl`: 1.5rem (24px)
- `--text-3xl`: 1.875rem (30px)
- `--text-4xl`: 2.25rem (36px)
- `--text-5xl`: 3rem (48px)
- `--text-6xl`: 3.75rem (60px)

### Font Weights
- `--font-light`: 300
- `--font-normal`: 400
- `--font-medium`: 500
- `--font-semibold`: 600
- `--font-bold`: 700

### Line Heights
- `--leading-tight`: 1.25
- `--leading-normal`: 1.5
- `--leading-relaxed`: 1.75
- `--leading-loose`: 2

### Usage Example

```css
h1 { 
  font-size: var(--text-5xl); 
  font-weight: var(--font-bold);
  line-height: var(--leading-tight);
}

p { 
  font-size: var(--text-base); 
  line-height: var(--leading-relaxed);
}
```

## Shadows

Predefined shadow styles with glow effects:

- `--shadow-sm`: Small shadow for subtle elevation
- `--shadow-md`: Medium shadow for cards
- `--shadow-lg`: Large shadow with accent glow
- `--shadow-xl`: Extra large shadow with prominent glow
- `--shadow-glow`: Glow effect
- `--shadow-glow-lg`: Large glow effect

### Usage Example

```css
.card {
  box-shadow: var(--shadow-lg);
}

.card:hover {
  box-shadow: var(--shadow-xl);
}
```

## Border Radius

Consistent corner rounding:

- `--radius-sm`: 4px
- `--radius-md`: 8px
- `--radius-lg`: 12px
- `--radius-xl`: 16px
- `--radius-2xl`: 24px
- `--radius-full`: 9999px (fully rounded)

### Usage Example

```css
.card {
  border-radius: var(--radius-lg);
}

.button {
  border-radius: var(--radius-full);
}
```

## Transitions

Standardized transition speeds:

- `--transition-fast`: 0.15s ease
- `--transition-normal`: 0.3s ease
- `--transition-slow`: 0.5s ease
- `--transition-all`: all 0.3s ease

### Usage Example

```css
.element {
  transition: var(--transition-all);
}

.element:hover {
  transform: translateY(-5px);
}
```

## Z-Index

Layering system for proper stacking:

- `--z-dropdown`: 1000
- `--z-sticky`: 1020
- `--z-fixed`: 1030
- `--z-modal`: 1040
- `--z-tooltip`: 1050
- `--z-max`: 9999

## Animations

### Keyframe Animations

Available keyframe animations:

- `fadeIn` - Fade in from transparent
- `slideUp` - Slide up with fade
- `slideDown` - Slide down with fade
- `slideInLeft` - Slide in from left
- `slideInRight` - Slide in from right
- `scaleIn` - Scale up with fade
- `shimmer` - Loading shimmer effect
- `glowPulse` - Pulsing glow
- `blink` - Cursor blink
- `float` - Floating animation
- `rotate` - Full rotation

### Scroll Animation Classes

Use with the `useScrollAnimation` hook:

```jsx
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Component = () => {
  const ref = useScrollAnimation();
  
  return <section ref={ref} className="fade-in">Content</section>;
};
```

Available classes:
- `fade-in` - Fade in on scroll
- `slide-in-left` - Slide in from left on scroll
- `slide-in-right` - Slide in from right on scroll
- `scale-in` - Scale in on scroll
- `stagger-item` - For staggered list animations

### Usage Example

```css
.button {
  animation: glowPulse 2s infinite;
}

.loading {
  animation: shimmer 2s infinite;
}
```

## Utility Classes

### Layout

```css
.container /* Max-width container with padding */
.container-wide /* Wider container */
```

### Grid

```css
.grid /* Basic grid */
.grid-2 /* 2 column grid */
.grid-3 /* 3 column grid */
.grid-4 /* 4 column grid */
```

### Flex

```css
.flex /* Display flex */
.flex-col /* Flex column */
.items-center /* Align items center */
.justify-center /* Justify center */
.justify-between /* Justify space-between */
.gap-sm /* Small gap */
.gap-md /* Medium gap */
.gap-lg /* Large gap */
```

### Spacing

Padding and margin utilities:

```css
.p-sm, .p-md, .p-lg, .p-xl /* Padding */
.m-sm, .m-md, .m-lg, .m-xl /* Margin */
.mt-sm, .mt-md, .mt-lg /* Margin top */
.mb-sm, .mb-md, .mb-lg /* Margin bottom */
```

### Text

```css
.text-center, .text-left, .text-right /* Alignment */
.text-primary, .text-secondary, .text-muted, .text-accent /* Colors */
.font-light, .font-normal, .font-medium, .font-semibold, .font-bold /* Weights */
```

### Backgrounds

```css
.bg-primary /* Primary background */
.bg-secondary /* Secondary background */
.bg-card /* Card background */
```

### Borders

```css
.rounded-sm, .rounded-md, .rounded-lg, .rounded-xl, .rounded-full /* Border radius */
```

### Shadows

```css
.shadow-sm, .shadow-md, .shadow-lg, .shadow-xl /* Box shadows */
```

### Transitions

```css
.transition /* Standard transition */
.transition-fast /* Fast transition */
.transition-slow /* Slow transition */
```

### Visibility

```css
.hidden /* Hide element */
.hidden-mobile /* Hide on mobile */
.hidden-desktop /* Hide on desktop */
```

## Components

### ScrollProgress

A progress bar that fills as the user scrolls:

```jsx
import ScrollProgress from './components/ScrollProgress';

// In App.jsx
<ScrollProgress />
```

### SectionIndicators

Navigation dots that highlight the current section:

```jsx
import SectionIndicators from './components/SectionIndicators';

// In App.jsx
<SectionIndicators />
```

### BackToTop

A button that appears when scrolling down:

```jsx
import BackToTop from './components/BackToTop';

// In App.jsx
<BackToTop />
```

## Breakpoints

Responsive breakpoints (reference only, not CSS variables):

- `--breakpoint-sm`: 480px
- `--breakpoint-md`: 768px
- `--breakpoint-lg`: 1024px
- `--breakpoint-xl`: 1280px
- `--breakpoint-2xl`: 1536px

### Media Query Usage

```css
@media (max-width: 768px) {
  /* Mobile styles */
}

@media (max-width: 1024px) {
  /* Tablet styles */
}
```

## Best Practices

1. **Always use CSS variables** instead of hardcoded values
2. **Use utility classes** for common patterns
3. **Apply consistent spacing** using the spacing scale
4. **Use semantic color names** (e.g., `--text-primary` not `#e6f1ff`)
5. **Add transitions** to interactive elements for smooth UX
6. **Use the scroll animation hook** for sections that should animate on scroll
7. **Maintain z-index hierarchy** using the predefined values
8. **Test responsive behavior** at all breakpoints

## Examples

### Creating a Card

```css
.my-card {
  background: var(--bg-card);
  border: 1px solid var(--border-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-md);
  transition: var(--transition-all);
  backdrop-filter: blur(10px);
}

.my-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--border-active);
  transform: translateY(-8px);
  box-shadow: var(--shadow-xl);
}
```

### Creating a Button

```css
.my-button {
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--accent);
  color: var(--bg-primary);
  border: 2px solid var(--accent);
  border-radius: var(--radius-md);
  font-weight: var(--font-semibold);
  transition: var(--transition-all);
}

.my-button:hover {
  background: transparent;
  color: var(--accent);
  box-shadow: var(--shadow-glow);
}
```

### Using Scroll Animation

```jsx
import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const MySection = () => {
  const ref = useScrollAnimation();

  return (
    <section id="my-section" ref={ref} className="fade-in">
      <h2>Animated Section</h2>
      <p>This section fades in on scroll</p>
    </section>
  );
};
```

## Maintenance

When updating the design system:

1. Update `src/styles/variables.css` for new variables
2. Update `src/styles/animations.css` for new animations
3. Update `src/styles/utilities.css` for new utility classes
4. Update this documentation
5. Test changes across all components
6. Ensure backward compatibility

## Support

For questions or suggestions about the design system, please open an issue on GitHub.
