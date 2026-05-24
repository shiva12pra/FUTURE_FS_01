# Personal Portfolio

A premium React portfolio built with Vite, Tailwind CSS, Framer Motion, and React Router.

## Features

- Modern responsive landing page
- SEO-friendly metadata and performance-focused structure
- Animated hero, skill panels, projects, resume, and contact pages
- Reusable component architecture
- Optional backend API for contact form email delivery

## Setup

1. Install frontend dependencies:

```bash
npm install
```

2. Install server dependencies:

```bash
cd server
npm install
```

3. Start the frontend:

```bash
npm run dev
```

4. Start the backend (in a separate terminal):

```bash
cd server
npm run dev
```

5. Configure email by copying `server/.env.example` to `server/.env` and setting your SMTP details.

## Build

```bash
npm run build
```

## Notes

- Update your personal information directly in `src/data/siteData.js` and component text.
- Replace `public/resume.pdf` with your actual resume PDF file.
