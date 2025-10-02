# Design Guidelines: Ian Axel Rodríguez Santoyo - Graphic Design Portfolio

## Design Approach

**Selected Approach:** Reference-Based with Professional Healthcare Context

Drawing inspiration from modern portfolio platforms (Behance, Dribbble) while maintaining the professionalism required for healthcare industry. The design balances creative expression with trustworthiness, using clean layouts and strategic color to showcase design work without overwhelming the viewer.

**Key Design Principles:**
- Visual hierarchy that prioritizes portfolio work
- Clean, spacious layouts that let design pieces breathe
- Professional aesthetic appropriate for healthcare sector
- Easy content management through structured data

## Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 12% (rich dark base)
- Surface: 222 15% 16% (elevated elements)
- Primary: 200 95% 55% (professional blue - trust/healthcare)
- Text Primary: 0 0% 95%
- Text Secondary: 0 0% 70%
- Accent (sparingly): 160 85% 45% (teal - creativity/innovation)
- Border: 222 15% 24%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 200 85% 45%
- Text Primary: 222 20% 15%
- Text Secondary: 222 15% 45%
- Accent: 160 75% 40%
- Border: 0 0% 88%

## Typography

**Font Stack:**
- Headings: Inter (Google Fonts) - 600/700 weights
- Body: Inter - 400/500 weights
- Display/Hero: Inter - 800 weight

**Hierarchy:**
- Hero Title: text-5xl md:text-6xl lg:text-7xl font-bold
- Section Headings: text-3xl md:text-4xl font-semibold
- Project Titles: text-xl md:text-2xl font-semibold
- Body Text: text-base md:text-lg
- Small Text/Captions: text-sm

## Layout System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component padding: p-6 to p-8
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6
- Grid gaps: gap-6 md:gap-8 lg:gap-12

**Grid System:**
- Project Gallery: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Skills/Tools: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
- Featured Work: grid-cols-1 lg:grid-cols-2

## Component Library

### Hero Section
- Full-width hero with gradient overlay
- Large hero image showcasing featured design work (mockup/composite)
- Centered content: Name, title, brief tagline
- CTA buttons: "Ver Portfolio" (primary), "Descargar CV" (outline with blur backdrop)
- Height: min-h-[85vh]

### Navigation
- Fixed top navigation with backdrop blur
- Logo/Name (left), Nav links (center), Contact CTA (right)
- Mobile: Hamburger menu
- Smooth scroll to sections

### Portfolio Gallery
- Masonry/Grid layout for project cards
- Cards with hover effects: subtle scale + shadow enhancement
- Image thumbnail, project title, category tag
- Click to expand/modal view
- Filter by category: "Diseño Digital", "Diseño Impreso", "Branding", "Redes Sociales"

### Project Detail Cards
- Large image display (lightbox capability)
- Project metadata: Title, category, date, tools used
- Description text (2-3 sentences)
- Skills/tools tags with icons
- Structured data format for easy editing

### Skills Section
- Icon grid layout showing Adobe Suite tools
- Tool cards: Icon + Name + Proficiency indicator
- Categories: Design Tools, Development, Video Editing

### Experience Timeline
- Vertical timeline layout
- Agency experience highlighted
- Key responsibilities and achievements

### Contact Section
- Two-column layout: Contact form + Info
- Form fields: Name, Email, Message
- Contact details: Email, phone, location
- Social links: LinkedIn, GitHub, portfolio platforms

### Footer
- Multi-column: Quick links, Social media, Copyright
- Newsletter signup (optional)
- Back to top button

## Images

**Hero Image:** 
Large hero background image showing a composite/mockup of Ian's design work (multiple pieces artfully arranged). Should convey creativity and professionalism. Gradient overlay for text readability.

**Portfolio Gallery Images:**
High-quality images of each design piece:
- Flyers and promotional materials
- Logo designs
- Banners and lonas
- Business cards
- Vinyl designs
- Social media graphics
Each image should be well-lit, professionally photographed/scanned, minimum 1200px width

**Profile Image:**
Professional headshot or illustration for About section

**Background Elements:**
Subtle geometric patterns or grid overlays in sections to add visual interest without distraction

## Data Structure (Easy Modification)

```javascript
// Portfolio projects array structure
const projects = [
  {
    id: 1,
    title: "Campaign Flyer - Health Services",
    category: "Diseño Impreso",
    date: "2024",
    image: "/images/project1.jpg",
    description: "Diseño de flyer promocional...",
    tools: ["Photoshop", "Illustrator"]
  }
  // More projects...
]
```

## Animations

**Minimal, purposeful animations:**
- Smooth scroll behavior
- Card hover transforms (scale 1.02, duration 300ms)
- Fade-in on scroll for sections (intersection observer)
- Button hover states (built-in)
- Modal/lightbox transitions

## Professional Healthcare Considerations

- Avoid overly aggressive colors (no bright reds/intense purples)
- Maintain clean, organized layouts
- Use whitespace generously
- Professional photography/imagery
- Clear, readable typography
- Trustworthy color scheme (blues/teals)
- Organized, structured presentation

## Responsive Behavior

- Mobile-first approach
- Single column on mobile, multi-column on desktop
- Touch-friendly buttons (min 44x44px)
- Readable text sizes across devices
- Optimized image loading

This design creates a professional yet creative portfolio that showcases Ian's graphic design expertise while maintaining the trustworthy aesthetic appropriate for the healthcare industry position.