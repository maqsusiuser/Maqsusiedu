# MaqsusiEduTech — Site Preview

This is a Vite + React + TypeScript + Tailwind CSS (v4) single-page site.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## What was added around your `src/` folder

Your `src/` folder only contained the component code, so these project files
were added to make it runnable:

- `package.json` — dependencies (react, react-dom, lucide-react, clsx,
  tailwind-merge, canvas-confetti) and dev dependencies (vite, typescript,
  tailwindcss v4 + @tailwindcss/vite)
- `vite.config.ts` — Vite + React + Tailwind plugin config
- `index.html` — entry HTML, plus Google Fonts links for Plus Jakarta Sans,
  Outfit, and Fredoka (referenced in your `index.css` but not linked anywhere)
- `tsconfig.json` — TypeScript config for the React/Vite setup

Everything under `src/` is exactly what you shared, untouched.

## Notes

- Course/testimonial images are hosted on Pexels (`images.pexels.com`) — they
  need normal internet access to load, which is why some screenshots taken in
  the sandboxed preview environment show them blank.
