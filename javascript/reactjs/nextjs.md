---
label: Next.js
icon: code-square
---

# Next.js

The purpose of this document is to help guide you through working with a potential project using the JavaScript library, [Next.js](https://nextjs.org/). Outside of the official[Next.js documentation](https://nextjs.org/docs/getting-started), you should find here personalized recommendations for using the library based on the types of projects we typically see at Entermedia. We have broken these recommendations out into common elements we tend to interact with often in client work. If something you’re looking for isn’t represented you can either submit a pull request to this repository or refer to the official documentation.

---

## Getting Started

Entermedia follows a standardized approach for setting up new Next.js projects. This allows developers to easily switch between projects, faster project initialization, and ramp-up for new developers. All of these types of projects should start with this same setup.

### Step 1: Project installation

+++ Drupal
Entermedia uses the [Next.js for Drupal](https://next-drupal.org/) for all headless Drupal projects. To begin, follow the instructions for [creating a starter project](https://next-drupal.org/docs/quick-start#1-create-site).
+++ WordPress
Coming soon.
+++

### Step 2: Install commitlint

For projects using a Git repository, install [commitlint](/tools/commitlint.md).

### Step 3: Install Normalize.css

It's important that projects have the same starting point for browsers when rendering elements. Entermedia uses [Normalize.css](https://necolas.github.io/normalize.css/) to do this to make elements render more consistently and in line with modern standards.

### Step 4: Install Storybook

See [Storybook installation instructions](/javascript/storybook.md).

Follow [these instructions](https://storybook.js.org/blog/get-started-with-storybook-and-next-js/) to get Storybook up and running in the Next.js project. Once Storybook is installed, add the [Next.js addon](https://storybook.js.org/addons/storybook-addon-next#csssassscss-modules).

### Step 5: Install Leasoft

Entermedia uses [Leasot](https://github.com/pgilad/leasot) to intelligently parse and output TODOs and FIXMEs from comments in your files. Once installed, add a new npm command in the `package.json` file:

```json
"todo": "leasot 'components/**/*.tsx' 'pages/**/*.tsx' 'components/**/*.scss' 'styles/**/*.scss' 'lib/**/*/ts'"
```

---

## Project Structure

Next.js is fairly open in how you can organize your files and directories; if you establish a good structure from the start-up, your subsequent work will be easier, faster, predictable, and scalable.

The following is Entermedia's standarized Next.js project structure setup:

```bash
|- components/ _______________________________ # See below
|- pages/ ____________________________________ # File-based page routing
|- public/ ___________________________________ # Static files
|    |- images/ ______________________________ # Application images
|    |- .nojekyll ____________________________ # Used for Git Pages applications when exporting
|    |- favicon.ico __________________________ # Application favicon
|    |- robots.txt ___________________________ # Robots text file
|- styles/ ___________________________________ # See below
```

[!ref `styles` Directory Structure](/css/structure.md)

### `components` Directory

```bash
|- components/
|    |- atoms/ _______________________________ # Atom components (base HTML elements)
|    |- molecules/ ___________________________ # Module components (groups of atoms)
|    |- organisms/ ___________________________ # Organism components (groups of molecules)
|       |- ExampleComponent/
|          |- ExampleComponent.tsx
|          |- ExampleComponent.stories.tsx
|          |- example-component.module.scss
|          |- example-component.drupal.ts ____ # Drupal-specific helper functions
|    |- svgs/ ________________________________ # SVG components
|    |- templates/ ___________________________ # Template components (groups of organisms)
```
