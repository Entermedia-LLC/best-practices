---
label: Accessibility
icon: light-bulb
---

At a minimum, all Entermedia projects should pass [WCAG 2.1 Level A Standards](https://www.w3.org/WAI/intro/wcag). A baseline compliance goal of Level A is due to [WCAG guideline 1.4.3](https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast) which requires a minimum contrast ratio on text and images, as Entermedia does not always control the design of a project.

For design projects and projects with a global marketplace (companies with entities outside the US), Level AA should be the baseline goal. The accessibility level is elevated for global markets to properly comply with [EU Functional Accessibility Requirements](http://mandate376.standards.eu/standard/technical-requirements/#9), which aligns closely with WCAG 2.0 Level AA. Having direct access to the designer also allows for greater accessibility standards to be achieved.

While [Section 508](https://www.section508.gov/) is the US standard, following the guidance of WCAG 2.0 will help a project pass Section 508 and also maintain a consistent internal standard. If a project specifically requires Section 508, additional confirmation testing can be done.

---

## States and Properties

ARIA also allows us to describe certain inherent properties of elements, as well as their various states. Imagine you've designed a site where the main content area is split into three tabs. When the user first visits the site, the first tab will be the primary one, but how does a screen reader get to the second tab? How does it know which tab is active? How does it know which element is a tab in the first place?

ARIA attributes can be added dynamically with JavaScript to help add context to your content. Thinking about the tabbed content example, it might look something like this:

```html
<ul role="tablist">
  <li role="presentation">
    <a href="#first-tab" role="tab" aria-selected="true" id="tab-panel-1"
      >Panel 1</a
    >
  </li>
  <li role="presentation">
    <a href="#second-tab" role="tab" aria-selected="false" id="tab-panel-2"
      >Panel 2</a
    >
  </li>
</ul>

<div role="tabpanel" aria-hidden="false" aria-labelledby="tab-panel-1">
  <h2 id="first-tab">Tab Panel Heading</h2>
</div>

<div role="tabpanel" aria-hidden="true" aria-labelledby="tab-panel-2">
  <h2 id="second-tab">Second Tab Panel Heading</h2>
</div>
```

You can see how effortless it is to make our tabbed interface accessible to screen readers. Be sure to add visibility attributes like `aria-hidden` with JavaScript. If it is added manually in HTML and JavaScript doesn't load, the content will be completely removed from screen readers.

---

## Accessible Forms

Forms are one of the biggest challenges when it comes to accessibility. Fortunately, there are a few key things that we can do to ensure they meet accessibility standards:

Each form field should have its own `<label>`. The label element, along with the `for` attribute, can help explicitly associate a label to a form element adding readability for screen readers and assistive technology.

Form elements should also be logically grouped using the `<fieldset>` element. Grouped form elements can be helpful for users who depend on screen readers or those with cognitive disabilities.

Finally, we should ensure that all interactive elements are keyboard navigable, providing easy use for people with vision or mobility disabilities (or those not able to use a mouse). In general, the tab order should be dictated by a logical source order of elements. If you feel the need to change the tab order of certain elements, it likely indicates that you should rework the markup to flow in a logical order or have a conversation with the designer about updates that can be made to the layout to improve accessibility.

---

## Bypass Blocks

[Bypass blocks](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html) are HTML flags within a document that allow users that rely on screen readers, keyboard navigation or other assistive technologies to bypass certain page elements or skip to a specific section of a page with ease. They most often manifest themselves in the form of [skip links](https://webaim.org/techniques/skipnav/) and [ARIA landmark roles](https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page).

### Skip Links

Skip links are ideally placed immediately inside of the `<body>` tag so that they are discovered and announced as early as possible.

While these links are often used to skip to a page's main content section they can link to different sections of the page if necessary and several links can be added if multiple areas of interest are in the page.

An example of what a skip link might look like:

```html
<a class="skip-link screen-reader-text" href="#main">Skip to content</a>
```

Skip links make use of CSS to hide them from sighted users while keeping them accessible for screen readers. Usually the styles are attached to a `screen-reader-text` class of some kind. This CSS is used to position the links off the screen then use `:focus` styles to make the link visible for sighted keyboard users.

Due to some browsers [not moving keyboard focus when they move visual focus](https://axesslab.com/skip-links/), it is essential to also enhance this feature with JavaScript. The popular Underscores starter theme [came bundled with a good option](https://github.com/Automattic/_s/blob/cf4410cb1fe413324ed1efc9f5ba094423fdd86c/js/skip-link-focus-fix.js) that can be used as a starting point if you need to support browsers with this issue.

### ARIA Landmark Roles

ARIA is a descriptive layer on top of HTML to be used by screen readers. It has no effect on how elements are displayed or behave in browsers. We use these ARIA Landmark Roles (banner, navigation, main, etc.) to provide a better experience to users with disabilities. Landmark role are another type of bypass block. Screen readers can see these as major document regions and navigate to them directly without having to parse through all the content in between.

Landmark roles should be used with skip links (not instead of), so we can be sure and offer support for older assistive technology platforms that may not yet support the specification.

```html Example
<header role="banner">
  { Site Banner }
  <nav role="navigation">{ Main Navigation }</nav>
</header>
<main role="main">{ Main content }</main>
<footer role="contentinfo">{ Site Footer }</footer>
```

---

## Media

If accessibility starts with HTML, media is how we make it come alive. Creating accessible media is not only the responsibility of an editorial team, but it is our responsibility as engineers to ensure the systems we put in place promote and support the creation of accessible media. It can generally be put into three buckets: images, audio, and video. When looking for direction in these areas we turn to the rules laid out by the [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/).

To read more about any of the guidelines outlined in this section, please visit the [WCAG quickref document](https://www.w3.org/WAI/WCAG21/quickref/). Some of the more aggressive guidelines in Level AAA are not mentioned here. Be sure to check with your project lead about the accessibility compliance level you need to follow.

### Images

Images are the most common for of media we encounter in our day to day work. WCAG guidelines pertaining to images are: [1.1.1 Non-text content](https://www.w3.org/WAI/WCAG21/quickref/#non-text-content) and [1.4.4 Images of text](https://www.w3.org/WAI/WCAG21/quickref/#images-of-text). Following these two rules will ensure that our images always have alternative text and any time text is represented in an image there is always a purely text-based version of it available for users of assistive technology.

### Audio & Video

Between audio and video, we certainly deal with video more often, but there are some WCAG guidelines that encompass both, such as: [1.2.2 Audio/Video-only](https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded) and [1.2.3 Audio Descriptions or Media Alternative](https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded). Both these guidelines address the creation of text-based versions of the media being presented to a user. This typically comes in the form of an audio track on a video, or a transcript outputted on the page somewhere. As an aside, outputting a transcript will help the content get indexed by search engines, rather than just having the content inside a media element (audio/video).

#### Audio

Audio is an important part of the work we do; making that content accessible to all users is extremely valuable. Guideline [1.4.1 Audio Control](https://www.w3.org/WAI/WCAG21/quickref/#audio-control) is related to autoplaying audio. The general rule is: don't autoplay audio. However, if you do, and that audio is playing for more than three seconds 1.4.1 states that either a mechanism must be available to pause or stop the audio, or a mechanism must be available to control audio volume independently from the overall system volume level. This is important for any user with and auditory disorder.

#### Video

When putting video on the Web (that contains dialog), [guideline 1.2.2](https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded) states that captions must be present, without exception. While we can't always control the content that's placed on a site, we can be sure to guide clients towards a situation for compliance but suggesting transcription services. Other than alternative text, dealing with captions is the most common media accessibility issue you'll likely have to deal with.

---

## Testing

### Automated Testing

In most cases, maintaining baseline accessibility requirements for a project can be an automated process. While we can't test everything, and we still need some manual testing, there are certain tools that allow us to keep our finger on the pulse of a project's accessibility compliance.

Automating accessibility tests is easy with a tool like [pa11y](https://github.com/pa11y/pa11y), which is a command line tool that runs [HTML Code Sniffer](http://squizlabs.github.io/HTML_CodeSniffer/) over a URL.

It is easily installed through npm: `npm install pa11y --save-dev` and can be added into a `package.json` file as a separate npm script as to not collide with other build processes that may be running on a project:

```json
"scripts": {
    "pa11y": "pa11y --ignore notice https://projectname.test"
},
```

Running this process allows the engineer to be alerted if a code-level or design change violates the project's accessibility standards.

### Manual Testing

Automated testing will often only get you so far; that is why we also recommend getting a human's eye on the accessibility in a project and executing manual tests alongside any automation. This process is largely done by an engineer reviewing the interface in a browser or screen reader and involves running your project through all of the WCAG guidelines at the compliance level that is applicable to your specific project (A, AA, or AAA). The [WCAG Quickref](https://www.w3.org/WAI/WCAG20/quickref/) is a great place to see all these guidelines in one place. Internally, we also have a spreadsheet template to help manage this process.

Manual accessibility testing should be run in conjunction with automated testing to help identify all the potential areas of improvement on a project as well as resolve false-positives that may appear during the automated testing process. Tests should be run on a reasonable sample size of templates to help produce the most comprehensive analysis possible - preferably the same templates used in the automated testing process.

Combining automated and manual testing practices allows Entermedia to maintain a high level of compliance on all projects and it is critical to the work we do.
