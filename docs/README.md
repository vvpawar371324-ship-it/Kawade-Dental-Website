# README.md

# Dental Clinic Website

A modern, bilingual (English & Marathi), responsive dental clinic website built with **React**, **TypeScript**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

This project is designed to provide a premium digital presence for a dental clinic, making it easy for patients to learn about services, contact the clinic, and book appointments.

The website emphasizes clean design, accessibility, SEO, responsiveness, and smooth animations while remaining lightweight and easy to maintain.

---

# Project Objectives

* Build trust with new patients.
* Increase appointment inquiries.
* Present the clinic professionally.
* Support English and Marathi.
* Provide excellent mobile experience.
* Deliver production-ready performance.

---

# Technology Stack

## Frontend

* React 19+
* TypeScript
* Vite
* React Router

## Styling

* Tailwind CSS
* CSS Variables

## Animation

* Framer Motion

## Forms

* React Hook Form
* EmailJS (or Formspree)

## Icons

* Lucide React

## Deployment

* Vercel

---

# Project Structure

```text
dental-clinic/

│
├── docs/
│   ├── PRD.md
│   ├── TASKS.md
│   └── README.md
│
├── public/
│
├── src/
│   ├── assets/
│   ├── components/
│   ├── config/
│   │      clinicConfig.ts
│   ├── hooks/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── translations/
│   │      en.json
│   │      mr.json
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
│
├── package.json
└── vite.config.ts
```

---

# Required Pages

* Home
* About Doctor
* Services
* FAQ
* Contact

---

# Website Features

* Responsive Design
* Bilingual Support
* Smooth Animations
* SEO Optimization
* WhatsApp Integration
* Click-to-Call Support
* Contact Form
* Mobile Navigation
* Accessible UI
* Optimized Performance

---

# Bilingual Support

The website must support:

* English
* Marathi

Language switching must:

* Work instantly.
* Not reload the page.
* Translate all visible interface text.
* Translate navigation, buttons, forms, FAQs, and page content.

Translation files are stored in:

```text
src/translations/
```

Files:

```text
en.json
mr.json
```

---

# Clinic Configuration

All editable clinic information must be stored in a single configuration file.

Location:

```text
src/config/clinicConfig.ts
```

Example:

```ts
export const clinicConfig = {
  clinicName: "",
  doctorName: "",
  phone: "",
  whatsapp: "",
  email: "",
  address: "",
  workingHours: "",
  facebook: "",
  instagram: ""
}
```

Changing clinic details should never require editing multiple files.

---

# WhatsApp Configuration

The WhatsApp button must use the configured clinic number.

Format:

```text
https://wa.me/<countrycode><number>
```

Example:

```text
https://wa.me/919876543210
```

Include a pre-filled message:

```text
Hello Doctor,
I would like to book an appointment.
```

The floating WhatsApp button and Contact page button should both use this configuration.

---

# Click-to-Call Configuration

The Call button should open the user's phone dialer.

Example:

```text
tel:+919876543210
```

Use the phone number from `clinicConfig.ts`.

---

# Contact Form

Fields:

* Name
* Phone Number
* Email
* Subject
* Message

Requirements:

* Client-side validation.
* Success notification.
* Reset form after submission.
* No backend required.
* Use EmailJS or Formspree.

---

# Hero Section

The client will provide a reference image.

Requirements:

* Use the image only as inspiration.
* Do not copy the layout exactly.
* Create a premium healthcare-inspired hero section.
* Include headline, description, and clear call-to-action buttons.

---

# Animations

Use Framer Motion.

Required animations:

* Hero Fade In
* Section Reveal
* Card Hover
* Button Hover
* Number Counter
* Accordion Animation
* Smooth Scroll
* Page Transition
* Floating Elements

Animations should be subtle, smooth, and performant.

---

# Design Guidelines

Theme:

* Modern
* Clean
* Professional
* Minimal
* Healthcare Inspired

Primary Color:

Medical Blue

Secondary:

White

Accent:

Sky Blue

Success:

Green

Avoid dark mode for Version 1.

---

# Accessibility

The website must:

* Use semantic HTML.
* Include ARIA labels where needed.
* Support keyboard navigation.
* Include alt text for images.
* Maintain sufficient color contrast.

---

# SEO Requirements

Implement:

* Meta Titles
* Meta Descriptions
* robots.txt
* sitemap.xml
* Open Graph Tags
* Semantic HTML
* Image Alt Text
* Structured Data
* Local SEO readiness

---

# Performance Targets

Target Lighthouse Scores:

* Performance ≥95
* Accessibility ≥95
* Best Practices ≥95
* SEO ≥95

Optimize:

* Images
* Bundle Size
* Lazy Loading
* Code Splitting

---

# Development Workflow

The implementation order is defined in:

```text
docs/TASKS.md
```

Developers and AI agents must:

1. Read `PRD.md`.
2. Follow `TASKS.md`.
3. Complete one phase at a time.
4. Verify the build after every phase.
5. Commit changes after each completed phase.

---

# Installation

Clone the repository:

```bash
git clone <repository-url>
```

Install dependencies:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Create production build:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Deployment

Deploy to Vercel.

Requirements before deployment:

* Production build succeeds.
* No TypeScript errors.
* No ESLint warnings.
* Responsive on all devices.
* Contact actions verified.
* Language switching verified.

---

# Testing Checklist

Before deployment, verify:

* Home Page
* About Page
* Services
* FAQ
* Contact Form
* Call Button
* WhatsApp Button
* Responsive Layout
* Language Switch
* Animations
* SEO Metadata
* Accessibility

---

# AI Agent Instructions

Before writing code:

1. Read `docs/PRD.md`.
2. Read `docs/TASKS.md`.
3. Follow all documented requirements.
4. Build incrementally.
5. Do not skip phases.
6. Reuse components whenever possible.
7. Avoid duplicated logic.
8. Ensure every page matches the design language.
9. Verify compilation after each milestone.
10. Do not proceed if the current phase has build errors.

---

# Future Enhancements

* Patient Testimonials
* Photo Gallery
* Google Maps
* Blog
* Admin Dashboard
* Appointment Management
* Online Consultation
* AI Chatbot
* Patient Login
* Online Payments
* Multi-language Expansion

---

# Contributor Guidelines

* Follow the PRD.
* Follow the task checklist.
* Keep components reusable.
* Write clean TypeScript.
* Maintain responsive layouts.
* Test before committing.
* Keep documentation updated.

---

# Final Acceptance Criteria

The project is complete only when:

* All requirements in `PRD.md` are satisfied.
* Every task in `TASKS.md` is completed.
* The website is fully responsive.
* English and Marathi work correctly.
* Contact and WhatsApp integration function correctly.
* Lighthouse targets are met.
* The application builds successfully without errors.
* The project is ready for client presentation and deployment.
