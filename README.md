# National Park Explorer

US national park travel stories, RV travel, scenic photography, hiking adventures, and outdoor exploration content.

Built with **React + Vite + Tailwind CSS + React Router**, served in production by a small **Express + compression** server.

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router DOM 6
- Express + compression (production server)

## Local Development

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Production Build

```bash
npm run build      # outputs static files to /dist
npm start          # serves /dist via Express on PORT (default 3000)
```

## Project Structure

```
src/
  assets/images/        # Locally stored images (hero, parks, travel, rv, photography, blog, tutorials, community)
  components/           # Navbar, Footer, Layout, CookieBanner, Accordion, ExpandableCard, PageHero
  pages/                # Home, About, Blog, Tutorials, Community, Contact, Category, Privacy, Terms, Refund, NotFound
  utils/analytics.js    # trackEvent + trackPageView helpers (GA4)
  App.jsx, main.jsx     # Router + entry
server.js               # Production Express server
Procfile, app.json      # Heroku / Render deployment
```

## Deployment

### Heroku / Render / Railway

1. Connect this repo to your platform of choice.
2. The platform will run `npm install` and `npm run build` automatically (the `start` script boots `server.js`).
3. Set `NODE_ENV=production`. No other env vars required.

### Manual / VPS

```bash
git clone https://github.com/David01-glitch/national1.git
cd national1
npm install
npm run build
NODE_ENV=production node server.js
```

Run behind Nginx with HTTPS for production.

## Analytics

Google Analytics (GA4) is wired up in `index.html` and exposed via `src/utils/analytics.js`:

```js
import { trackEvent, trackPageView } from './utils/analytics.js';
trackEvent('newsletter_subscribe', { location: 'home' });
```

Replace the `G-4J046JXWVC` measurement ID in `index.html` if you fork.

## Content

- All images are stored locally in `src/assets/images/` and imported into React components — no runtime CDN dependencies.
- Read More / Learn More expansions happen **inline on the same page** via an accordion-style component.

## License

© National Park Explorer. All rights reserved.
