# TASKS.md

# Dental Clinic Website - Development Roadmap

## Project Goal

Develop a premium, bilingual (English & Marathi), responsive dental clinic website using React, TypeScript, Vite, Tailwind CSS, and Framer Motion. The project should follow the requirements defined in `PRD.md` and be production-ready for deployment on Vercel.

---

# Development Rules

## General Rules

* [ ] Read `PRD.md` completely before writing code.
* [ ] Build the project phase by phase.
* [ ] Verify the application builds successfully after every phase.
* [ ] Do not move to the next phase until the current phase is complete.
* [ ] Use reusable React components.
* [ ] Use TypeScript for all components.
* [ ] Keep code modular and maintainable.
* [ ] Avoid duplicate code.
* [ ] Avoid inline styles unless absolutely necessary.
* [ ] Follow accessibility and SEO best practices.

---

# Phase 1 – Project Initialization

## Tasks

* [ ] Create React + Vite + TypeScript project.
* [ ] Configure Tailwind CSS.
* [ ] Install required dependencies.
* [ ] Configure ESLint and Prettier.
* [ ] Configure React Router.
* [ ] Configure Framer Motion.
* [ ] Create project folder structure.
* [ ] Create global layout.
* [ ] Verify project runs without errors.

### Validation

* [ ] Development server starts successfully.
* [ ] No TypeScript errors.
* [ ] No ESLint warnings.

### Git Commit

```bash
git commit -m "Initialize project"
```

---

# Phase 2 – Project Structure

## Create folders

* [ ] assets
* [ ] components
* [ ] pages
* [ ] hooks
* [ ] layouts
* [ ] utils
* [ ] config
* [ ] translations
* [ ] styles

## Configuration

* [ ] Create `clinicConfig.ts`
* [ ] Create `en.json`
* [ ] Create `mr.json`

### Validation

* [ ] Folder structure is clean.
* [ ] No unused files.
* [ ] Configuration loads correctly.

### Git Commit

```bash
git commit -m "Create project structure"
```

---

# Phase 3 – Navigation & Layout

## Build

* [ ] Responsive Navbar
* [ ] Sticky Header
* [ ] Mobile Navigation
* [ ] Footer
* [ ] Scroll-to-Top Button
* [ ] Floating Call Button
* [ ] Floating WhatsApp Button
* [ ] Language Switcher

### Validation

* [ ] Desktop navigation works.
* [ ] Mobile navigation works.
* [ ] Language switch updates all text.

### Git Commit

```bash
git commit -m "Create navigation layout"
```

---

# Phase 4 – Home Page

## Hero Section

* [ ] Build hero using the client's reference image as inspiration.
* [ ] Add headline.
* [ ] Add supporting description.
* [ ] Add Book Appointment CTA.
* [ ] Add Call Now CTA.

## Additional Sections

* [ ] Statistics
* [ ] Why Choose Us
* [ ] Services Preview
* [ ] Appointment CTA

### Validation

* [ ] Hero is responsive.
* [ ] Animations are smooth.
* [ ] Buttons function correctly.

### Git Commit

```bash
git commit -m "Build home page"
```

---

# Phase 5 – About Doctor

## Tasks

* [ ] Doctor Profile
* [ ] Qualification
* [ ] Experience
* [ ] Mission
* [ ] Responsive Layout

### Validation

* [ ] Proper spacing.
* [ ] Mobile responsive.
* [ ] Animations work correctly.

### Git Commit

```bash
git commit -m "Build about page"
```

---

# Phase 6 – Services

## Tasks

* [ ] Service Cards
* [ ] Icons
* [ ] Descriptions
* [ ] Learn More Button
* [ ] Reusable Components

### Validation

* [ ] Cards responsive.
* [ ] Hover animations work.
* [ ] Consistent spacing.

### Git Commit

```bash
git commit -m "Build services section"
```

---

# Phase 7 – FAQ

## Tasks

* [ ] Accordion
* [ ] Smooth animations
* [ ] Bilingual content

### Validation

