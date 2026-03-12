# Human Relations Studio Website

A Next.js website modeled after primary.studio, with:
- Home, Work, Pricing pages with full responsive breakpoints
- Netlify Forms for contact (goes straight to your email)
- Admin dashboard to manage projects (password protected)

## Setup

```bash
npm install
npm run dev
```

## Deploy to Netlify

1. Push this repo to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `out`
5. Done — Netlify Forms automatically picks up the contact form

## Admin Access

- URL: `yoursite.com/admin-login`
- Default password: `studio2024`
- Change it in `pages/admin-login.js` → `ADMIN_PASSWORD` constant

## Breakpoints

- Desktop: 1200px+
- Tablet: 810px–1199px  
- Mobile: up to 809px

## Customizing Content

- **Home copy**: `pages/index.js`
- **Work projects**: `pages/work.js` → `projects` array
- **Pricing**: `pages/pricing.js`
- **Nav studio name**: `components/Nav.js`
- **Styles**: `styles/globals.css`

## Contact Form

Netlify Forms sends submissions to your email automatically. 
To set the notification email: Netlify dashboard → Site → Forms → Notifications.
