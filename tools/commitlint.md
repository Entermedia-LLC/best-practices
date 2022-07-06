---
label: commitlint
icon: code-review
---

Entermedia uses [commitlint](https://commitlint.js.org/) to organize and standarize commit messages which helps with:

- Automatically generating a `CHANGELOG`
- Automatically determining a semantic version bump (based on the types of commits landed).
- Communicating the nature of changes to teammates, the public, and other stakeholders
- Triggering build and publish processes
- Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

Commit messages should follow this format:

```bash Commit Message Format
type(scope?): subject  #scope is optional; multiple scopes are supported (current delimiter options: "/", "" and ",")
```

Real world examples can look like this:

```bash Commit Message Examples
"chore: run tests on travis ci"
"fix(server): send cors headers"
"feat(blog): add comment section"
```

Common types according to [commitlint-config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum) (based on the Angular convention) can be:

- build
- chore
- ci
- docs
- feat
- fix
- perf
- refactor
- revert
- style
- test

## Install & Configure commitlint

Install `commitlint` and `commitlint-config-conventional`, then configure commitlint to use it.

```bash Installing & configuring commitlint
npm install --save-dev commitlint @commitlint/config-conventional
echo "module.exports = { extends: ['@commitlint/config-conventional'] };" > commitlint.config.js
```

### Install Husky

Install `husky` as a `devDependency`, a handy git hook helper available on npm.

```bash Install Husky
npm install husky --save-dev # Install Husky
npx husky install # Activate hooks
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1' # Add hook
```
