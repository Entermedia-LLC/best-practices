---
label: Performance
icon: rocket
---

---

## Images and Media

- Images should be optimized for Next-Gen formats. JPEG 2000, JPEG XR, and [WebP](https://developers.google.com/speed/webp) are image formats that have superior compression and quality characteristics compared to their older JPEG and PNG counterparts.
- Crop images appropriately, you do not need to create a crop for every size but in some cases a few extra crops to handle mobile proportions can be useful.
- Images should be served using srcset so that smaller sizes can be shown for smaller viewports.
- All images implemented through code should [contain a width and height attribute](https://web.dev/optimize-cls/#images-without-dimensions). This is especially important in avoiding Content Layout Shift issues.
- Assets, in particular images, should be served through a CDN.
- Images, Videos and iFrames should be lazy loaded. Please note that [WordPress will handle browser level lazy loading](https://make.wordpress.org/core/2021/02/19/lazy-loading-iframes-in-5-7/) using [native lazy load](https://web.dev/native-lazy-loading/). In order for this to take effect, the width and height should be set on the tag.
- If you’re not seeing performance benefits by lazy-loading IFrames, look into using the [Facade Pattern](https://web.dev/third-party-facades/)
- Hosting videos directly should be avoided and can be problematic at scale. Entermedia recommends a dedicated hosting service such as Brightcove, Vimeo, YouTube, Dailymotion, etc.

---

## Fonts

- Fonts used across the site should be [preloaded](https://web.dev/codelab-preload-web-fonts/).
- Whenever available, WOFF2 font formats should be used for better compression with a WOFF fallback.
- Subset Font files if you have them available locally.
- Investigate using `unicode-range` to subset fonts if they are being served locally or through [Google Fonts](https://developers.google.com/fonts/docs/getting_started#specifying_script_subsets).
- Fonts should either be served locally or from a single foundry (don’t mix Google fonts and TypeKit, pick one).

---

## JavaScript and CSS

- Write JavaScript and CSS with the “Mobile First” approach in mind.
- Where viable, ensure that JavaScript and CSS assets are not [render-blocking](https://web.dev/render-blocking-resources/) the browser pipeline. This is mainly achieved by deferring or setting scripts to load asynchronously while other assets are loading.
- All JavaScript and CSS should be minified.
- Standalone site features should be broken off into isolated entry points so we don’t have to load more CSS/JS on pages that will never use it.
- Be aware of any additional requests 3rd-party libraries are making on page load. This can severely impact performance scores.
- Where possible, defer loading of libraries that are not necessary for a stable user experience until after initial load.
- Critical rendering path should be considered. Scripts should be loaded in the footer and external scripts should contain the [‘async’ attribute](https://www.w3schools.com/tags/att_script_async.asp) or be loaded at the bottom of the document where they can’t be concatenated into a single file. Internal scripts without an implicit loading order should contain the [‘defer’ attribute](https://www.w3schools.com/tags/att_script_defer.asp) if possible. Note that scripts using the ‘defer’ attribute can be loaded in the head tag as they will be fetched asynchronously while being executed after the HTML is parsed.

---

## Design and UX

As part of design reviews, engineering teams should provide feedback on the following:

- Avoid using large media objects for decorative purposes if no business value is present. If large media objects are used, consider only loading them on larger screen sizes.
- Avoid structural page changes based on the browser width as they require extra scripting and can slow performance.
- Err on the side of typefaces that offer WOFF2 font files, as they are quicker to load.
- Avoid auto playing videos, particularly above the fold and on mobile screens.

---

## Advertising

- All ads should be lazy loaded.
- Keep ads above the fold to a minimum.

---

## Systems

- Use HTTP/2 enabled hosting whenever possible.
- GZIP compression should be active.

---

## Third Party Plugins and Scripts

- Third party plugins can play a part in poor site performance. Always audit a plugin for performance issues before adding it to a project. Paying careful attention to the server side impacts of slow non-cached queries and how data is being stored to the weight of the JavaScript and CSS being included on every page.
- Third party scripts, particularly those being loaded for the purpose of analytics, embeds, helper libraries and advertising can have a major impact on site performance. Oftentimes, these scripts may be loaded through Google Tag Manager rather than directly in the page using script tags making it difficult to anticipate the impact on a project. Ensure that site performance is being tested ahead of any launch with all third party scripts loaded. If any scripts result in a negative impact on performance, ensure to flag this with your team.

!!!primary Note
When starting a new project or inheriting an existing one, take before screenshots of the Google PSI report so performance can be compared before-and-after.
!!!

---

## Core Web Vitals

[Web Vitals](https://web.dev/vitals/), a performance initiative by Google, provides us a set of rules, concepts and metrics in order to serve users with the best web experience possible. Performance measuring in the past has often landed in the domain of engineers. However with the introduction of Web Vitals, site owners can now gain an understanding of the performance impacts and shortcomings of their sites without a deep understanding of web technologies. Web Vitals aim to simplify understanding and provide pertinent guidance to site owners and engineers alike in order to optimize user experience.

At Entermedia, we closely monitor [Core Web Vitals](https://web.dev/vitals/#core-web-vitals) (a subset of Web Vitals) during development which was introduced in June 2021 into Google’s ranking algorithm. Ensuring healthy Web Vitals throughout the build and/or maintenance is of paramount importance and requires a shift not only in how we go about building components, but in maintaining a high level of quality across overall user experience.

### Cross Discipline Approach

At Entermedia we acknowledge that achieving healthy Web Vitals across the board is not siloed to one discipline. Ensuring healthy Web Vitals requires a cross discipline approach spanning Front-end Engineering, Web Engineering, Systems, Audience and Revenue and Visual Design.

As defined by Google, the 3 Core Web Vitals are currently:

- [Largest Contentful Paint (a.k.a. LCP)](https://web.dev/lcp/)
- [Cumulative Layout Shift (a.k.a. CLS)](https://web.dev/cls/)
- [First Input Delay (a.k.a. FIP)](https://web.dev/fid/)

### Largest Contentful Paint

Largest Contentful Paint is an important metric for measuring perceived user performance, specifically **loading performance**. This metric reports the render time of the largest element on the page **that is visible to the user**.

> An LCP score of 2.5 seconds or less is considered to be a conducive measurement for good user experience.

LCP is measured in seconds (s) and can be tracked against the following DOM elements:

- `<img>`
- `<image>` - inside an SVG
- `<video>`
- An element with a background-image
- Any element that is considered to be block-level (`display: block`)

#### How to diagnose Largest Contentful Paint

The quickest way to diagnose the Largest Contentful Paint element on the page is by following these steps:

1. Open **Google Chrome**
2. Open **Chrome DevTools**
3. Select the **Performance** Tab
4. Check the **Web Vitals** checkbox
5. Click the **Reload** button or hit ⌘ ⇧ E shortcut
6. Scroll down to **Timings**
7. Select the green **LCP** marker
8. In **Summary** scroll down to “Related Node”
9. Click the **node**listed and it will be highlighted in the **DOM**.

#### How to fix Largest Contentful Paint

Once you have diagnosed which element on the page has the Largest Contentful Paint, the next step is to figure out why. There are 3 main factors that contribute to LCP:

1. Slow server response times.
2. Render-blocking JavaScript and CSS.
3. Resource load times.

It’s important that your server is optimized in a way that doesn’t have a domino effect on other vitals. To measure the “speed” of your server you can track the [Time to First Byte (TTFB)](https://web.dev/time-to-first-byte) vital.

Here are some high-level guidelines for ensuring Largest Contentful Paint occurs as fast as possible:

- Serve assets (Images, JavaScript, CSS, Video) over a CDN.
- Ensure that there is a well-thought out caching strategy in place.
- Use `<link rel="preconnect">` and `<link rel="dns-prefetch">` for assets that originate at third-party domains.
- Ensure that scripts and styles are carefully audited to ensure that there are no render-blocking patterns in order to improve First Contentful Paint, which will consequently improve Largest Contentful Paint.
- Ensure that your CSS bundles are minified and deferred if the CSS rules do not apply above the fold. You can also use Chrome’s “Coverage” tab to identify just how much of your CSS bundle is being utilized on the page.
- Ensure that your JS bundles are minified, compressed and if the functionality is not required above-the-fold, lazy-loaded.

The time it takes the browser to fetch resources like images or videos can also have an effect on LCP:

- Optimize and compress all images on the site - ensure images are not greater than twice their contained real-estate.
- Make sure that images are being served over a CDN, you’re serving formats like WebP or AVIF and you’re using responsive images techniques.
- For images that find themselves in Hero components, `preload` the image resource ahead of time. For [responsive images](https://web.dev/preload-responsive-images/) you will need to add the `imagesrcset` and `imagesizes` attributes: `<link rel="preload" as="image" imagesrcset=" image-400.jpg 400w, image-800.jpg 800w, image-1600.jpg 1600w" imagesizes="100vw" />`.
- Check with Systems or Web Engineering that the server is utilizing compression algorithms like Gzip or Brotli.

### Cumulative Layout Shift

Cumulative Layout Shift measures the **visual stability** of a web page. CLS can be an elusive metric to get right as elements targeted as having a layout shift are often not the root cause. By ensuring limited layout shifts on the page, visitors will be presented with a smooth and delightful user experience.

> A CLS score of 0.1 or less is considered to be a conducive measurement for good user experience.

It’s important to understand that the CLS metric does not just measure one offending element. The CLS score reported is the sum total of all layout shifts on the page. A layout shift occurs any time a visible element (i.e above the fold), changes its position from one rendered frame to the next.

To be clear, a layout shift is only considered a problem if it’s **unexpected** - so a shift in an elements position that was triggered on purpose by a user is acceptable.

It’s useful to know that a layout shift can be caused by the following events:

- A change in the position of a DOM element
- A change in size of the dimensions of a DOM element
- Inserting or removing DOM elements through JavaScript
- CSS / JS animations that would trigger Reflow (recalculation of layout)

Considering the above, it would be plausible that nearby DOM elements could then change their position and dimensions based on another elements movement.

#### How to diagnose Cumulative Layout Shift

The quickest way to diagnose an element that has undergone a layout shift is by following these steps:

1. Open **Google Chrome**
2. Open **Chrome DevTools**
3. Select the **Performance** Tab
4. Check the **Web Vitals** checkbox
5. Click the **Reload** button or hit `⌘ ⇧ E` shortcut
6. Scroll down to **Experience**
7. If there is a Layout Shift on the page, Chrome will add a red bar with “Layout Shift” as the label.
8. In **Summary** scroll down to the “Moved from” / “Moved to” section.
9. Hover over each “Location” / “Size” label and Chrome will highlight the offending element on the page.

As an alternative, you can also diagnose Layout Shifts on the page by:

1. Open **Google Chrome**
2. Open **Chrome DevTools**
3. Hit ⌘ ⇧ P to open the actions console.
4. Start typing “Rendering” until the prompt suggests: “Show Rendering”, hit Enter.
5. A dialog will appear at the bottom of the DevTools window.
6. Check “Layout Shift Regions” and refresh the page.
7. All elements that have been identified as triggering a layout shift will be highlighted.
