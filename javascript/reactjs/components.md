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
|             |- ExampleComponent.tsx ________ # See below
|             |- ExampleComponent.stories.tsx  # See below
|             |- example-component.module.scss # Scoped component styles
|             |- example-component.drupal.ts _ # Drupal-specific helper functions
|    |- svgs/ ________________________________ # SVG components
|    |- templates/ ___________________________ # Template components (groups of organisms)


```

---

## Component Template

The following is how all React.js-based components should be structured.

!!!info CMS/Project Agnostic Components
When building components, they should be as **CMS/project agnostic** as possible to make it easier to reuse in future & exisiting projects.
!!!

```js ExampleComponent.tsx
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

---

## Component Story

The following is how all React.js-based components using Storybook should be structured.

```js ExampleComponent.stories.tsx
// React.js dependencies
import React from "react";

// Storybook dependencies
import { ComponentStory, ComponentMeta } from "@storybook/react";

// Component dependencies
import { ExampleComponent } from "./ExampleComponent";

// Test data

// Story config
export default {
  title: "Design System/Organisms/Example Component",
  component: ExampleComponent,
  parameters: {
    layout: "fullscreen", // centered, fullscreen
  },
} as ComponentMeta<typeof ExampleComponent>;

// Template
const Template: ComponentStory<typeof ExampleComponent> = (args) => (
  <ExampleComponent {...args} />
);

// Stories
export const Example1 = Template.bind({});
/*
Example1.decorators = [
  (Story: () => {}) => <div>{Story()}</div>,
];
*/
Example1.args = {
  ...
};

```
