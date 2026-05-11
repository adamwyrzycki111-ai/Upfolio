# Upfolio AI - Specification Document

## 1. Project Overview

**Project Name:** Upfolio AI  
**Project Type:** SaaS Web Application (React + Python/Flask)  
**Core Functionality:** An AI-powered portfolio generation tool for Upwork freelancers that analyzes job postings, finds similar products, extracts features, generates portfolio descriptions, and creates professional PDF portfolios.  
**Target Users:** Upwork freelancers seeking to create professional portfolios tailored to specific job opportunities.

---

## 2. Technology Stack

- **Frontend:** React 18 with Vite, React Router, Framer Motion
- **Backend:** Python Flask with OpenAI API
- **PDF Generation:** jsPDF (client-side)
- **HTTP Client:** Axios
- **Styling:** CSS Modules with custom properties
- **Icons:** Lucide React

---

## 3. UI/UX Specification

### 3.1 Layout Structure

**Page Sections:**
- Fixed Navigation Bar (height: 64px)
- Hero/Input Section (min-height: 60vh)
- Results Dashboard (auto height, scrollable)
- Footer (height: 80px, sticky bottom when content allows)

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### 3.2 Visual Design

**Color Palette:**
- Primary: `#0D0D0D` (Rich Black)
- Secondary: `#1A1A2E` (Deep Navy)
- Accent: `#E94560` (Vibrant Coral)
- Accent Alt: `#16213E` (Dark Blue)
- Surface: `#0F0F1A` (Near Black)
- Surface Light: `#1F1F35` (Muted Purple-Gray)
- Text Primary: `#FFFFFF`
- Text Secondary: `#A0A0B0`
- Success: `#00D9A5`
- Warning: `#FFB800`
- Error: `#FF4757`

**Typography:**
- Headings: "Clash Display", sans-serif (from CDN)
- Body: "Satoshi", sans-serif (from CDN)
- Monospace: "JetBrains Mono", monospace
- H1: 56px / 700 weight
- H2: 42px / 600 weight
- H3: 28px / 600 weight
- Body: 16px / 400 weight
- Small: 14px / 400 weight

**Spacing System:**
- Base unit: 8px
- XS: 4px, SM: 8px, MD: 16px, LG: 24px, XL: 32px, XXL: 48px, XXXL: 64px

**Visual Effects:**
- Card shadows: `0 8px 32px rgba(233, 69, 96, 0.15)`
- Hover shadows: `0 16px 48px rgba(233, 69, 96, 0.25)`
- Glass effect: `backdrop-filter: blur(12px); background: rgba(15, 15, 26, 0.8)`
- Border radius: 12px (cards), 8px (buttons), 24px (large elements)
- Gradients: Linear gradient from `#E94560` to `#FF6B6B`

### 3.3 Components

**Navigation Bar:**
- Logo (left): "Upfolio" with accent-colored "AI" badge
- Nav links (center): Home, How It Works, Features, Pricing
- CTA button (right): "Get Started" with gradient background
- Glass effect background on scroll
- State: transparent → glass on scroll

**Hero Section:**
- Large headline with gradient text accent
- Subheadline with typewriter effect
- Job posting input textarea (large, prominent)
- "Analyze Job" button with pulse animation
- Animated background grid pattern
- Floating preview cards animation

**Input Form:**
- Textarea for pasting job posting (min-height: 200px)
- Character counter
- Sample job link input field
- Job title input field
- Required skills tags (multi-select or auto-detected)
- Submit button with loading state

**Results Dashboard:**
- Progress indicator (step-by-step)
- Job Analysis Card (understanding display)
- Similar Products Grid (cards with screenshots)
- Features Extracted List
- Generated Portfolio Preview
- Editable text areas
- Export/Download buttons

**Similar Product Card:**
- Screenshot thumbnail
- Product name
- URL link
- Feature tags
- Similarity score badge
- Click to expand modal

**Portfolio Preview Card:**
- Project title (editable)
- Description (editable, rich text)
- Technologies used (tags)
- Duration/cost
- Result metrics

