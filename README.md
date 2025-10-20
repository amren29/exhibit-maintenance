# Exhibit Fabric - Maintenance Page

A professional maintenance page built with Next.js for Exhibit Fabric, showcasing a modern design while the main website undergoes improvements.

## Getting Started

First, fix npm permissions (if needed):

```bash
sudo chown -R $(whoami) ~/.npm
```

Then install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the maintenance page.

## Build for Production

To create a static export:

```bash
npm run build
```

This will generate static files in the `out` directory that can be deployed to any static hosting service.

## Deploy

The project is configured with `output: 'export'` in `next.config.ts`, making it ready for static deployment to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## Features

- Modern, responsive design with gradient background
- Professional messaging about website upgrades
- Contact information with clickable email
- Social media links section
- Mobile-friendly layout
- Built with Next.js 15 and TypeScript
