---
label: Dependency Management
icon: plug
---

# Dependencies & Package Management

Projects generally use two different types of dependency management:

- [npm](https://npmjs.org/) & [yarn](https://yarnpkg.com/) are used to manage relevant dependencies.
- [Composer](https://getcomposer.org/) is used primarily for back-end (i.e. admin or PHP-based) dependencies

---

## When and How to Use Packages

When choosing a third-party library for inclusion in your project, see if it’s available on npm (JavaScript) or Packagist (PHP). Retrieving dependencies from a package repo helps slim down the code in our version control repos, meaning there’s less we need to retrieve when a new engineer starts on a project. It also contributes to easily keeping code up to date with security and performance improvements.

!!!info WordPress
WordPress plugins and themes are often available on [wpackagist.org](https://wpackagist.org/).
!!!

Most package managers differentiate between `dependencies` and `devDependencies`:

- `devDependencies` are code, often build tools like Webpack or Gulp, needed to get a site to a production-ready state.
- Dependencies are code actually used in the functioning of the site, like `Lodash` or `Normalize.css`.

Existing projects that weren’t built with package managers in mind offer an opportunity for engineering teams to implement them for all new development. Teams should also estimate and plan around the time needed to retrofit the existing codebase.

With some projects, using an automated dependency manager won’t make sense. In server environments like VIP, running dependency software on the server is impossible. If required repositories are private (i.e. invisible to the clients’ in-house developers), expecting the entire team to use a dependency manager is unreasonable. In these cases, the dependency, its version, and the reason for its inclusion in the project outside of a dependency manager should be documented.

If you are using a package where the naming and usage isn’t obvious to the average engineer, be sure to document its purpose in the `README`, style guide, or project documentation.

---

## Selecting Packages

Packages are often a Matryoshka of their own dependencies. Though this code is almost certainly all open source, it’s not practical to apply the same scrutiny to packages’ code as is expected before selecting things like WordPress themes and plugins. Effective package selection, therefore, relies on other factors that engineers can quickly evaluate:

- Is the package actively developed and supported?
- Does the package have a solid reputation in the community?
- How frequently have security issues been reported, and how quickly have they historically been addressed?
- Does the package require a small number of dependencies?
- How easily could the packages’ code be forked in case it’s abandoned or a critical issue needs to be addressed right away? When evaluating this, consider the package’s open source license along with the ease of modifying the code.

---

## Package Versions and Lock

When installing a package, engineers can specify a version string the package manager uses to select an appropriate package version. Never specify an exact x.y.z version or else security, performance, and functionality upgrades won’t be available. Most third-party packages follow the Semantic Versioning (semver.org) system, where packages’ version numbers are defined in terms of major, minor, and patch levels. Changes to semver-compliant packages are expected to trigger a new major version when breaking backward compatibility.

Instead of a full x.y.z version, Specify major & minor versions x.y to minimize the risk of breaking changes being introduced into your project. Start version number strings with a caret (^) for most dependencies, for example `^1.2`.

!!!info WordPress
For dependencies that don’t use semver, like many WordPress themes and plugins, engineers should still specify major and minor versions x.y. Start version numbers with a tilde (~) for most dependencies.
!!!

Modern package managers create lock files, such as npm’s `package-lock.json` and Composer’s `composer.lock`. These files record the package versions each package manager chose to satisfy the version number constraints on the current version of the platform. Lock files should be committed to project version control repos so all engineers can be on the same page.
