---
label: Syntax & Formatting
icon: multi-select
---

Syntax and formatting are keys to a maintainable project. By keeping our code style consistent, we not only help ourselves debug faster but we're also lessening the burden on those who will have to maintain our code (maybe ourselves too!).

---

## CSS Syntax

CSS syntax is not strict and will accept a lot of variations, but for the sake of legibility and fast debugging, we follow basic code styles:

- Write one selector per line
- Write one declaration per line
- Closing braces should be on a new line

!!!danger Don't
```css
.class-1, .class-2,
.class-3 {
  width: 10px; height: 20px;
  color: red; background-color: blue; }
```
!!!

!!!success Do
```css
.class-1,
.class-2,
.class-3 {
  background-color: blue;
  color: red;
  height: 20px;
  width: 10px;
}
```
!!!

- Include one space before the opening brace
- Include one space before the value
- Include one space after each comma-separated values

!!!danger Don't
```css
.class-1,.class-2{
  width:10px;
  box-shadow:0 1px 5px #000,1px 2px 5px #ccc;
}
```
!!!

!!!success Do
```css
.class-1,
.class-2 {
  width: 10px;
  box-shadow: 0 1px 5px #000, 1px 2px 5px #ccc;
}
```
!!!

- Try to use lowercase for all values, except for font names
- Zero values don't need units
- End all declarations with a semi-colon, even the last one, to avoid errors
- Use double quotes instead of single quotes

!!!danger Don't
```css
section {
  background-color: #FFFFFF;
  font-family: 'Times New Roman', serif;
  margin: 0px
}
```
!!!

!!!success Do
```css
section {
  background-color: #fff;
  font-family: "Times New Roman", serif;
  margin: 0;
}
```
!!!

If you don't need to set all the values, don't use shorthand notation.

!!!danger Don't
```css
.header-background {
  background: blue;
  margin: 0 0 0 10px;
}
```
!!!

!!!success Do
```css
.header-background {
  background-color: blue;
  margin-left: 10px;
}
```
!!!

### Declaration Ordering

Declarations should be ordered alphabetically or by type (Positioning, Box model, Typography, Visual). Whichever order is chosen, it should be consistent across all files in the project.

If you're using Sass, use this ordering:

1. `@extend`
2. Regular styles (allows overriding extended styles, **alphabetical order**)
3. `@include` (to visually separate mixins and placeholders) and media queries
4. Nested selectors

### Nesting

Nesting has changed the lives of many, but like everything in life, abusing good things will ultimately be bad. Nesting makes the code more difficult to read and can create confusion. Too much nesting also adds unnecessary specificity, forcing us to add the same or greater specificity in overrides. We want to avoid selector nesting and over-specificity as much as possible.

If you're using PostCSS or Sass **nesting is required** in the following cases, because it will make the code easier to read:

- pseudo-classes
- pseudo-elements
- component states
- media queries

### Selector Naming

Selectors should be lowercase, and words should be separated with hyphens. Please avoid camelcase, but underscores are acceptable if they're being used for BEM or another syntax pattern that requires them. The naming of selectors should be consistent and describe the functional purpose of the styles they're applying.

!!!danger Don't
```css
.btnRed {
  background-color: red;
}
```
!!!

!!!success Do
```css
.btn-warning {
  background-color: red;
}
```
!!!

For components that could possibly conflict with plugins or third-party libraries, use vendor prefixes. Don't use names that can be blocked by adblockers (e.g. “advertisement”). When in doubt, you can check a class name against [this list](https://easylist-downloads.adblockplus.org/easylist.txt) to see if it's likely to be blocked.

---

## Documentation

Code documentation serves two purposes: it makes maintenance easier and it makes us stop and think about our code. If the explanation is too complex, maybe the code is overly complex too. Documenting helps keep our code simple and maintainable.

### Commenting

We follow WordPress official commenting standards. Do not hesitate to be very verbose with your comments, especially when documenting a tricky part of your CSS. Use comment blocks to separate the different sections of a partial, and/or to describe what styles the partial covers:

```css
/**
 * Section title
 *
 * Description of section
 */
```

For single selectors or inline comments, use this syntax:

```css
/* Inline comment */
```

Make sure to comment any complex selector or rule you write. For example:

```css
/* Select list item 4 to 8, included */
li:nth-child(n+4):nth-child(-n+8) {
  color: red;
}
```

---

## Performance

### Network Requests

- Limit the number of requests by concatenating CSS files and encoding sprites and font files to the CSS file
- Minify stylesheets
- Use GZIP compression when possible Automate these tasks with a PHP or/and JavaScript build process

### CSS Specificity

Stylesheets should go from less specific rules to highly specific rules. We want our selectors specific enough so that we don't rely on code order, but not too specific so that they can be easily overridden.

For that purpose, **classes** are our preferred selectors: pretty low specificity but high reusability.

Avoid using `!important` whenever you can. Use [efficient selectors](https://csswizardry.com/2011/09/writing-efficient-css-selectors/).

!!!danger Don't
```css
div div header#header div ul.nav-menu li a.black-background {
  background: radial-gradient(ellipse at center,  #a90329 0%,#8f0222 44%,#6d0019 100%);
}
```
!!!

### Inheritance

Fortunately, many CSS properties can be inherited from the parent. Take advantage of inheritance to avoid bloating your stylesheet but keep specificity in mind.

!!!danger Don't
```css
.sibling-1 {
  font-family: Arial, sans-serif;
}
.sibling-2 {
  font-family: Arial, sans-serif;
}
```
!!!

!!!success Do
```css
.parent {
  font-family: Arial, sans-serif;
}
```
!!!

### Reusable Code

Styles that can be shared, should be shared (aka DRY, Don't Repeat Yourself). This will make our stylesheets less bloated and prevent the browser from doing the same calculations several times. Make good use of Sass placeholders. (also see [Inheritance](/css/syntax/#inheritance)).

### CSS Over Assets

Don't add an extra asset if a design element can be translated in the browser using CSS only. We value graceful degradation over additional HTTP requests.

Very common examples include gradients and triangles.

### Animations

It's a common belief that CSS animations are more performant than JavaScript animations. A few articles aimed to set the record straight (linked below).

- If you're only animating simple state changes and need good mobile support, go for CSS (most cases).
- If you need more complex animations, use a JavaScript animation framework or `requestAnimationFrame`.

Limit your CSS animations to 3D transforms (translate, rotate, scale) and opacity, as those are aided by the GPU and thus smoother. Note that too much reliance on the GPU can also overload it.

!!!danger Don't
```css
#menu li{
  left: 0;
  transition: all 1s ease-in-out;
}

#menu li:hover {
  left: 10px
}
```
!!!

Always test animations on a real mobile device loading real assets, to ensure the limited memory environment doesn't tank the site. **Note:** [WCAG 2.1, Guideline 2.3.2 Motion from Animation](https://www.w3.org/WAI/WCAG21/quickref/#animation-from-interactions) dictates that, “Motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.”

---

## Futher Reading

- [CSS animations performance: the untold story](https://greensock.com/css-performance)
- [Myth Busting: CSS Animations vs. JavaScript](https://css-tricks.com/myth-busting-css-animations-vs-javascript/)
- [CSS vs. JS Animation: Which is Faster?](https://davidwalsh.name/css-js-animation)
- [Why Moving Elements With Translate() Is Better Than Pos:abs Top/left](https://www.paulirish.com/2012/why-moving-elements-with-translate-is-better-than-posabs-topleft/)
- [CSS vs JavaScript Animations](https://developers.google.com/web/fundamentals/look-and-feel/animations/css-vs-javascript?hl=en)
- [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)

