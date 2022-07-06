---
label: Coding Standards
icon: check-circle
order: 950
---

At Entermedia, we aim to create the best possible experience for both our clients and their customers; not for the sake of using cool, bleeding edge technologies that may not have widespread browser support. Our markup embodies this approach.

Markup is intended to define the structure and outline of a document and to offer semantic structure for the document's contents. Markup should not define the look and feel of the content on the page beyond the most basic structural concepts such as headers, paragraphs, and lists.

At Entermedia, we employ progressive enhancement to ensure that the sites we build for our clients are accessible to as many users as possible.

Progressive enhancement means building a website that is robust, fault tolerant, and accessible. Progressive enhancement begins with a baseline experience and builds out from there, adding features for browsers that support them. It does not require us to select supported browsers or revert to table-based layouts. Baselines for browser and device support are set on a project-by-project basis.

---

## Avoid Cookies

Safari browser’s Intelligent Tracking Prevention (ITP) 2.1 sets the expiration period at 7 days for all first-party cookies set by in-line (or tag management solution injected) vendor JavaScript libraries like Google Analytics’ analytics.js.

Authentication cookies (secure and HTTP-only) which have been properly implemented won’t be affected by the 7-day cap. These cookies should be deployed using the `Set-Cookie` header in the HTTP response and inaccessible via JavaScript’s `document.cookie` API.

Solutions for other types of cookies include:

1. Using `localStorage` to persist the unique identifier (i.e. the client ID) instead of relying solely on the `_ga` cookie
2. Setting the `_ga` cookie with the HTTP response, rather than with JavaScript Keep in mind that these solutions come with caveats: using `localStorage` only works on the same domain and would not work for cross-domain tracking.

As an alternative to local storage, server-side tracking via the proxy layer in Cloudflare is probably the best option for clients with significant traffic from Safari.
