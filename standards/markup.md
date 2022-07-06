---
label: Markup
icon: code
---

## Semantic Markup

At Entermedia, we pride ourselves in writing clean, semantic markup. Semantic markup can be defined as: “the use of HTML markup to reinforce the semantics, or meaning, of the information in web pages rather than merely to define it's presentation or look. Semantic HTML is processed by traditional web browsers as well as by many other user agents. CSS is used to suggest its presentation to human users” (definition from Wikipedia - [https://en.wikipedia.org/wiki/Semantic_HTML](https://en.wikipedia.org/wiki/Semantic_HTML)).

Semantic elements are elements with clearly defined meaning to both the browser and the developer. Elements like `<header>`, `<nav>`, `<footer>`, or `<article>` do a much better job of explaining the content that is contained within the element than `<span>` or `<div>`. This does not mean that we do not use `<div>`s in our markup, only that we prefer the right tool (or in this case semantic element) for the job.

### Minimal & Valid

Websites should be written using the least amount of markup that accomplishes the goal. In the interest of engineering maintainable projects, it's imperative that two completely different types of readers are accounted for: humans and browsers. Writing minimal markup makes it easier for developers to read and understand in a code editor. Valid markup is easier for browsers to process.

We test our markup against the [W3C validator](https://validator.w3.org/) to ensure that it is well formed and provides a fairly consistent experience across browsers.

### Optimize Readability

At Entermedia, we often work with large codebases. As such, it's important to optimize markup for human readability. This allows developers to quickly rotate in and out of projects, eases onboarding processes, and improves code maintainability.

**Always use tabs for indentation.** Doing this allows developers to set their editor preferences for tab width.

When mixing PHP and HTML together, indent PHP blocks to match the surrounding HTML code. Closing PHP blocks should match the same indentation level as the opening block. Similarly, keep PHP blocks to a minimum inside markup. Doing this turns the PHP blocks into a type of tag themselves. Use colon syntax for PHP loops and conditionals so that it's easier to see when a certain loop ends within the block of markup.

Examples:

```php Bad
<ul>
<?php
foreach( $things as $thing ) {
  echo '<li>' . $thing . '</li>';
}
?>
</ul>
```

```php Good
<ul>
  <?php foreach( $things as $thing ) : ?>
   <li><?php echo $thing; ?></li>
  <?php endforeach; ?>
</ul>
```

### Avoid Unnecessary Presentational Markup

As part of our mission to write clean, semantic markup, avoid writing unnecessary presentational markup. Markup should always dictate what the content is, and CSS should dictate how the content looks. Mixing these two concerns makes maintaining code more difficult.

This is not to say that multiple classes on an element are unacceptable. Contextual modifier classes are certainly acceptable and encouraged.

### Schema.org Markup

[Schema.org](https://schema.org/) is the result of collaboration between Google, Bing, Yandex, and Yahoo! to provide the information their search engines need to understand content and provide the best search results possible. Adding Schema.org data to your HTML provides search engines with structured data they can use to improve the way pages display in search results.

For example, if you've ever searched for a restaurant and found that it had star reviews in its search results, this is a product of Schema.org and rich snippets.

Schema.org data is intended to tell the search engines what your data _means_, not just what it says.

To this end, we use Schema.org data where relevant and reasonable to ensure that our clients have the best search visibility that we can provide.

Schema.org data can be provided in two forms: “microdata” markup added to a page's structure or a JSON-LD format. Google prefers developers adopt JSON-LD, which isolates the data provided for search engines from the markup meant for user agents. Even though the JSON-LD spec allows linking to data in an external file, search engines currently only parse JSON-LD data when it appears within a `<script type="application/ld+json">` tag.

Schema.org markup should be validated against the [Google Structured Data Testing Tool](https://search.google.com/structured-data/testing-tool/u/0/).

### Classes & IDs

In order to create more maintainable projects, developers should use classes for CSS and IDs for JavaScript. Separating concerns allows markup to be more flexible without risking breaking both styles and any JavaScript that may be attached to the element on which someone is working.

When using JavaScript to target specific elements in your markup, prefix the ID of the element that is being targeted with `js-`. This indicates the element is being targeted by JavaScript for your future self as well as other developers that may work on the project.

---

## Feature Detection and Polyfills

### Polyfills

When writing markup that does not have wide browser support, using polyfills can help bring that functionality to those older browsers. Providing support for older browsers is incredibly important to the business objectives of our clients. In an effort to prevent code bloat, we only provide polyfills for features that are functionally critical to a site.

### Feature Detection

At Entermedia, the concept of feature detection is used to test browser support for new features that do not yet have full support across the board. The concept of feature detection is to test if a feature is supported by the browser and if not supported, conditionality run code to provide a similar experience with browsers that do support the feature. While popular [feature detection libraries](https://modernizr.com/) exist, there are [feature detection techniques](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#JavaScript) for JavaScript and [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) `at-rule` for CSS that can be utilized.
