# Additional Development Guidelines (Append to PRD)

## Development Workflow (Mandatory)

The project must be developed in small, verifiable milestones. After completing each milestone, ensure the project builds successfully with no TypeScript, ESLint, or runtime errors before proceeding.

Each milestone should be committed independently to maintain a clean development history.

---

# Phase 1 — Project Initialization

* Create the React + Vite + TypeScript project.
* Configure Tailwind CSS.
* Install all required dependencies.
* Configure ESLint and Prettier.
* Create the project folder structure.
* Configure React Router.
* Configure bilingual support (English and Marathi).
* Verify the project starts successfully.

Deliverable:

* Running development server with the base layout.

---

# Phase 2 — Global Layout

Develop the reusable layout components:

* Header
* Navigation Bar
* Footer
* Floating Action Buttons
* Language Switcher
* Scroll-to-Top Button

Verify responsiveness on desktop, tablet, and mobile.

---

# Phase 3 — Home Page UI

Create the Home page using the client-provided reference image as inspiration.

Requirements:

* Premium hero section
* Professional typography
* Responsive layout
* Smooth entrance animations
* Call-to-Action buttons
* Statistics section
* Why Choose Us section
* Services Preview
* Appointment CTA

The generated design must not directly copy the reference image.

---

# Phase 4 — About Doctor

Develop the complete About section including:

* Doctor profile
* Qualifications
* Experience
* Mission
* Professional layout
* Responsive design
* Scroll animations

---

# Phase 5 — Services

Develop all treatment cards.

Each service should contain:

* Icon
* Title
* Description
* Learn More Button
* Hover Animation

Create reusable service card components.

---

# Phase 6 — FAQ

Develop:

* Accordion Component
* Smooth open/close animations
* Fully bilingual content
* Responsive layout

---

# Phase 7 — Contact Page

Develop a professional contact section.

Display:

* Clinic Address
* Contact Number
* WhatsApp Number
* Email Address
* Working Hours

Provide three primary contact actions:

### Call Now

Clicking this button should immediately open the user's phone dialer using the clinic's active phone number.

Example:

tel:+91XXXXXXXXXX

---

### WhatsApp

Clicking the WhatsApp button should immediately open a WhatsApp conversation with the clinic's active business number.

Use the following format:

https://wa.me/91XXXXXXXXXX

Include a pre-filled message:

Hello Doctor,
I would like to book an appointment.

The clinic owner should only need to replace the phone number in one configuration file to activate WhatsApp for their clinic.

---

### Contact Form

Fields:

* Name
* Phone Number
* Email
* Subject
* Message

The form should support EmailJS (or Formspree) without requiring a backend.

After successful submission:

* Display a success notification.
* Reset the form.
* Handle validation gracefully.

---

# Phase 8 — Animation Enhancement

Apply premium animations using Framer Motion.

Animations should include:

* Hero Fade
* Slide Up
* Fade In
* Card Hover
* Button Hover
* Section Reveal
* Number Counter
* Navigation Highlight
* Smooth Scroll
* Page Transition

Animations must remain smooth on low-end devices.

---

# Phase 9 — Responsive Optimization

Verify layouts for:

* Mobile
* Tablet
* Laptop
* Desktop

Fix:

* Overflow
* Typography scaling
* Button alignment
* Card spacing
* Navigation behavior

---

# Phase 10 — Performance Optimization

Optimize:

* Images
* Lazy Loading
* Bundle Size
* Component Re-rendering
* Lighthouse Performance

Target:

* Performance ≥95
* Accessibility ≥95
* SEO ≥95
* Best Practices ≥95

---

# Configuration Requirements

All editable clinic information must be stored in a single configuration file.

Example fields:

* Clinic Name
* Doctor Name
* Phone Number
* WhatsApp Number
* Email Address
* Address
* Working Hours
* Social Media Links

The client should be able to update contact details without modifying multiple files.

---

# Error Prevention

The AI must:

* Build incrementally.
* Verify compilation after each milestone.
* Avoid duplicate components.
* Avoid duplicate CSS.
* Avoid unused files.
* Maintain reusable architecture.
* Keep all UI components modular.

---

# Final Deliverables

The completed project must include:

* Fully Responsive Website
* Professional UI
* English & Marathi Language Support
* Modern Healthcare Design
* Reusable Components
* Smooth Animations
* Contact Form
* Click-to-Call Integration
* Click-to-WhatsApp Integration
* SEO Optimization
* Clean Code Structure
* Deployment on Vercel
* GitHub Repository

---

# Acceptance Criteria

The project is considered complete only if:

* The website matches the approved design direction.
* All pages are fully responsive.
* Language switching works without page reloads.
* Navigation functions correctly.
* Contact buttons perform the correct actions.
* WhatsApp opens directly to the configured clinic number with a pre-filled message.
* Phone numbers open the device dialer.
* Forms validate and submit successfully.
* No console errors or TypeScript errors are present.
* The application builds successfully for production.
* The codebase is clean, modular, and easy to maintain.
