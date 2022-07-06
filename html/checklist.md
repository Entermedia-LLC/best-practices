---
label: Checklist
icon: checklist
order: 750
---

All items in the Front-End Checklist are required for the majority of the projects, but some elements can be omitted or are not essential.

---

## Meta Tags

Below are the essential elements for any web document (websites/apps):

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<!--
  The above 2 meta tags *must* come first in the <head>
  to consistently ensure proper document rendering.
  Any other head element should come *after* these tags.
 -->
<title>Page Title</title>
```

### Recommended Meta Tags

```html
<!-- Viewport for responsive web design -->
<meta
  name="viewport"
  content="width=device-width, initial-scale=1, viewport-fit=cover"
/>

<!-- Meta Description -->
<meta
  name="description"
  content="Description of the page less than 150 characters"
/>

<!-- Helps prevent duplicate content issues -->
<link
  rel="canonical"
  href="http://example.com/2017/09/a-new-article-to-read.html"
/>
```

### Favicon

Instead of serving dozens of icons, [all you need is just five icons](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) and one JSON file.

For the browser using HTML:

```html
<link rel="icon" href="/favicon.ico" sizes="any" /><!-- 32×32 -->
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" /><!-- 180×180 -->
<link rel="manifest" href="/manifest.webmanifest" />
```

And in your web app manifest:

```json manifest.webmanifest
{
  "icons": [
    { "src": "/icon-192.png", "type": "image/png", "sizes": "192x192" },
    { "src": "/icon-512.png", "type": "image/png", "sizes": "512x512" }
  ]
}
```

### Open Graph & Social Media Meta Tags

#### Open Graph Meta Tags

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
<!-- Next tags are optional but recommended -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

#### Twitter Meta Tags

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Content Title" />
<meta
  name="twitter:description"
  content="Content description less than 200 characters"
/>
<meta name="twitter:image" content="https://example.com/image.jpg" />
```
