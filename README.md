# Chama Mobile — frontend demo

Premium iPhone-first storefront concept built with Next.js App Router, React, TypeScript and custom CSS. Designed for Vercel.

## Run locally

Requires Node.js 20.9+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production test

```bash
npm run build
npm run start
```

## Deploy on Vercel

Push this folder to a GitHub repository. In Vercel, select **Add New → Project → Import Git Repository**, set the framework to **Next.js** and deploy with default settings. No environment variables are required for this frontend demo.

## Working demo functionality

- Responsive homepage and navigation, searchable quick results in the header.
- Catalog filtering, searching, sorting and product detail pages.
- Wishlist and bag functionality persisted in `localStorage`.
- Contact page that composes an email in the visitor's email application (not sent or saved). **The To field is intentionally blank until a real shop email is provided.**
- Metadata and accessible button labels.

## Before publishing as a real store

- **All products and prices are placeholders**, not verified stock or pricing.
- Product visuals are stylized CSS illustrations, not official product photographs.
- Shop contact details, address, email, phone and social links must be provided and verified. Footer social media links currently lead to platform homepages and are marked as placeholders.
- Confirm exact offered repair/customisation services, terms, warranty, privacy policy, and local compliance.
- Configure actual checkout, inventory, payment, authentication, secure messaging and order processing with a backend. The bag's enquiry link is not checkout.
- Replace `robots: {index:false}` with the desired indexing policy before launching the live site. Prevent demo pricing from being indexed.
- Replace branding claims and confirm client approval.


## Sinhala-first redesign (October 2026)
- Updated home hero, featured collection, services, navigation, cart, search, and contact copy for Sri Lankan audiences.
- Product model names remain in English for clear shopping searches.
- The source is a frontend demo only: sample prices, no live inventory, no payment processing, and no verified merchant contacts.
- SEO description, page titles, and `html lang="si"` are provided, but indexing is intentionally disabled until the real shop details and inventory are confirmed.
- Run `npm install && npm run build` before Vercel deployment.
