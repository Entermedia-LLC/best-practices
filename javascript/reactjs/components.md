---
label: Components
icon: apps
---

At Entermedia, we put an emphasis on standardization to create a stream-lined approach to any project, speed up development, and allows any developer to quickly transition without additional project-specific ramp-up time.

---

## Components Directory Structure

The following is how all React.js-based component directories should be structured (follows the [Atomic Design approach](https://bradfrost.com/blog/post/atomic-web-design/)):

```bash
|- components/
|    |- atoms/ _______________________________ # Atom components (base HTML elements)
|    |- molecules/ ___________________________ # Module components (groups of atoms)
|    |- organisms/ ___________________________ # Organism components (groups of molecules)
|         |- ExampleComponent/
|             |- ExampleComponent.tsx ________ # CMS-agnostic component output
|             |- ExampleComponent.stories.tsx  # Storybook config
|             |- example-component.module.scss # Scoped component styles
|             |- example-component.drupal.ts _ # Drupal-specific helper functions
|    |- svgs/ ________________________________ # SVG components
|    |- templates/ ___________________________ # Template components (groups of organisms)


```

---

## Component Template

The following is how all React.js-based components should be structured:

```js React.js Component Template
// React.js dependencies
import { useState } from "react";

// Component dependencies

// Component styles
import styles from "./my-component.module.scss"

// Component properties
export type MyComponentProps = {
  /** Property description */
  className?: string
}

// Component output
export const MyComponent = ({ className }: MyComponentProps) => {
  // States

  // Events

  // useEffect

  // Classes
  const allClassNames = [styles["my-component"]];
  className && allClassNames.push(className);

  return (
    <div className={allClassNames.join(" ")}>
      My Component
    </div>
  )
}
```
