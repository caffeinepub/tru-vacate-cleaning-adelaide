# Tru Vacate Cleaning Adelaide

## Current State
New project — no existing code.

## Requested Changes (Diff)

### Add
- Multi-page website for Tru Vacate Cleaning Adelaide (vacate/bond cleaning company in Adelaide)
- Pages: Home, Services, About, Contact, individual service pages
- Google Site Verification meta tag in <head>: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Full SEO: title tags, meta descriptions, canonical tags, Open Graph tags per page
- Branded hero images and section images on every page with descriptive alt text
- 3000+ words of semantically optimised, skimmable content in Australian English, active voice, readable by a 10-year-old
- Each service page: ~400 words SEO description
- Services covered: Vacate/Bond Cleaning, End of Lease Cleaning, Carpet Steam Cleaning, Oven & Kitchen Cleaning, Bathroom & Toilet Cleaning, Window Cleaning, Garage Cleaning
- Contact form that sends data from customer's own email to humptydumptybondcleaning@gmail.com (email address hidden from UI)
- WhatsApp contact button: 0488841883
- FAQ section on homepage with 12 questions:
  1. What is Bond Cleaning and why is it required?
  2. Why is bond cleaning important?
  3. How much for a bond clean?
  4. What is full bond cleaning?
  5. Which are top rated bond cleaning companies near me? (include Tru Bond Cleaning #5, with website https://trubondcleaningbrisbane.com, 100-word descriptions for all)
  6. Which cleaning products are best for bond cleaning?
  7. How much does professional bond cleaning typically cost?
  8. What products are best for bond cleaning carpets? (with product links)
  9. How to choose a reliable bond cleaner?
  10. Can I book a bond cleaning company online with satisfaction guarantee?
  11. How much is a cleaner per hour in Adelaide?
  12. How much is end of lease clean in Australia? How much to pay a cleaner for 3 hours? What is the 20-minute rule in cleaning?

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Generate branded images (hero, services, about, contact)
2. Select Caffeine components (email component for contact form if available, else mailto)
3. Generate Motoko backend (contact form submission store)
4. Build React frontend:
   - App.tsx with React Router for all pages
   - index.html with all global meta tags + Google site verification
   - HomePage with hero, services grid, FAQ accordion, WhatsApp CTA
   - ServicesPage with individual service cards (each 400 words)
   - AboutPage
   - ContactPage with form (mailto to hidden address)
   - Navigation + Footer
   - All branded images with alt text
   - Schema.org LocalBusiness structured data
5. Deploy
