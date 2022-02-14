// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";
import Link from "next/link";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-shell-session";

export default function Page() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>Workflow | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1}>Workflow</Headline>
        <Headline level={2} id="github" showAnchor>
          Git Feature Branch Workflow
        </Headline>
        <p>
          Entermedia uses the Feature Branch Workflow for all GitHub repo
          projects. The core idea behind the Feature Branch Workflow is that all
          feature development should take place in a dedicated branch instead of
          the <code>main</code> or <code>develop</code> branch. This
          encapsulation makes it easy for multiple developers to work on a
          particular feature without disturbing the main codebase. It also means
          the <code>main</code> branch will never contain broken code, which is
          a huge advantage for continuous integration environments.
        </p>
        <p>
          Encapsulating feature development also makes it possible to leverage
          pull requests, which are a way to initiate discussions around a
          branch. They give other developers the opportunity to sign off on a
          feature before it gets integrated into the official project. Or, if
          you get stuck in the middle of a feature, you can open a pull request
          asking for suggestions from your colleagues. The point is, pull
          requests make it incredibly easy for your team to comment on each
          other’s work.
        </p>
        <Headline level={3}>How it Works</Headline>
        <p>
          All feature branches are created off the latest code state of a
          project, in Entermedia&apos;s projects, that will be the{" "}
          <code>develop</code> branch.{" "}
          <strong>
            Updates should never be pushed to the <code>main</code> or{" "}
            <code>develop</code> branches directly.
          </strong>
        </p>
        <pre>
          <code className="language-sh">{`git checkout develop
git fetch origin
git reset --hard origin/develop`}</code>
        </pre>
        <p>
          This switches the repo to the develop branch, pulls the latest commits
          and resets the repo&apos;s local copy of develop to match the latest
          version.
        </p>
        <Headline level={4}>Create a new branch</Headline>
        <p>
          Use a separate branch for each feature or issue you work on. After
          creating a branch, check it out locally so that any changes you make
          will be on that branch.
        </p>
        <pre>
          <code className="language-sh">{`git checkout -b new-feature`}</code>
        </pre>
        <p>
          This checks out a branch called new-feature based on{" "}
          <code>develop</code>, and the -b flag tells Git to create the branch
          if it doesn’t already exist.
        </p>
        <Headline level={4}>Update, add, commit, and push changes</Headline>
        <p>
          On this branch, edit, stage, and commit changes in the usual fashion,
          building up the feature with as many commits as necessary. Work on the
          feature and make commits like you would any time you use Git. When
          ready, push your commits, updating the feature branch on GitHub.
        </p>
        <pre>
          <code className="language-sh">{`git status
git add <some-file>
git commit -m "build(initial setup, header): next.js setup and header component"`}</code>
        </pre>
        <Headline level={5}>Commit messages</Headline>
        <p>
          Entermedia uses{" "}
          <a
            href="https://commitlint.js.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            commitlint
          </a>{" "}
          to standarize commit messages. See{" "}
          <Link href="/tools#aria-commitlint">commitlint</Link> for more
          information.
        </p>
        <Headline level={4}>Push feature branch to remote</Headline>
        <p>
          It’s a good idea to push the feature branch up to the central
          repository. This serves as a convenient backup, when collaborating
          with other developers, this would give them access to view commits to
          the new branch.
        </p>
        <pre>
          <code className="language-sh">{`git push origin new-feature`}</code>
        </pre>
        <p>
          This command pushes new-feature to the central repository (origin). To
          get feedback on the new feature branch, create a pull request into the{" "}
          <code>develop</code> branch. From there, you can add reviewers and
          make sure everything is good to go before merging.
        </p>
        <Headline level={4}>Resolve feedback</Headline>
        <p>
          Now teammates comment and approve the pushed commits. Resolve their
          comments locally, commit, and push the suggested changes to the
          feature branch. Your updates appear in the pull request.
        </p>
        <p>
          Once all feedback has been resolved, the code reviewer will merge the
          feature branch into the <code>develop</code> branch, then to the{" "}
          <code>main</code> branch when all feature branches have been reviewed,
          merged, and ready to be deployed.
        </p>
      </Template>
    </>
  );
}
