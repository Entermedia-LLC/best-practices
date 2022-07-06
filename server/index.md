---
label: Servers & Hosting
icon: ellipsis
order: 400
---

## Performance

At Entermedia, we understand the importance of performance in delivering a great user experience and ensuring that content is optimized for search engine rankings. As the web and application development has evolved, feature rich content can be problematic and slow to load, particularly on mobile devices. It is more important than ever to pay careful consideration towards performance when designing and engineering solutions.

There are multiple factors to take into account when considering performance on a project. Third party embeds or scripts can often have a negative impact on performance, but in some cases the inherent value that they bring may justify the performance impact incurred.

!!!primary Important
While performance is always important, actual needs vary by website. For example, an internal company tool might not place as much importance on it as an online store. As such, Entermedia has developed these baseline performance best practices to be implemented on all our projects. On some projects more will be done for performance, but we strive to achieve this baseline no matter what. Also worth mentioning is we don’t have any sort of standard “numbers” e.g. core web vitals, PSI score, or TTFB. This is because there is no one number that can apply to all websites.
!!!

### Baseline Performance Best Practices

#### Caching

Caching is a key aspect in reaching optimal performance both from a server and browser optimization perspective, below are caching approaches:

- Ensure all static assets have cache busters in the form of either a version or fingerprint in the filename or unique query string in the URL. This needs to be implemented along with a cache-control header max-age of at least 1 month but optimally 1 year.
- A CDN is highly recommended, most popular CDN’s may offer page caching, browser caching and image optimizations.
- Page caching should be set up, a lot of common hosting companies including WP Engine and WordPress VIP offer full page caching.
- Object caching should be leveraged where applicable on the server.
- All projects should have a [manifest file](https://web.dev/add-manifest/) to download static assets that will be rarely updated.
