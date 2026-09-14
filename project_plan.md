# Mich Heritage — Fashion Consultant

## 1. Project Description
A personal fashion consulting brand helping clients look and feel their best. The consultant offers styling sessions, wardrobe makeovers, personal shopping, and virtual consultations. Clients can book a consultation through a form, or reach out directly on WhatsApp. For international clients (outside Nigeria), a self-measurement guide helps them submit their sizes remotely.

## 2. Page Structure
- `/` — Single-page landing with sections:
  - Hero
  - About the consultant
  - Services
  - Gallery / Portfolio
  - How to Measure Yourself (for non-Nigeria clients)
  - Consultation Booking Form
  - Contact / WhatsApp CTA
  - Footer

## 3. Core Features
- [x] Hero with brand intro and CTAs
- [x] About section
- [x] Services list
- [x] Gallery portfolio
- [x] Self-measurement guide (for remote / non-Nigeria clients)
- [x] Consultation booking form (built-in Form)
- [x] WhatsApp contact button and links
- [x] Responsive layout (mobile-first)

## 4. Data Model Design
No database required. Consultation requests are collected via the built-in Form (get_form_url), and WhatsApp is a direct link.

## 5. Backend / Third-party Integration Plan
- Database: Not needed — form submissions use the built-in Form; WhatsApp is a link.
- Shopify: Not needed.
- Stripe: Not needed (no online payment requested).
- WhatsApp: Direct `wa.me` link (placeholder number to be replaced by the owner).

## 6. Development Phase Plan

### Phase 1: Core landing page
- Goal: Build the full single-page fashion consultant site.
- Deliverable: Hero, About, Services, Gallery, Measure Guide, Booking Form, WhatsApp CTA, Footer — all responsive.

### Phase 2: Polish & content
- Goal: Replace placeholder copy, brand name, WhatsApp number, and gallery images with the owner's real assets.
- Deliverable: Final content and imagery.