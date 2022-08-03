---
label: Deploying
icon: rocket
---

---

## GitHub Pages

Create the `gh-pages.deploy.yml` below in the `.github/workflows` directory.

```yml
name: Build and Deploy
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./src

    steps:
      - name: Checkout 🛎️
        uses: actions/checkout@v2
        with:
          persist-credentials: false

      - name: Cache  💾
        uses: actions/cache@v2
        with:
          path: ${{ github.workspace }}/.next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}

      - name: Install and Build 🔧
        uses: actions/setup-node@v3
      - run: npm install
      - run: npm run build
        env:
          CI: true

      - name: Deploy 🚀
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          BRANCH: gh-pages
          FOLDER: out
          CLEAN: true
```

With this in place, when changes are pushed to the `main` branch, a build will be triggered and update the `gh-pages` branch which should be used to serve the site.
