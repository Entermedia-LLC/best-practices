---
label: Components
icon: apps
---

At Entermedia, we put an emphasis on standardization to create a stream-lined approach to any project, speed up development, and allows any developer to quickly transition without additional project-specific ramp-up time. We've created a [starter components directory template](https://github.com/Entermedia-LLC/nextjs-components) that helps with this and should be the starting point for all projects.

---

## Component Template

The following is how all React.js-based components should be structured.

!!!info CMS/Project Agnostic Components
When building components, they should be as **CMS/project agnostic** as possible to make it easier to reuse in future & exisiting projects.
!!!

```js ExampleComponent.tsx
// React.js dependencies
import { useState } from "react";

// Next.js dependencies

// Library dependencies

// Component dependencies

// Component styles
import styles from "./my-component.module.scss";

// Component helpers

// Component properties
export type MyComponentProps = {
  /** Property description */
  className?: string,
};

// Component output
export const MyComponent = ({ className }: MyComponentProps) => {
  /**
   * Component states
   */

  /**
   * Computed properties
   */

  /**
   * Event handlers
   */

  /**
   * useEffect
   */

  /**
   * Component classes
   */
  const allClassNames = [styles["my-component"]];
  className && allClassNames.push(className);

  return <div className={allClassNames.join(" ")}>My Component</div>;
};
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
