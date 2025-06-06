# Applause OS

Internal tools portal for Applause, accessible at os.applause.dev

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Cloudflare Access Setup

To secure this application with Cloudflare Access:

1. **In Cloudflare Dashboard:**
   - Go to Zero Trust → Access → Applications
   - Click "Add an application"
   - Select "Self-hosted"
   - Configure:
     - Application name: "Applause OS"
     - Session Duration: 24 hours
     - Application domain: `os.applause.dev`
     - Identity providers: Enable Google

2. **Create Access Policy:**
   - Policy name: "Applause Team"
   - Action: Allow
   - Include: Emails ending in `@applause.com` (or your domain)
   - Configure any additional rules as needed

3. **DNS Configuration:**
   - Add a CNAME record pointing `os.applause.dev` to your hosting provider
   - Enable Cloudflare proxy (orange cloud)

4. **Google OAuth Setup:**
   - In Cloudflare Access settings, configure Google as identity provider
   - Follow Cloudflare's guide to set up Google OAuth credentials
   - Add authorized redirect URIs as specified by Cloudflare

## Deployment

This app is ready to deploy on Vercel, Netlify, or any Node.js hosting platform.

### Vercel Deployment:
```bash
npm i -g vercel
vercel
```

### Environment Variables:
No environment variables required for basic setup. Google Auth is handled entirely by Cloudflare Access.