* [ ] Accordion functions correctly.
* [ ] Mobile responsive.

### Git Commit

```bash
git commit -m "Build FAQ"
```

---

# Phase 8 – Contact Page

## Display

* [ ] Clinic Address
* [ ] Phone Number
* [ ] WhatsApp Number
* [ ] Email
* [ ] Working Hours

## Contact Form

* [ ] Name
* [ ] Phone
* [ ] Email
* [ ] Subject
* [ ] Message

## Buttons

### Call Button

* [ ] Opens device dialer using `tel:` link.

### WhatsApp Button

* [ ] Opens WhatsApp using `https://wa.me/<number>`.
* [ ] Includes a pre-filled appointment message.

### Validation

* [ ] Contact form validates correctly.
* [ ] WhatsApp opens successfully.
* [ ] Call button works.

### Git Commit

```bash
git commit -m "Build contact page"
```

---

# Phase 9 – Animations

## Apply

* [ ] Hero Fade
* [ ] Section Reveal
* [ ] Button Hover
* [ ] Card Hover
* [ ] Counter Animation
* [ ] Smooth Scroll
* [ ] Page Transition
* [ ] FAQ Animation

### Validation

* [ ] Animations are smooth.
* [ ] No layout shifts.

### Git Commit

```bash
git commit -m "Add animations"
```

---

# Phase 10 – Bilingual Support

## Tasks

* [ ] Implement English translations.
* [ ] Implement Marathi translations.
* [ ] Language switch without page reload.
* [ ] Verify all UI text is translatable.

### Validation

* [ ] No hardcoded strings remain.
* [ ] Language switch updates every page.

### Git Commit

```bash
git commit -m "Implement bilingual support"
```

---

# Phase 11 – Responsive Testing

## Test

* [ ] Desktop
* [ ] Laptop
* [ ] Tablet
* [ ] Mobile
* [ ] Small Mobile

### Fix

* [ ] Overflow
* [ ] Typography
* [ ] Images
* [ ] Buttons
* [ ] Navigation

### Git Commit

```bash
git commit -m "Improve responsiveness"
```

---

# Phase 12 – SEO

## Tasks

* [ ] Meta Title
* [ ] Meta Description
* [ ] Open Graph
* [ ] robots.txt
* [ ] sitemap.xml
* [ ] Semantic HTML
* [ ] Image Alt Text

### Validation

* [ ] SEO tags present.
* [ ] Lighthouse SEO ≥95.

### Git Commit

```bash
git commit -m "Optimize SEO"
```

---

# Phase 13 – Performance Optimization

## Tasks

* [ ] Lazy Loading
* [ ] Image Optimization
* [ ] Code Splitting
* [ ] Tree Shaking
* [ ] Remove unused assets

### Validation

Target Lighthouse Scores:

* [ ] Performance ≥95
* [ ] Accessibility ≥95
* [ ] Best Practices ≥95
* [ ] SEO ≥95

### Git Commit

```bash
git commit -m "Optimize performance"
```

---

# Phase 14 – Final Testing

## Verify

* [ ] No TypeScript errors
* [ ] No ESLint warnings
* [ ] No console errors
* [ ] Forms work
* [ ] Navigation works
* [ ] Contact buttons work
* [ ] WhatsApp integration works
* [ ] Language switch works
* [ ] Responsive on all devices

---

# Phase 15 – Deployment

## Tasks

* [ ] Production Build
* [ ] Deploy to Vercel
* [ ] Verify live website
* [ ] Test all pages
* [ ] Test forms
* [ ] Test contact actions

### Git Commit

```bash
git commit -m "Deploy production website"
```

---

# Project Completion Checklist

* [ ] UI matches PRD.
* [ ] Fully responsive.
* [ ] English & Marathi supported.
* [ ] Contact buttons operational.
* [ ] WhatsApp opens with pre-filled message.
* [ ] SEO complete.
* [ ] Performance optimized.
* [ ] Lighthouse scores meet targets.
* [ ] No build errors.
* [ ] Code is clean and reusable.
* [ ] Ready for client presentation.
