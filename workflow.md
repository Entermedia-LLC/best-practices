---
label: Developer Workflow
icon: issue-reopened
order: 900
---

# Developer Workflow

Entermedia uses the [Feature Branch Workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow) for all GitHub repo projects. The core idea behind it is that all feature development should take place in a dedicated branch instead of the `main` or `develop` branch. This encapsulation makes it easy for multiple developers to work on a particular feature without disturbing the main codebase. It also means the `main` branch will never contain broken code, which is a huge advantage for continuous integration environments.

Encapsulating feature development also makes it possible to leverage pull requests, which are a way to initiate discussions around a branch. They give other developers the opportunity to sign off on a feature before it gets integrated into the official project. Or, if you get stuck in the middle of a feature, you can open a pull request asking for suggestions from your colleagues. The point is, pull requests make it incredibly easy for your team to comment on each other’s work.

---

## Workflow Example

All feature branches are created off the latest code state of a project, in Entermedia's projects, that will always be the `develop` branch. **Updates should never be pushed to the `main` or `develop` branches directly.**

```bash Step 1: Checkout the project, update & switch to the develop branch.
git checkout develop
git fetch origin
git reset --hard origin/develop
```

Above switches the repo to the `develop` branch, pulls the latest commits and resets the repo's local copy of develop to match the latest version.

### Create a feature branch

Use a separate branch for each feature or issue you work on. After creating a branch, check it out locally so that any changes you make will be on that branch.

```bash Step 2: Create a feature branch
git checkout -b project-123
```

This checks out a branch called `project-123` based on develop, and the `-b` flag tells Git to create the branch if it doesn’t already exist.

!!!info Feature Branch Naming Conventions
When naming branches, use the **Jira issue number, all lowercase** (i.e. project-183). This allows developers to quickly cross-reference the work done in that branch with the coorsponding issue number is Jira.
!!!

### Commit & push changes

Edit, stage, and commit changes in the usual fashion, building up the feature with as many commits as necessary. Work on the feature and make commits like you would any time you use Git. When ready, push your commits, updating the feature branch on GitHub.

```bash Step 3: Commit the changes
git status
git add <some-file>
git commit -m "build(initial setup, header): next.js setup and header component"
```

!!!info Formatting Commit Messages
Entermedia uses [commitlint](https://commitlint.js.org/) to standarize commit messages. [!ref Learn how to install & configure commitlint](/tools/commitlint.md)
!!!

It’s a good idea to push the feature branch up to the central repository. This serves as a convenient backup, when collaborating with other developers, this would give them access to view commits to the new branch.

```bash Step 4: Push the changes
git push origin project-123
```

This pushes `project-123` to the central repository (`origin`). T

### Create a Pull Request

To get feedback on the new feature branch, create a pull request **into the `develop` branch**.

!!!info Code Review Feedback
Now teammates comment and approve the pushed commits. Resolve their comments locally, commit, and push the suggested changes to the feature branch. Your updates appear in the pull request.

Once all feedback has been resolved, the code reviewer will merge the feature branch into the `develop` branch, then to the `main` branch when all feature branches have been reviewed, merged, and ready to be deployed.
!!!
