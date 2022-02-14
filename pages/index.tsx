// Next.js imports
import Head from "next/head";

// Component imports
import Template from "../components/templates/Default";
import Headline from "../components/molecules/Headline";

export default function Page() {
  return (
    <>
      <Head>
        <title>Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1}>Entermedia Best Practice</Headline>
        <Headline level={2} id="audience" showAnchor>
          Audience
        </Headline>
        <p>
          The Entermedia Best Practices are not geared to teach anyone to become
          an engineer. Rather, they aim to illustrate how to engineer the
          Entermedia way. Therefore, these best practices are intended for
          capable engineers.
        </p>
        <Headline level={2} id="goal" showAnchor>
          Goal
        </Headline>
        <p>
          As a company, we strive to provide websites and components that yield
          a top-notch user experience. In order to improve efficiency, we need
          to standardize what we use and how we use it. Standardizing our tools,
          frameworks, libraries, style, version control, and even languages will
          allow us to better understand the inner workings of someone
          else&apos;s project and produce better solutions ourselves.
        </p>
        <p>
          As such, Entermedia engineers should follow these best practices in
          all their work. Our best practices are not meant to be restrictive or
          comprehensive; we value creativity at Entermedia. The aim is for this
          document to provide a strong guidance, not an authoritative direction.
          It&apos;s our hope that these best practices will not only influence
          Entermediaites but community members as well.
        </p>
        <blockquote>
          <p>We make web publishing easy. Maybe even fun.</p>
        </blockquote>
        <p>
          At the very heart of Entermedia is the publishing or user experience.
          WordPress, we firmly believe, is the best starting point to achieve
          this. We design and build custom publishing experiences for major
          companies and brands around the world. Our publishing experiences or
          websites are tailor-made for our clients and their specific needs.
        </p>
        <p>
          As such, the content management experience cannot be made to be
          generic. We don&apos;t cut corners when it comes to user experience
          and interface. We don&apos;t take shortcuts that compromise the end
          experience for the user. We don&apos;t distribute pre-packaged,
          auto-generated user interfaces or components.
        </p>
        <blockquote>
          <p>Keep it simple.</p>
        </blockquote>
        <p>
          While our solutions are complex, we want our code, tools, processes,
          systems, and practices to be as simple as possible. Simplicity
          facilitates collaboration as there is a lower barrier of entry. This
          goes for things like PHP design patterns as well as workflow. We
          discourage practices such as writing extra levels of code abstraction
          (wrapping existing API&apos;s) as they complicate debugging and add
          another component that needs to be maintained.
        </p>
        <blockquote>
          <p>We are always learning.</p>
        </blockquote>
        <p>
          We are constantly challenging ourselves and learning. Knowledge gives
          us a competitive edge. Everyone around us is growing; if we stop
          growing individually or collectively and stop challenging ourselves to
          improve, we fall behind. For that reason, this document is not set in
          stone and will change. Evolving these best practices through
          contributions is incredibly important to us.
        </p>
        <Headline level={2} id="contributing" showAnchor>
          Contributing
        </Headline>
        <p>
          Please contribute via{" "}
          <a
            href="https://github.com/Entermedia-LLC/best-practices"
            target="_blank"
            rel="noreferrer"
          >
            pull requests on GitHub
          </a>
          .
        </p>
      </Template>
    </>
  );
}
