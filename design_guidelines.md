# Design Guidelines: Shade Express Website

## Design Approach
**Reference-Based Design** inspired by modern B2B industrial/manufacturing sites with sophisticated product showcases. Drawing from Trilho Suisso's refined aesthetic: clean layouts, premium materials feel, professional photography emphasis, strategic use of white space.

## Typography Hierarchy

**Font Stack:**
- Primary: 'Inter' or 'Manrope' (Google Fonts) - modern, professional sans-serif for body and UI
- Accent: 'Playfair Display' or 'Crimson Pro' - elegant serif for hero headlines only

**Scale:**
- H1 Hero: text-5xl md:text-6xl lg:text-7xl, font-bold
- H1 Page: text-4xl md:text-5xl, font-bold  
- H2 Sections: text-3xl md:text-4xl, font-semibold
- H3 Cards: text-xl md:text-2xl, font-semibold
- Body Large: text-lg, font-normal
- Body: text-base, leading-relaxed
- Small: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 md:py-24 lg:py-32
- Container max-width: max-w-7xl
- Card spacing: gap-8 md:gap-12
- Component internal: p-6 md:p-8

**Grid Strategy:**
- Product categories: 2-column on md:, 3-column on lg:
- Features/differentials: 2-column md:, 4-column lg:
- Blog cards: 1-column base, 3-column lg:

## Core Components

**Navigation:**
- Fixed header with blur backdrop
- Logo left, horizontal menu center, dual CTAs right (Catalog + Become Reseller)
- Mobile: hamburger menu, full-screen overlay

**Hero Section (Home):**
- Full-width with large background product photography (curtains in elegant interior)
- Left-aligned content with max-w-2xl
- Oversized H1 with accent font
- Dual CTA buttons stacked on mobile, inline on desktop
- Height: min-h-[600px] md:min-h-[700px]

**Product Cards:**
- Vertical layout with large image (aspect-ratio-[4/5])
- Product name, brief description, key features list
- Hover: subtle scale transform, image brightness increase
- CTA button at bottom

**Section Containers:**
- Alternating background: white and subtle gray (bg-gray-50)
- Full-width sections with centered max-w-7xl containers
- Text-centered headers with max-w-3xl for readability

**Forms (Reseller Registration):**
- Multi-step visual progress indicator
- Single column, generous spacing (space-y-6)
- Large input fields (h-12) with clear labels above
- Primary CTA button full-width on mobile

**Footer:**
- 4-column grid on desktop (Products, Company, Resources, Contact)
- Newsletter signup section above main footer
- Social icons, contact info, copyright bar at bottom

## Component Details

**Buttons:**
- Primary: Large (px-8 py-4), rounded-lg, font-semibold
- When on images: backdrop-blur-sm with semi-transparent background
- Secondary: Outline style with hover fill
- Icon buttons: Rounded-full for social links

**Cards:**
- Rounded-xl borders
- Subtle shadow (shadow-sm) with hover shadow-lg transition
- Padding: p-6 md:p-8
- White background with clean edges

**Image Treatment:**
- Product photos: Sharp, professional studio lighting
- Lifestyle images: Aspirational interior scenes
- All images: rounded-lg, object-cover
- Lazy loading for performance

**Icons:**
- Heroicons via CDN for UI elements
- Size: w-6 h-6 for inline, w-12 h-12 for feature highlights

## Page-Specific Layouts

**Home:** 7-8 sections including hero, about, categories (3-col grid), differentials (4-col), reseller CTA, blog preview (3-col), footer

**Company:** Hero with company photo, mission/vision/values in 3-card layout, target audience grid, differentials section

**Products:** Category filters horizontal scroll, product grid with filtering, individual product pages with large image gallery + specs table

**Catalog:** Centered content, large preview image of catalog cover, download form with lead capture

**Resellers:** Benefits grid (2-col), step-by-step visual process (horizontal timeline), registration form

## Images

**Required Photography:**
- Home Hero: Wide interior shot featuring elegant curtains/blinds, natural lighting (1920x1000px min)
- Product Categories: Individual product shots on white background for each category
- Company Page: Office/factory photo showing professionalism
- Lifestyle Images: 3-4 installed product photos in residential/commercial settings
- Team/Trust: Optional professional team photo for about section

**Placement Strategy:**
- Large hero images on Home, Company, Products pages
- Product grid: square crops, consistent styling
- Section backgrounds: Subtle texture overlays where appropriate

## Animation Approach
Minimal, purposeful motion only:
- Smooth scroll behavior
- Card hover: transform scale(1.02) with shadow transition
- Button hover: subtle brightness shift
- Section fade-in on scroll (intersection observer)
- No distracting parallax or complex animations