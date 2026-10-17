# Harsh Khandelwal — 3D Portfolio

Next.js 14 · React · TypeScript · Tailwind CSS · React Three Fiber · Framer Motion (static export).

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Deploy (free) with GitHub Pages + Actions
1. Create an empty GitHub repo (e.g. `portfolio`) and push this project to its `main` branch.
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.
   Live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` if the repo is named `<username>.github.io`).

## Custom domain
1. Repo **Settings → Secrets and variables → Actions → Variables**: add `CUSTOM_DOMAIN` = your domain (this removes the `/repo` base path).
2. Repo **Settings → Pages → Custom domain**: enter the domain, tick **Enforce HTTPS** once the certificate is ready.
3. At your registrar, for an apex domain add four `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; for `www` add a `CNAME` to `<username>.github.io`.
4. Re-run the workflow (Actions → Deploy → Run workflow).

## Editing content
All text lives in `data/resume.ts`. Replace `public/Harsh_Khandelwal.pdf` to update the resume download.
