# Deploying TechTitans AI to Hostinger (Business Plan)

## What Changed

The project has been adapted from a Replit monorepo to work with Hostinger's Node.js hosting:

| File | Change |
|------|--------|
| `package.json` | New root config with `build` and `start` scripts, Express/CORS/Nodemailer dependencies |
| `server.js` | New unified server — serves static frontend + API (contact form & health check) |
| `artifacts/techtitans-ai/vite.config.ts` | Removed Replit-specific plugins, made PORT/BASE_PATH optional |
| `artifacts/techtitans-ai/package.json` | Resolved `catalog:` and `workspace:*` references to actual versions |
| `artifacts/techtitans-ai/src/components/Contact.tsx` | Simplified API endpoint to `/api/contact` |

## Deployment Steps

### 1. Push Changes to GitHub

Make sure all changes are committed and pushed to your GitHub repository:
```bash
git add -A
git commit -m "Configure for Hostinger Node.js deployment"
git push origin main
```

### 2. Deploy on Hostinger

1. Log in to **Hostinger hPanel**
2. Go to **Websites** → **Add Website**
3. Select **Node.js Apps**
4. Choose **Import Git Repository**
5. Authorize GitHub access (if not already done)
6. Select the **TechTitans-AI** repository

### 3. Configure Build Settings

When Hostinger asks for build settings:

| Setting | Value |
|---------|-------|
| **Framework** | Other |
| **Node.js version** | 20.x or 22.x |
| **Build command** | `npm run build` |
| **Output directory** | `dist` |
| **Entry file** | `server.js` |

### 4. Set Environment Variables

In the Hostinger dashboard, go to **Environment Variables** and add:

| Variable | Value | Required |
|----------|-------|----------|
| `PORT` | (Hostinger sets this automatically) | Auto |
| `GMAIL_APP_PASSWORD` | Your Gmail App Password | Yes — for contact form |
| `GMAIL_USER` | `gameralipmk@gmail.com` (or your Gmail) | Optional (defaults to gameralipmk@gmail.com) |
| `CONTACT_RECIPIENT` | Email to receive form submissions | Optional (defaults to gameralipmk@gmail.com) |

#### How to Get a Gmail App Password
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** (if not already)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password for "Mail"
5. Copy the 16-character password and add it as `GMAIL_APP_PASSWORD`

### 5. Deploy

Click **Deploy** and wait for the build to complete.

### 6. Connect Domain

If `techtitansai.com` is already pointed to this hosting plan, the site should be live at:
- **https://techtitansai.com**

## How It Works

```
Browser Request
       │
       ▼
   server.js (Express)
       │
       ├── /api/healthz  → Returns { status: "ok" }
       ├── /api/contact   → Sends email via Gmail SMTP
       ├── /assets/*       → Static CSS/JS files
       └── /*              → Serves index.html (SPA routing)
```

- `npm run build` → Installs frontend deps, builds Vite, copies output to `dist/`
- `npm run start` → Runs `server.js` which serves everything on the PORT Hostinger provides
