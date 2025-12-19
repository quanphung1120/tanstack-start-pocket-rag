# Design Aesthetic Rule: Organic Glassmorphism

This document formalizes the "Premium Organic Glassmorphism" style established for the Pocket RAG platform.

## Core Visual Principles

1. **Background Art over Icons**: Prioritize abstract, organic gradient backgrounds over traditional icons in feature blocks. This creates a more sophisticated, "intelligent" atmosphere.
2. **Organic Flow**: Avoid rigid geometric shapes. Background art should feature soft, flowing, "liquid" shapes that imply depth and complexity.
3. **Glassmorphism Layers**:
   - **Base (Dark Mode)**: `bg-muted/30` with `backdrop-blur-sm`.
   - **Base (Light Mode)**: `bg-muted/80` (higher opacity) with `backdrop-blur-none` for maximum clarity and less "smudge".
   - **Border**: Subtle `border-white/5` or `border-border/50`.
   - **Depth**: Use OKLCH-based shadows for a modern, tactile feel (e.g., `shadow-[8px_8px_0px_0px_oklch(var(--primary)/0.1)]`).

## Component Implementation Guidelines

- **Feature Cards**:
  - Always includes an absolute-positioned background image with `object-cover`.
  - **Opacity**: `opacity-20` default, `opacity-40` on hover.
  - **Transition**: `transition-opacity duration-500`.
  - **Text Safety Overlay**:
    - **Light Mode**: `from-background/80 via-background/20 to-transparent`.
    - **Dark Mode**: `from-background/90 via-background/40 to-transparent`.
    - This ensure high accessibility and contrast while keeping images sharp.
- **Typography**:
  - **Headings**: Use `font-heading`, `font-black`, `tracking-tighter`, and `uppercase` for a bold, technical look.
  - **Content**: Use `font-body` with `text-muted-foreground` for readability.

## Color Palette Strategy

- Use curated gradients that represent the "mood" of the feature:
  - **Semantic/Intelligence**: Deep Blues, Purples, Indigos.
  - **Performance/Speed**: Energetic Oranges, Yellows, Warm Reds.
  - **Privacy/Security**: Soft Teals, Emeralds, Purples.
- **Consistency**: All images must follow the same "organic glass" render style (glassmorphism/3D depth).
