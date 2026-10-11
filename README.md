# Marang Nurture — website

React + Vite site for Marang Nurture luxury bath soaks. Orders are sent to WhatsApp; delivery via PostNet.

## Run locally
```bash
npm install
npm run dev
```

## Build for hosting
```bash
npm run build
```
Upload the `dist/` folder to any static host (Netlify Drop, Vercel, GitHub Pages, Cloudflare Pages).

**Quickest demo:** go to https://app.netlify.com/drop and drag the `dist` folder onto the page.

## Editing
- Contact details & WhatsApp number: `src/config.js`
- Scents, descriptions & prices: `src/data/products.js`
- Styles: `src/index.css`
- Product photo: `public/jars.jpg`
