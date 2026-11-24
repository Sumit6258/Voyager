# Voyager — A Message From Earth

A static tribute site for Voyager 1 and 2 (HTML, CSS, vanilla JS; no build step, no backend). Live at https://voyager.sumitsuman.com once deployed.

## Preview locally
```
python3 -m http.server 8000   # then open http://localhost:8000
```
Missing images show a labelled placeholder, so you can add them gradually. See `IMAGE-ASSETS.md` for the checklist.

## Editing
- Timeline milestones, image filenames, credits and NASA links: `data/timeline.js`
- Hero crop: tune `--hero-pos` (desktop) and `--hero-pos-m` (mobile) at the top of `styles.css` so the spacecraft stays in frame.
- Mission status note (date-stamped): the `.status` block in `index.html`. **Re-check NASA’s Voyager pages before each publish**, and swap in NASA’s exact update link.
- Image credits default to “NASA/JPL-Caltech”. Confirm each image’s real credit and override it with `credit:` in the data.

## Deploy to GitHub Pages
1. Create a **public** GitHub repository, then from this folder:
   ```
   git init && git add . && git commit -m "Voyager site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. In the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The workflow in `.github/workflows/pages.yml` publishes the site on every push to `main`.
3. Still in **Settings → Pages**, enter `voyager.sumitsuman.com` as the **Custom domain** and save. (The `CNAME` file is kept for convention; GitHub ignores it when deploying through Actions, so this setting is what counts.)
4. At your DNS provider, add a **CNAME** record: host/name `voyager` (for `voyager.sumitsuman.com`), value `<your-username>.github.io`.
5. When DNS has propagated and GitHub has issued the certificate, tick **Enforce HTTPS** in **Settings → Pages**.

All asset paths are relative, so the site works on the custom domain and on a plain `github.io` address.

This is an independent tribute and is not an official NASA website.
