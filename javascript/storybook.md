---
label: Storybook
icon: code-square
---

Entermedia uses [Storybook](https://entermedia-llc.github.io/best-practices/nextjs-drupal) for building UI components and pages in isolation, allowing for streamline UI development, testing, and documentation.

---

## Installation

Storybook has an initializer that does the heavy lifting for us: `npx sb init`. This script detects your project type and adapts to it. But we can also give it a few hints.

Next.js v11 and later use Webpack 5. We can also use Webpack 5 in Storybook to get improved integration and performance. To do that we use the builder option and run this command:

```shell
npx sb init --builder webpack5
```

Read more about the [benefits of Storybook's Webpack 5 builder](https://storybook.js.org/blog/storybook-for-webpack-5/).

### Install the Next.js addon

See [Next.js + Storybook installation instructions](https://storybook.js.org/addons/storybook-addon-next).

### Configure Storybook

Delete the newly created `stories` diectory, the default example stories created during the installation process.

#### Configure main.js

```js .storybook/main.js
module.exports = {
  stories: ["../**/*.stories.mdx", "../**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  staticDirs: ["../PATH_TO_STATIC_DIRECTORY"],
};

```

#### Configure preview.js

```js .storybook/preview.js
// Import global styles
import "normalize.css"; // only if needed
import "../PATH_TO_STYLES_DIRECTORY/themes/default.scss";
import "../PATH_TO_STYLES_DIRECTORY/base.scss";

// Configure breakpoints
const breakpoints = {
  small: {
    name: "Small",
    type: "mobile",
    styles: {
      height: "640",
      width: "360"
    }
  },
  medium: {
    name: "Medium",
    type: "tablet",
    styles: {
      height: "962",
      width: "601"
    }
  },
  large: {
    name: "Large",
    type: "desktop",
    styles: {
      height: "768",
      width: "1024"
    }
  },
  xlarge: {
    name: "Extra Large",
    type: "desktop",
    styles: {
      height: "1080",
      width: "1920"
    }
  }
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: breakpoints,
  },
  options: {
    storySort: {
      order: [
        "Documentation",
        "Design System",
        [
          "Atoms",
          "Molecules",
          "Organisms",
          "Templates",
          "Pages",
        ],
      ],
    },
  },
};
```

---

## Common Errors

```shell
ERR! Error: Cannot find module 'styled-jsx'
```
**Solution**: `npm install --save styled-jsx`

---

## Addons & Resources

- [Chromatic](https://www.chromatic.com/) - Ship UIs faster with automated workflows for Storybook.
