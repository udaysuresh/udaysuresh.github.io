# Shannon & Uday — Digital Invitation

This folder is the complete static invitation for `https://udaysuresh.com/invite/`.

## Upload
Copy the **contents** of this folder into the `invite/` directory of the GitHub repository that publishes `udaysuresh.com`. Do not put the outer `shannon-uday-invite` folder inside `invite/`.

The final URL should be:

`https://udaysuresh.com/invite/`

## What is included
- `index.html` — invitation experience
- `styles.css` / `script.js` — envelope opening interaction
- `assets/invitation.png` — the final invitation artwork (clipped from the approved mockup, 2× resolution)
- `assets/seal.png` — green wax seal used as the tap-to-open button
- `assets/email-opening.gif` — animated email opener (envelope → invitation)
- `assets/og-image.png` — 1200×630 link-preview image for iMessage, Messages, WhatsApp, etc.
- favicon + Apple touch icons
- `site.webmanifest` — mobile/home-screen metadata
- `email-template.html` — optional email HTML if you later use an HTML-capable sender

## Sending
You do not need an RSVP system. Once the site is live, simply send this link:

`https://udaysuresh.com/invite/`

For a text message, a nice short version is:

**Shannon & Uday are getting married!**
October 16, 2026 — [open the invitation](https://udaysuresh.com/invite/)

## Link previews
The page has absolute Open Graph metadata and a 1200×630 PNG preview. Social/iMessage systems cache previews, so after first publishing it may take a little while for a new preview to appear.

If a service shows an old preview, changing the URL with a harmless query string such as `?v=2` can force a fresh preview.

## Important
Do not rename `og-image.png`, `site.webmanifest`, or the files in `assets/` unless you also update their references in `index.html`.
