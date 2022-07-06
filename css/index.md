---
label: CSS
icon: code
order: 700
---

At Entermedia, we value content and the experience users will have reading it. We write CSS with this in mind and don't sacrifice our clients' most important assets over the latest, shiniest, half-supported CSS features just for the sake of using them. CSS should help enhance content, not bury it under “cool” distractions.

Our websites are built mobile first, using performant CSS. Well-structured CSS yields maintainability and better collaboration which ultimately yields better client experiences.

---

## Frameworks

### CSS Frameworks

**Entermedia doesn't use any CSS frameworks.** Instead, we use a very simple library of common `.scss` files that reset the default CSS styles and define some variables containing the color palette and some other common styles, like standard fonts, text sizes, and shadows. There are many reasons we choose this approach, the most common being:

> CSS is not hard.

The whole myth that CSS is difficult to learn is mostly a relic of the times when browsers were not fully standardized and we had to use quirks, hacks, and workarounds to make things work. Over the last decade, the situation has improved a lot; CSS is much more consistent and has wide support for a lot of useful features which make those hacks unnecessary. It’s definitely not perfect (hello, Safari), but it’s manageable.

Some people argue that CSS is difficult because it has become too complex and bloated. “Should I use flex or grid layout? Whatever, I’ll just use this framework and it will solve the problem.” So they end up learning the framework and its naming conventions, full of cryptic abbreviations, such as px-lg-n5, while they might just learn to use the right CSS properties instead.

Yes, CSS is complex, because over the years it has become a powerful and universal tool. In order to use a tool efficiently, you have to learn how it works. Unfortunately, CSS frameworks have the opposite effect — they teach us to copy and paste snippets of markup instead of actually understanding what’s going on.

Lastly, CSS and HTML are the foundation of the web, and unlike your favorite framework, they are not going to become obsolete a year from now.

#### Further Reading

- [Why I stopped using CSS Frameworks, Should you too?](https://aditya-dixit.medium.com/why-i-stopped-using-css-frameworks-should-you-too-89e9261a4cb2)
- [Why I No Longer Use CSS Frameworks](https://medium.com/codex/why-i-no-longer-use-css-frameworks-be356f10b0c9)
- [3 reasons to NOT use CSS Frameworks like Bootstrap and Materialize](https://dev.to/developertharun/3-reasons-to-not-use-css-frameworks-like-bootstrap-and-materialize-1bh0)

### Grids

Our preference is not to use a 3rd party grid system, use your best judgement and keep them simple! All too often we are faced with a design that isn't built on a grid or purposefully breaks a loosely defined grid. Even if the designer had a grid in mind, there are often needs that require more creative solutions. For example: fixed-width content areas to accommodate advertising.

Sometimes a more complex grid system is warranted and leveraging a 3rd party library will gain some efficiency. However, keep in mind that by adopting a grid system you are forcing all future collaborators on the project to learn this system.

### CSS Reset

[Normalize.css](https://necolas.github.io/normalize.css/) is our primary tool for CSS resets.

---

## Accessibility

### Animation

Not every animation brings pleasure to the end user. In some cases motion can trigger harmful reactions from users with vestibular disorders, epilepsy or even migraines.

The `prefer-reduced-motion` CSS media feature does not currently have the widest support, but is active in [Safari and Firefox](https://caniuse.com/#feat=prefers-reduced-motion)). However, we still recommend applying it, as it is simple to implement and affords a better experience for those using supported browsers.

Here is an example:

```css
.animation {
  animation: vibrate 0.3s linear infinite both;
}

@media (prefers-reduced-motion: reduce) {
  .animation {
    animation: none;
  }
}
```

!!!info Accessible Animations
Read more about [creating accessible animations](https://alistapart.com/blog/post/more-resources-for-accessible-animations).
!!!

---

## Performance

Let's be honest, CSS “speed” and performance is not as important as PHP or JavaScript performance. However, this doesn't mean we should ignore it. A sum of small improvements equals better experience for the user.

Three areas of concern are [network requests](https://entermedia-llc.github.io/best-practices/css#network-requests), [CSS specificity](https://entermedia-llc.github.io/best-practices/css#css-specificity) and [animation performance](https://entermedia-llc.github.io/best-practices/css#animations).

Performance best practices are not only for the browser experience, but for code maintenance as well.

---

## Responsive Design

We build our websites mobile first. **We do not rely on JavaScript libraries such as respond.js** as it does not work well in certain environments. Instead, we leverage a natural, mobile-first build process and allow sites gracefully degrade.

### Mobile-first Approach

A responsive website should be built with min-width media queries, mobile-first. This approach means that our media queries are consistent, readable and minimize selector overrides.

- For most selectors, properties will be added at later breakpoints. This way we can reduce the usage of overrides and resets.
- It targets the least capable browsers first which is philosophically in line with mobile first
- When media queries consistently “point” in the same direction, it makes it easier to understand and maintain stylesheets.

!!!warning Warning
Avoid mixing `min-width` and `max-width` media queries.
!!!

### Breakpoints

Working with build tools that utilize Sass or PostCSS processing, we can take advantages of reusability and avoid having an unmaintainable number of breakpoints. Using variables and reusable code blocks we can lighten the CSS load and ease maintainability.

### Media queries placement

In your stylesheet files, nest the media query within the component it modifies. **Do not** create size-based partials (e.g. `_1024px.(s)css`, `_480px.(s)css`): it will be frustrating to hunt for a specific selector through all the files when we have to maintain the project. Putting the media query inside the component will allow developers to immediately see all the different styles applied to an element.

!!!danger Don't
```css
@media only screen and (min-width: 1024px) {
  @import "responsive/1024up";
}

.some-class {
  color: red;
}

.some-other-class {
  color: orange;
}

@media only screen and (min-width: 1024px) {
  .some-class {
    color: blue;
  }
}
```
!!!

!!!success Do
```css
.some-class {
  color: red;
  @media only screen and (min-width: 1024px) {
    color: blue;
  }
}

.some-other-class {
  color: orange;
}
```
!!!

### IE8 and older browser support

We prefer showing a fixed-width non-responsive desktop version to older IE users rather than showing a mobile version, but do not officially support legacy browsers like IE.

- Use a feature detection to target older browsers.
- Load a different stylesheet for older browsers.
