# Deploying Kushal's Web Projects Live to Vercel / Netlify

### Deployment Steps:
1. Ensure project has a valid `index.html` at root (or configured build folder).
2. Commit all changes and push to GitHub:
   ```bash
   git add .
   git commit -m "feat: prepare project for production deployment"
   git push origin main
   ```
3. Go to [Vercel](https://vercel.com) or [Netlify](https://netlify.com) & sign in with GitHub.
4. Click **Add New Project** &rarr; Select `kushal-web-projects`.
5. Keep default settings & click **Deploy**!
6. In ~30 seconds, your project is live with a secure URL (e.g. `https://kushal-projects.vercel.app`).

### Continuous Deployment (CI/CD):
Whenever you push new code to `main`, Vercel automatically deploys the update without manual intervention!
