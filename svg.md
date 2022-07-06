---
label: SVG
icon: image
order: 550
---

SVG has become a prevalent means for displaying rich vector graphics. SVG images are great for graphics with well-defined lines and simple color palettes that can be defined algorithmically, e.g. logos, iconography, and illustrations. Here are a few known benefits of SVG:

- **Scalability** - They look great on retina displays and at any size, i.e. they're resolution independent.
- **File Size** - Small file size and compresses well.
- **Styling** - Manipulate fill, stroke, and even animate.

Be mindful that SVGs have potential limitations as well:

- Adding unvetted SVG graphics to a page has the potential to introduce a security vulnerability. This is why WordPress does not allow uploading of SVG by default. Read: [SVG uploads in WordPress (the Inconvenient Truth)](https://bjornjohansen.no/svg-in-wordpress) for more information.
- SVG is **not** ideal for photographic images or images with complex visual data. In this case, raster formats (JPG, PNG, GIF) will be a better choice.
- Raster images should not be converted to SVG. It will likely result in a raster image being embedded within the SVG document, which will not provide the same affordances (i.e. - CSS manipulation) as a genuine SVG. For further reading on vector vs. raster formats, and when to use each: [Adding vector graphics to the Web](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web).

---

## SVG Sprites

Combining SVG images in a single file (usually called `svg-defs.svg`) has the benefit of helping limit HTTP requests within a document that contains multiple icons. An SVG sprite file can be embedded within a document and referenced within the template source with a `<use>` element. The creation of this icon system should be automated through your build process. Read [Icon Systems with SVG Sprites](https://css-tricks.com/svg-sprites-use-better-icon-fonts/) for more information.

---

## SVG embedded in HTML

When placing an SVG in markup (i.e. inline) be sure to use the following guidelines:

- If the SVG is purely **decorative**
  - An empty alt="" can be used: `<img alt="">,` or
  - Use ARIA attributes to hide the element from assistive technologies: `<svg aria-hidden="true">`
- If the SVG is **meaningful** then use `<title>` and possibly even `<desc>` or `aria-label` to describe the graphic. Also, be sure to add an `id` to each element, and appropriate ARIA to overcome a known bug in [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=231654&q=SVG%20%20title%20attribute&colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified) and [Firefox](https://bugzilla.mozilla.org/show_bug.cgi?id=1151648).
  ```html
  <!-- role="img" to exclude image from being traversed by certain browsers w/ group role -->
  <svg role="img" aria-labelledby="uniqueTitleID uniqueDescID">
    <title id="uniqueTitleID">The Title</title>
    <desc id="uniqueDescID">Description goes here...</desc>
  </svg>
  ```
- Use `aria-label` if the SVG is linked and has no supporting text.
  ```html
  <a
    href="http://twitter.com/entermedia"
    aria-label="Follow Entermedia on Twitter"
  >
    <svg><use xlink:href="#icon-twitter"></use></svg>
  </a>
  ```
- Use [media queries to provide fallbacks for Windows and High Contrast Mode](https://css-tricks.com/accessible-svgs/#article-header-id-20).

---

## Optimization

Many tools for creating SVG are notorious for including unnecessary markup. We recommend running all SVG through [SVGO(MG)](https://jakearchibald.github.io/svgomg/) or using tooling, like [gulp-svgmin](https://github.com/ben-eb/gulp-svgmin).

---

## Further Reading

- [SVG Tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
- [An Overview of SVG Sprite Creation Techniques](https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/)
- [Using ARIA to enhance SVG accessibility](https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/)
- [Accessible SVG Icons with Inline Sprites 24 Accessibility](https://www.24a11y.com/2018/accessible-svg-icons-with-inline-sprites/)
- [Accessible SVG test page](https://weboverhauls.github.io/demos/svg/)
- [Creating Accessible SVGs](https://www.deque.com/blog/creating-accessible-svgs/)
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/)
