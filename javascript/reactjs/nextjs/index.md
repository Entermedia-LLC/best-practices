---
label: Next.js
icon: code-square
---

# Next.js

The purpose of this document is to help guide you through working with a potential project using the JavaScript library, [Next.js](https://nextjs.org/). Outside of the official [Next.js documentation](https://nextjs.org/docs/getting-started), you should find here personalized recommendations for using the library based on the types of projects we typically see at Entermedia. We have broken these recommendations out into common elements we tend to interact with often in client work. If something you’re looking for isn’t represented you can either submit a pull request to this repository or refer to the official documentation.

---

## Getting Started

Entermedia follows a standardized approach for setting up new Next.js projects. This allows developers to easily switch between projects, faster project initialization, and ramp-up for new developers. All of these types of projects should start with this same setup.

### Step 1: Installation Options

- [Next.js Installation](https://nextjs.org/docs/getting-started)
- Drupal Project Installation with [Next.js for Drupal](https://next-drupal.org/)
- [WordPress Project Setup](https://faustjs.org/docs/next/getting-started#on-macos-linux-or-wsl-bash) with [Faust.js](https://faustjs.org/)

### Step 2: Install commitlint

For projects using a Git repository, install [commitlint](/tools/commitlint.md).

### Step 3: Install Normalize.css

!!!warning Using Faust.js?
**Skip this step,**, the Faust.js library already includes the Normalize.css package.
!!!

It's important that projects have the same starting point for browsers when rendering elements. Entermedia uses [Normalize.css](https://necolas.github.io/normalize.css/) to do this to make elements render more consistently and in line with modern standards.

### Step 4: Install Storybook

See [Storybook installation instructions](/javascript/storybook/#installation).

### Step 5: Install Leasoft

Entermedia uses [Leasot](https://github.com/pgilad/leasot) to intelligently parse and output TODOs and FIXMEs from comments in your files.

```shell
npm install --save-dev leasot
```

Once installed, add a new npm command in the `package.json` file:

```json
"todo": "leasot '**/*.tsx' '**/*.scss' '**/*.ts' --ignore '**/node_modules' '**/schema.generated.ts'"
```

### Step 6: Default Next.js Additional Steps

- [Install Sass](https://nextjs.org/docs/basic-features/built-in-css-support#sass-support)
- [Install the `storybook-addon-sass-postcss` package](https://storybook.js.org/addons/storybook-addon-sass-postcss)

---

## Project Structure

Next.js is fairly open in how you can organize your files and directories; if you establish a good structure from the start-up, your subsequent work will be easier, faster, predictable, and scalable. Entermedia has created some helpful starter packages to quickly get up and running:

!!!warning Deploying on GitHub Pages?
Add an empty `.nojekyll` file in the `/public` directory to bypass Jekyll and prevent issues will files or directories that start with underscores (_).
!!!

[!ref `styles` Directory Structure](https://github.com/Entermedia-LLC/scss)

[!ref `components` Directory Structure](https://github.com/Entermedia-LLC/nextjs-components)

[!ref `lib` Directory Structure](https://github.com/Entermedia-LLC/nextjs-lib)

### Install Dependencies & Setup Config

- `npm i html-react-parser`
- Create a `config.ts` file that's hold project specific configuration:
  ```js config.ts
  const SITE_NAME = "Project Name";

  export { SITE_NAME };
  ```

---

## Pages Setup

In `pages/_app.tsx` add the project's global styles:

```js _app.tsx
// Import global styles
import "normalize.css/normalize.css";
import "../scss/base.scss";
import "../scss/themes/default.scss";
```

---

## Tools & Resources

The following are Next.js tools & resources we use at Entermedia. This list will grow and change over time and is not meant to be comprehensive. Generally, we encourage or require these tools to be used in favor of other ones. Rules governing tools to be used and packaged with a client site will be much stricter than those used on internal projects.

- [Next.js](/javascript/reactjs/nextjs) - The React.js framework Entermedia has standarized on.
- [Next.js for Drupal](https://next-drupal.org/) - Next.js Drupal headless applications.
- [Faust.js](https://faustjs.org/) - Next.js WordPress headless applications.
