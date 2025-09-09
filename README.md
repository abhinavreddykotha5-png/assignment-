# Leo9 Frontend (React - Vite) - Frontend Only

This is a modular React frontend that recreates the Hero + Navbar from the assignment and includes two bonus sections (Services, Contact).
It is ready to be deployed as the frontend part of a MERN app later.

## Features
- Modular components: Navbar, Hero, Services, Contact, Footer
- Responsive layout (desktop and mobile)
- Contact form demonstrates collecting inputs (frontend-only; no backend in this zip)
- Simple CSS (easy to explain in an interview)

## Run locally
1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Open the URL shown by Vite (usually http://localhost:5173)

## To connect to backend later
- Add a small API helper in `src/api.js` and point it to your backend (e.g. http://localhost:5000)
- Update the Contact component to call that API

## Files to look at
- `src/components/Hero.jsx` - hero layout and CTA
- `src/components/Navbar.jsx` - navbar layout
- `src/components/Contact.jsx` - contact form logic (frontend-only)
