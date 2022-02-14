// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
require("prismjs/components/prism-markup");
require("prismjs/components/prism-json");

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Markup | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1}>Markup</Headline>
        <Headline level={2} id="philosophy" showAnchor>
          Philosophy
        </Headline>
        <p>
          At Entermedia, we aim to create the best possible experience for both
          our clients and their customers; not for the sake of using cool,
          bleeding edge technologies that may not have widespread browser
          support. Our markup embodies this approach.
        </p>
        <p>
          Markup is intended to define the structure and outline of a document
          and to offer semantic structure for the document&apos;s contents.
          Markup should not define the look and feel of the content on the page
          beyond the most basic structural concepts such as headers, paragraphs,
          and lists.
        </p>
        <p>
          At Entermedia, we employ progressive enhancement to ensure that the
          sites we build for our clients are accessible to as many users as
          possible.
        </p>
        <p>
          Progressive enhancement means building a website that is robust, fault
          tolerant, and accessible. Progressive enhancement begins with a
          baseline experience and builds out from there, adding features for
          browsers that support them. It does not require us to select supported
          browsers or revert to table-based layouts. Baselines for browser and
          device support are set on a project-by-project basis.
        </p>
        <Headline level={2} id="accessibility" showAnchor>
          Accessibility
        </Headline>
        <p>
          It&apos;s important that our clients and their customers are able to
          use the products that we create for them. Accessibility means creating
          a web that is accessible to all people: those with disabilities and
          those without. We must think about people with visual, auditory,
          physical, speech, cognitive and neurological disabilities and ensure
          that we deliver the best experience we possibly can to everyone.
          Accessibility best practices also make content more easily digestible
          by search engines. Increasingly, basic accessibility can even be a
          legal requirement. In all cases, an accessible web benefits everyone.
        </p>
        <Headline level={3}>Accessibility Standards</Headline>
        <p>
          At a minimum, all Entermedia projects should pass{" "}
          <a
            href="https://www.w3.org/WAI/intro/wcag"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG 2.1 Level A Standards
          </a>
          . A baseline compliance goal of Level A is due to{" "}
          <a
            href="https://www.w3.org/WAI/WCAG20/quickref/#visual-audio-contrast-contrast"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG guideline 1.4.3
          </a>{" "}
          which requires a minimum contrast ratio on text and images, as
          Entermedia does not always control the design of a project.
        </p>
        <p>
          For design projects and projects with a global marketplace (companies
          with entities outside the US), Level AA should be the baseline goal.
          The accessibility level is elevated for global markets to properly
          comply with{" "}
          <a
            href="http://mandate376.standards.eu/standard/technical-requirements/#9"
            target="_blank"
            rel="noopener noreferrer"
          >
            EU Functional Accessibility Requirements
          </a>
          , which aligns closely with WCAG 2.0 Level AA. Having direct access to
          the designer also allows for greater accessibility standards to be
          achieved.
        </p>
        <p>
          While{" "}
          <a
            href="https://www.section508.gov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Section 508
          </a>{" "}
          is the US standard, following the guidance of WCAG 2.0 will help a
          project pass Section 508 and also maintain a consistent internal
          standard. If a project specifically requires Section 508, additional
          confirmation testing can be done.
        </p>
        <Headline level={3}>States and Properties</Headline>
        <p>
          ARIA also allows us to describe certain inherent properties of
          elements, as well as their various states. Imagine you&apos;ve
          designed a site where the main content area is split into three tabs.
          When the user first visits the site, the first tab will be the primary
          one, but how does a screen reader get to the second tab? How does it
          know which tab is active? How does it know which element is a tab in
          the first place?
        </p>
        <p>
          ARIA attributes can be added dynamically with JavaScript to help add
          context to your content. Thinking about the tabbed content example, it
          might look something like this:
        </p>
        <pre>
          <code className="language-html">{`<ul role="tablist">
  <li role="presentation">
      <a href="#first-tab" role="tab" aria-selected="true" id="tab-panel-1">Panel 1</a>
  </li>
  <li role="presentation">
      <a href="#second-tab" role="tab" aria-selected="false" id="tab-panel-2">Panel 2</a>
  </li>
</ul>

<div role="tabpanel" aria-hidden="false" aria-labelledby="tab-panel-1">
    <h2 id="first-tab">Tab Panel Heading</h2>
</div>

<div role="tabpanel" aria-hidden="true" aria-labelledby="tab-panel-2">
    <h2 id="second-tab">Second Tab Panel Heading</h2>
</div>`}</code>
        </pre>
        <p>
          You can see how effortless it is to make our tabbed interface
          accessible to screen readers. Be sure to add visibility attributes
          like <code>aria-hidden</code> with JavaScript. If it is added manually
          in HTML and JavaScript doesn&apos;t load, the content will be
          completely removed from screen readers.
        </p>
        <Headline level={3}>Accessible Forms</Headline>
        <p>
          Forms are one of the biggest challenges when it comes to
          accessibility. Fortunately, there are a few key things that we can do
          to ensure they meet accessibility standards:
        </p>
        <p>
          Each form field should have its own <code>&lt;label&gt;</code>. The
          label element, along with the <code>for</code> attribute, can help
          explicitly associate a label to a form element adding readability for
          screen readers and assistive technology.
        </p>
        <p>
          Form elements should also be logically grouped using the{" "}
          <code>&lt;fieldset&gt;</code> element. Grouped form elements can be
          helpful for users who depend on screen readers or those with cognitive
          disabilities.
        </p>
        <p>
          Finally, we should ensure that all interactive elements are keyboard
          navigable, providing easy use for people with vision or mobility
          disabilities (or those not able to use a mouse). In general, the tab
          order should be dictated by a logical source order of elements. If you
          feel the need to change the tab order of certain elements, it likely
          indicates that you should rework the markup to flow in a logical order
          or have a conversation with the designer about updates that can be
          made to the layout to improve accessibility.
        </p>
        <Headline level={3}>Bypass Blocks</Headline>
        <p>
          <a
            href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bypass blocks
          </a>{" "}
          are HTML flags within a document that allow users that rely on screen
          readers, keyboard navigation or other assistive technologies to{" "}
          <em>bypass</em> certain page elements or <em>skip</em> to a specific
          section of a page with ease. They most often manifest themselves in
          the form of{" "}
          <a
            href="https://webaim.org/techniques/skipnav/"
            target="_blank"
            rel="noopener noreferrer"
          >
            skip links
          </a>{" "}
          and{" "}
          <a
            href="https://www.w3.org/WAI/GL/wiki/Using_ARIA_landmarks_to_identify_regions_of_a_page"
            target="_blank"
            rel="noopener noreferrer"
          >
            ARIA landmark roles
          </a>
        </p>
        <Headline level={4}>Skip Links</Headline>
        <p>
          Skip links are ideally placed immediately inside of the{" "}
          <code>&lt;body&gt;</code> tag so that they are discovered and
          announced as early as possible.
        </p>
        <p>
          While these links are often used to skip to a page&apos;s main content
          section they can link to different sections of the page if necessary
          and several links can be added if multiple areas of interest are in
          the page.
        </p>
        <p>
          An example of what a skip link might look like in a template file:
        </p>
        <pre>
          <code className="language-html">{`<a class="skip-link screen-reader-text" href="#main">
  <?php esc_html_e( 'Skip to content', 'my-domain' ); ?>
</a>`}</code>
        </pre>
        <p>
          Skip links make use of CSS to hide them from sighted users while
          keeping them accessible for screen readers. Usually the styles are
          attached to a <code>screen-reader-text</code> class of some kind. This
          CSS is used to position the links off the screen then use{" "}
          <code>:focus</code> styles to make the link visible for sighted
          keyboard users.
        </p>
        <p>
          Due to some browsers{" "}
          <a
            href="https://axesslab.com/skip-links/"
            target="_blank"
            rel="noopener noreferrer"
          >
            not moving keyboard focus when they move visual focus
          </a>
          , it is essential to also enhance this feature with JavaScript. The
          popular Underscores starter theme{" "}
          <a
            href="https://github.com/Automattic/_s/blob/cf4410cb1fe413324ed1efc9f5ba094423fdd86c/js/skip-link-focus-fix.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            came bundled with a good option
          </a>{" "}
          that can be used as a starting point if you need to support browsers
          with this issue.
        </p>
        <Headline level={4}>ARIA Landmark Roles</Headline>
        <p>
          ARIA is a descriptive layer on top of HTML to be used by screen
          readers. It has no effect on how elements are displayed or behave in
          browsers. We use these ARIA Landmark Roles (banner, navigation, main,
          etc.) to provide a better experience to users with disabilities.
          Landmark role are another type of bypass block. Screen readers can see
          these as major document regions and navigate to them directly without
          having to parse through all the content in between.
        </p>
        <p>
          Landmark roles should be used with skip links (not instead of), so we
          can be sure and offer support for older assistive technology platforms
          that may not yet support the specification.
        </p>
        <p>Example:</p>
        <pre>
          <code className="language-html">{`<header role="banner">
  { Site Banner }
  <nav role="navigation">{ Main Navigation }</nav>
</header>
<main role="main">{ Main content }</main>
<footer role="contentinfo">{ Site Footer }</footer>`}</code>
        </pre>
        <Headline level={3}>Automated Testing</Headline>
        <p>
          In most cases, maintaining baseline accessibility requirements for a
          project can be an automated process. While we can&apos;t test
          everything, and we still need some manual testing, there are certain
          tools that allow us to keep our finger on the pulse of a
          project&apos;s accessibility compliance.
        </p>
        <p>
          Automating accessibility tests is easy with a tool like{" "}
          <a
            href="https://github.com/pa11y/pa11y"
            target="_blank"
            rel="noopener noreferrer"
          >
            pa11y
          </a>
          , which is a command line tool that runs{" "}
          <a
            href="http://squizlabs.github.io/HTML_CodeSniffer/"
            target="_blank"
            rel="noopener noreferrer"
          >
            HTML Code Sniffer
          </a>{" "}
          over a URL.
        </p>
        <p>
          It is easily installed through npm:{" "}
          <code>npm install pa11y --save-dev</code> and can be added into a{" "}
          <code>package.json</code> file as a separate npm script as to not
          collide with other build processes that may be running on a project:
        </p>
        <pre>
          <code className="language-json">{`"scripts": {
    "pa11y": "pa11y --ignore notice https://projectname.test"
},`}</code>
        </pre>
        <p>
          Running this process allows the engineer to be alerted if a code-level
          or design change violates the project&apos;s accessibility standards.
        </p>
        <Headline level={3}>Manual Testing</Headline>
        <p>
          Automated testing will often only get you so far; that is why we also
          recommend getting a human&apos;s eye on the accessibility in a project
          and executing manual tests alongside any automation. This process is
          largely done by an engineer reviewing the interface in a browser or
          screen reader and involves running your project through all of the
          WCAG guidelines at the compliance level that is applicable to your
          specific project (A, AA, or AAA). The{" "}
          <a
            href="https://www.w3.org/WAI/WCAG20/quickref/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG Quickref
          </a>{" "}
          is a great place to see all these guidelines in one place. Internally,
          we also have a spreadsheet template to help manage this process.
        </p>
        <p>
          Manual accessibility testing should be run in conjunction with
          automated testing to help identify all the potential areas of
          improvement on a project as well as resolve false-positives that may
          appear during the automated testing process. Tests should be run on a
          reasonable sample size of templates to help produce the most
          comprehensive analysis possible - preferably the same templates used
          in the automated testing process.
        </p>
        <p>
          Combining automated and manual testing practices allows Entermedia to
          maintain a high level of compliance on all projects and it is critical
          to the work we do.
        </p>
        <Headline level={2} id="structure" showAnchor>
          Structure
        </Headline>
        <p>
          At Entermedia, we pride ourselves in writing clean, semantic markup.
          Semantic markup can be defined as: “the use of HTML markup to
          reinforce the semantics, or meaning, of the information in web pages
          rather than merely to define it&apos;s presentation or look. Semantic
          HTML is processed by traditional web browsers as well as by many other
          user agents. CSS is used to suggest its presentation to human users”
          (definition from Wikipedia -
          <a
            href="https://en.wikipedia.org/wiki/Semantic_HTML"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://en.wikipedia.org/wiki/Semantic_HTML
          </a>
          ).
        </p>
        <p>
          Semantic elements are elements with clearly defined meaning to both
          the browser and the developer. Elements like{" "}
          <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
          <code>&lt;footer&gt;</code>, or <code>&lt;article&gt;</code> do a much
          better job of explaining the content that is contained within the
          element than <code>&lt;span&gt;</code> or <code>&lt;div&gt;</code>.
          This does not mean that we do not use <code>&lt;div&gt;</code>s in our
          markup, only that we prefer the right tool (or in this case semantic
          element) for the job.
        </p>
        <Headline level={3}>Minimal &amp; Valid</Headline>
        <p>
          Websites should be written using the least amount of markup that
          accomplishes the goal. In the interest of engineering maintainable
          projects, it&apos;s imperative that two completely different types of
          readers are accounted for: humans and browsers. Writing minimal markup
          makes it easier for developers to read and understand in a code
          editor. Valid markup is easier for browsers to process.
        </p>
        <p>
          We test our markup against the{" "}
          <a
            href="https://validator.w3.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C validator
          </a>{" "}
          to ensure that it is well formed and provides a fairly consistent
          experience across browsers.
        </p>
        <Headline level={3}>Optimize Readability</Headline>
        <p>
          At Entermedia, we often work with large codebases. As such, it&apos;s
          important to optimize markup for human readability. This allows
          developers to quickly rotate in and out of projects, eases onboarding
          processes, and improves code maintainability.
        </p>
        <p>
          Always use tabs for indentation. Doing this allows developers to set
          their editor preferences for tab width.
        </p>
        <p>
          When mixing PHP and HTML together, indent PHP blocks to match the
          surrounding HTML code. Closing PHP blocks should match the same
          indentation level as the opening block. Similarly, keep PHP blocks to
          a minimum inside markup. Doing this turns the PHP blocks into a type
          of tag themselves. Use colon syntax for PHP loops and conditionals so
          that it&apos;s easier to see when a certain loop ends within the block
          of markup.
        </p>
        <Headline level={4}>Examples</Headline>
        <p>Bad:</p>
        <pre>
          <code className="language-html">{`<ul>
<?php
foreach( $things as $thing ) {
  echo '<li>' . esc_html( $thing ) . '</li>';
}
?>
</ul>`}</code>
        </pre>
        <p>Good:</p>
        <pre>
          <code className="language-html">{`<ul>
    <?php foreach( $things as $thing ) : ?>
        <li><?php echo esc_html( $thing ); ?></li>
    <?php endforeach; ?>
</ul>`}</code>
        </pre>
        <Headline level={3}>Avoid Unnecessary Presentational Markup</Headline>
        <p>
          As part of our mission to write clean, semantic markup, avoid writing
          unnecessary presentational markup. Markup should always dictate what
          the content is, and CSS should dictate how the content looks. Mixing
          these two concerns makes maintaining code more difficult.
        </p>
        <p>
          This is not to say that multiple classes on an element are
          unacceptable. Contextual modifier classes are certainly acceptable and
          encouraged.
        </p>
        <Headline level={3}>Schema.org Markup</Headline>
        <p>
          <a
            href="https://schema.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schema.org
          </a>{" "}
          is the result of collaboration between Google, Bing, Yandex, and
          Yahoo! to provide the information their search engines need to
          understand content and provide the best search results possible.
          Adding Schema.org data to your HTML provides search engines with
          structured data they can use to improve the way pages display in
          search results.
        </p>
        <p>
          For example, if you&apos;ve ever searched for a restaurant and found
          that it had star reviews in its search results, this is a product of
          Schema.org and rich snippets.
        </p>
        <p>
          Schema.org data is intended to tell the search engines what your data{" "}
          <em>means</em>, not just what it says.
        </p>
        <p>
          To this end, we use Schema.org data where relevant and reasonable to
          ensure that our clients have the best search visibility that we can
          provide.
        </p>
        <p>
          Schema.org data can be provided in two forms: “microdata” markup added
          to a page&apos;s structure or a JSON-LD format. Google prefers
          developers adopt JSON-LD, which isolates the data provided for search
          engines from the markup meant for user agents. Even though the JSON-LD
          spec allows linking to data in an external file, search engines
          currently only parse JSON-LD data when it appears within a{" "}
          <code>&lt;script type=&quot;application/ld+json&quot;&gt;</code> tag,
          as shown below.
        </p>
        <p>
          Schema.org markup should be validated against the{" "}
          <a
            href="https://search.google.com/structured-data/testing-tool/u/0/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Structured Data Testing Tool
          </a>
          .
        </p>
        <p>
          For examples of Schema markup on components, check out the{" "}
          <a href="#">Entermedia WordPress Component Library (coming soon)</a>
        </p>
        <Headline level={3}>Classes &amp; IDs</Headline>
        <p>
          In order to create more maintainable projects, developers should use
          classes for CSS and IDs for JavaScript. Separating concerns allows
          markup to be more flexible without risking breaking both styles and
          any JavaScript that may be attached to the element on which someone is
          working.
        </p>
        <p>
          When using JavaScript to target specific elements in your markup,
          prefix the ID of the element that is being targeted with{" "}
          <code>js-</code>. This indicates the element is being targeted by
          JavaScript for your future self as well as other developers that may
          work on the project.
        </p>
        <Headline level={2} id="feature-detection" showAnchor>
          Feature Detection and Polyfills
        </Headline>
        <Headline level={3}>Polyfills</Headline>
        <p>
          When writing markup that does not have wide browser support, using
          polyfills can help bring that functionality to those older browsers.
          Providing support for older browsers is incredibly important to the
          business objectives of our clients. In an effort to prevent code
          bloat, we only provide polyfills for features that are functionally
          critical to a site.
        </p>
        <Headline level={3}>Feature Detection</Headline>
        <p>
          At Entermedia, the concept of feature detection is used to test
          browser support for new features that do not yet have full support
          across the board. The concept of feature detection is to test if a
          feature is supported by the browser and if not supported,
          conditionality run code to provide a similar experience with browsers
          that do support the feature. While popular{" "}
          <a
            href="https://modernizr.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            feature detection libraries
          </a>{" "}
          exist, there are{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection#JavaScript"
            target="_blank"
            rel="noopener noreferrer"
          >
            feature detection techniques
          </a>{" "}
          for JavaScript and{" "}
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports"
            target="_blank"
            rel="noopener noreferrer"
          >
            @supports
          </a>{" "}
          at-rule for CSS that can be utilized.
        </p>
        <Headline level={2} id="media" showAnchor>
          Media
        </Headline>
        <p>
          If accessibility starts with HTML, media is how we make it come alive.
          Creating accessible media is not only the responsibility of an
          editorial team, but it is our responsibility as engineers to ensure
          the systems we put in place promote and support the creation of
          accessible media. It can generally be put into three buckets: images,
          audio, and video. When looking for direction in these areas we turn to
          the rules laid out by the{" "}
          <a
            href="https://www.w3.org/WAI/standards-guidelines/wcag/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Web Content Accessibility Guidelines (WCAG)
          </a>
          .
        </p>
        <p>
          To read more about any of the guidelines outlined in this section,
          please visit the{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WCAG quickref document
          </a>
          . Some of the more aggressive guidelines in Level AAA are not
          mentioned here. Be sure to check with your project lead about the
          accessibility compliance level you need to follow.
        </p>
        <Headline level={3}>Images</Headline>
        <p>
          Images are the most common for of media we encounter in our day to day
          work. WCAG guidelines pertaining to images are:{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#non-text-content"
            target="_blank"
            rel="noopener noreferrer"
          >
            1.1.1 Non-text content
          </a>{" "}
          and{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#images-of-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            1.4.4 Images of text
          </a>
          . Following these two rules will ensure that our images always have
          alternative text and any time text is represented in an image there is
          always a purely text-based version of it available for users of
          assistive technology.
        </p>
        <Headline level={3}>Audio &amp; Video</Headline>
        <p>
          Between audio and video, we certainly deal with video more often, but
          there are some WCAG guidelines that encompass both, such as:{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#audio-only-and-video-only-prerecorded"
            target="_blank"
            rel="noopener noreferrer"
          >
            1.2.2 Audio/Video-only
          </a>{" "}
          and{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#audio-description-prerecorded"
            target="_blank"
            rel="noopener noreferrer"
          >
            1.2.3 Audio Descriptions or Media Alternative
          </a>
          . Both these guidelines address the creation of text-based versions of
          the media being presented to a user. This typically comes in the form
          of an audio track on a video, or a transcript outputted on the page
          somewhere. As an aside, outputting a transcript will help the content
          get indexed by search engines, rather than just having the content
          inside a media element (audio/video)
        </p>
        <Headline level={4}>Audio</Headline>
        <p>
          Audio is an important part of the work we do; making that content
          accessible to all users is extremely valuable. Guideline{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#audio-control"
            target="_blank"
            rel="noopener noreferrer"
          >
            1.4.1 Audio Control
          </a>{" "}
          is related to autoplaying audio. The general rule is: don&apos;t
          autoplay audio. However, if you do, and that audio is playing for more
          than three seconds 1.4.1 states that either a mechanism must be
          available to pause or stop the audio, or a mechanism must be available
          to control audio volume independently from the overall system volume
          level. This is important for any user with and auditory disorder.
        </p>
        <Headline level={4}>Video</Headline>
        <p>
          When putting video on the Web (that contains dialog),{" "}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/#captions-prerecorded"
            target="_blank"
            rel="noopener noreferrer"
          >
            guideline 1.2.2
          </a>{" "}
          states that captions must be present, without exception. While we
          can&apos;t always control the content that&apos;s placed on a site, we
          can be sure to guide clients towards a situation for compliance but
          suggesting transcription services. Other than alternative text,
          dealing with captions is the most common media accessibility issue
          you&apos;ll likely have to deal with.
        </p>
        <Headline level={2} id="svg" showAnchor>
          SVG
        </Headline>
        <p>
          <abbr title="Scaleable Vector Graphic">SVG</abbr> has become a
          prevalent means for displaying rich vector graphics. <abbr>SVG</abbr>{" "}
          images are great for graphics with well-defined lines and simple color
          palettes that can be defined algorithmically, e.g. logos, iconography,
          and illustrations. Here are a few known benefits of SVG:
        </p>
        <ul>
          <li>
            <strong>Scalability</strong> - They look great on retina displays
            and at any size, i.e. they&apos;re resolution independent.
          </li>
          <li>
            <strong>File Size</strong> - Small file size and compresses well.
          </li>
          <li>
            <strong>Styling</strong> - Manipulate fill, stroke, and even
            animate.
          </li>
        </ul>
        <p>Be mindful that SVGs have potential limitations as well:</p>
        <ul>
          <li>
            Adding unvetted <abbr>SVG</abbr> graphics to a page has the
            potential to introduce a security vulnerability. This is why
            WordPress does not allow uploading of <abbr>SVG</abbr> by default.
            Read:{" "}
            <a
              href="https://bjornjohansen.no/svg-in-wordpress"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr>SVG</abbr> uploads in WordPress (the Inconvenient Truth)
            </a>{" "}
            for more information.
          </li>
          <li>
            SVG is <strong>not</strong> ideal for photographic images or images
            with complex visual data. In this case, raster formats (JPG, PNG,
            GIF) will be a better choice.
          </li>
          <li>
            Raster images should <em>not</em> be converted to <abbr>SVG</abbr>.
            It will likely result in a raster image being embedded within the
            SVG document, which will not provide the same affordances (i.e.{" "}
            <abbr>CSS</abbr> manipulation) as a genuine <abbr>SVG</abbr>. For
            further reading on vector vs. raster formats, and when to use each:{" "}
            <a
              href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web"
              target="_blank"
              rel="noopener noreferrer"
            >
              Adding vector graphics to the Web
            </a>
            .
          </li>
        </ul>
        <Headline level={3}>SVG Sprites</Headline>
        <p>
          Combining <abbr>SVG</abbr> images in a single file (usually called{" "}
          <code>svg-defs.svg</code>) has the benefit of helping limit{" "}
          <abbr title="HyperText Transfer Protocol">HTTP</abbr> requests within
          a document that contains multiple icons. An <abbr>SVG</abbr> sprite
          file can be embedded within a document and referenced within the
          template source with a <code>&lt;use&gt;</code> element. The creation
          of this icon system should be automated through your build process.
          Read{" "}
          <a
            href="https://css-tricks.com/svg-sprites-use-better-icon-fonts/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icon Systems with SVG Sprites
          </a>{" "}
          for more information.
        </p>
        <Headline level={3}>SVG embedded in HTML</Headline>
        <p>
          When placing an SVG in markup (i.e. inline) be sure to use the
          following guidelines:
        </p>
        <ul>
          <li>
            If the <abbr>SVG</abbr> is purely <strong>decorative</strong>:
            <ul>
              <li>
                An empty <code>alt=&quot;&quot;</code> can be used:{" "}
                <code>&lt;img alt=&quot;&quot;&gt;</code>, or
              </li>
              <li>
                Use{" "}
                <abbr title="Accessible Rich Internet Applications">ARIA</abbr>{" "}
                attributes to hide the element from assistive technologies:{" "}
                <code>&lt;svg aria-hidden=&quot;true&quot;&gt;</code>
              </li>
            </ul>
          </li>
          <li>
            <p>
              If the <abbr>SVG</abbr> is <strong>meaningful</strong> then use{" "}
              <code>&lt;title&gt;</code> and possibly even{" "}
              <code>&lt;desc&gt;</code> or <code>aria-label</code> to describe
              the graphic. Also, be sure to add an <code>id</code> to each
              element, and appropriate <abbr>ARIA</abbr> to overcome a known bug
              in{" "}
              <a
                href="https://bugs.chromium.org/p/chromium/issues/detail?id=231654&amp;q=SVG%20%20title%20attribute&amp;colspec=ID%20Pri%20M%20Stars%20ReleaseBlock%20Component%20Status%20Owner%20Summary%20OS%20Modified"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome
              </a>{" "}
              and{" "}
              <a
                href="https://bugzilla.mozilla.org/show_bug.cgi?id=1151648"
                target="_blank"
                rel="noopener noreferrer"
              >
                Firefox
              </a>
              .
            </p>
            <pre>
              <code className="language-html">{`<!-- role="img" to exclude image from being traversed by certain browsers w/ group role -->
  <svg role="img" aria-labelledby="uniqueTitleID uniqueDescID">
      <title id="uniqueTitleID">The Title</title>
      <desc id="uniqueDescID">Description goes here...</desc>
  </svg>`}</code>
            </pre>
          </li>
          <li>
            <p>
              Use <code>aria-label</code> if the SVG is linked and has no
              supporting text.
            </p>

            <pre>
              <code className="language-html">{`<a href="http://twitter.com/entermedia" aria-label="Follow Entermedia on Twitter">
      <svg><use xlink:href="#icon-twitter"></use></svg>
  </a>`}</code>
            </pre>
          </li>
          <li>
            Use{" "}
            <a
              href="https://css-tricks.com/accessible-svgs/#article-header-id-20"
              target="_blank"
              rel="noopener noreferrer"
            >
              media queries to provide fallbacks for Windows and High Contrast
              Mode
            </a>
            .
          </li>
        </ul>
        <Headline level={3}>Optimization</Headline>
        <p>
          Many tools for creating SVG are notorious for including unnecessary
          markup. We recommend running all <abbr>SVG</abbr> through{" "}
          <a
            href="https://jakearchibald.github.io/svgomg/"
            target="_blank"
            rel="noopener noreferrer"
          >
            SVGO(MG)
          </a>{" "}
          or using tooling, like{" "}
          <a
            href="https://github.com/ben-eb/gulp-svgmin"
            target="_blank"
            rel="noopener noreferrer"
          >
            gulp-svgmin
          </a>
        </p>
        <Headline level={3}>Further reading:</Headline>
        <ul>
          <li>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <abbr>SVG</abbr> Tutorial
            </a>{" "}
            - MDN web docs
          </li>
          <li>
            <a
              href="https://24ways.org/2014/an-overview-of-svg-sprite-creation-techniques/"
              target="_blank"
              rel="noopener noreferrer"
            >
              An Overview of SVG Sprite Creation Techniques
            </a>
          </li>
          <li>
            <a
              href="https://developer.paciellogroup.com/blog/2013/12/using-aria-enhance-svg-accessibility/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Using ARIA to enhance <abbr>SVG</abbr> accessibility
            </a>{" "}
            - The Paciello Group
          </li>
          <li>
            <a
              href="https://www.24a11y.com/2018/accessible-svg-icons-with-inline-sprites/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessible <abbr>SVG</abbr> Icons with Inline Sprites
            </a>{" "}
            24 Accessibility
          </li>
          <li>
            <a
              href="https://weboverhauls.github.io/demos/svg/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessible <abbr>SVG</abbr> test page
            </a>
          </li>
          <li>
            <a
              href="https://www.deque.com/blog/creating-accessible-svgs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creating Accessible SVGs
            </a>{" "}
            Deque.com
          </li>
          <li>
            <a
              href="https://css-tricks.com/accessible-svgs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessible SVGs
            </a>{" "}
            - CSSTricks.com
          </li>
        </ul>
      </Template>
    </>
  );
}