**PDF Export Panel:**
- Company logo/branding option
- Color theme selection
- Font selection
- Include sections checkboxes
- Preview thumbnail
- Generate PDF button

**Footer:**
- Logo, copyright
- Quick links
- Social icons
- Newsletter signup (optional)

### 3.4 Animations

- Page load: Staggered fade-in (100ms delay between elements)
- Button hover: Scale 1.02, shadow increase
- Card hover: Translate Y -4px, shadow increase
- Input focus: Border glow animation
- Results appear: Slide up + fade in
- Progress steps: Sequential fill animation
- Modal: Scale + fade in/out

---

## 4. Functionality Specification

### 4.1 Core Features

**1. Job Posting Input**
- Paste full job posting text
- Optional: Provide URL to job posting
- Auto-detect job title and requirements
- Extract required skills using AI

**2. Job Analysis**
- Understand job requirements
- Identify key deliverables
- Determine technical stack needs
- Extract success criteria
- Estimate timeline/scope

**3. Similar Products Search**
- Search the web for similar SaaS/products
- Filter by industry/category
- Extract feature comparisons
- Take/screenshots of relevant pages

**4. Feature Extraction**
- Identify shared features between products
- Categorize features (must-have, nice-to-have)
- Map features to job requirements
- Generate feature matrix

**5. Portfolio Generation**
- Generate experience descriptions
- Match job requirements to past work
- Create compelling narratives
- Highlight relevant metrics

**6. PDF Portfolio Creation**
- Professional PDF layout
- Customizable branding
- Multiple template options
- Include screenshots
- Exportable format

**7. Edit & Export**
- Edit all generated content
- Export as PDF
- Export as Markdown
- Copy to clipboard

### 4.2 User Interactions

- Paste/type job description
- Click "Analyze" to start processing
- View progress steps
- Click through results
- Edit generated content
- Export/download PDF

### 4.3 Data Handling

- Frontend sends job text to backend API
- Backend processes with OpenAI
- Backend returns analysis + search results
- Frontend displays and allows editing
- Client-side PDF generation

### 4.4 Edge Cases

- Empty job description: Show validation error
- Very long job text: Truncate with warning
- API failure: Show error with retry option
- No similar products found: Show manual search option
- Network offline: Show offline indicator

---

## 5. API Specification

### 5.1 Backend Endpoints

**POST /api/analyze**
- Input: `{ job_text: string, job_url?: string }`
- Output: `{ analysis: {...}, products: [...], features: [...], portfolio: {...} }`

**POST /api/search-products**
- Input: `{ query: string, industry?: string }`
- Output: `{ products: [...] }`

**POST /api/generate-portfolio**
- Input: `{ job_analysis: {...}, products: [...] }`
- Output: `{ portfolio: {...} }`

**GET /api/health**
- Output: `{ status: "ok" }`

---

## 6. Acceptance Criteria

1. ✅ User can paste a job posting and click "Analyze"
2. ✅ Application shows progress through analysis steps
3. ✅ Job requirements are displayed after analysis
4. ✅ Similar products are shown with thumbnails
5. ✅ Features are extracted and categorized
6. ✅ Portfolio descriptions are generated
7. ✅ User can edit all generated content
8. ✅ User can download PDF portfolio
9. ✅ Responsive design works on mobile/tablet/desktop
10. ✅ All animations are smooth and performant

---

## 7. File Structure

```
/workspace/project/Upfolio/
├── SPEC.md
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── routes/
│       └── api.py
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── src/
│   │   ├── main.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── JobInput.jsx
│   │   │   ├── Results.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   ├── PortfolioPreview.jsx
│   │   │   ├── PDFGenerator.jsx
│   │   │   └── Footer.jsx
│   │   └── styles/
│   │       ├── navbar.css
│   │       ├── hero.css
│   │       ├── jobinput.css
│   │       ├── results.css
│   │       └── footer.css
│   └── public/
└── README.md
```