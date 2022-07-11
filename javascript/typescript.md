---
label: TypeScript
icon: file-code
---

Entermedia uses [TypeScript](https://www.typescriptlang.org/), a strongly typed programming language that builds on JavaScript, for all JS projects.

---

## Coding Standards

- Avoid using `React.FC`, see [Remove React.FC from Typescript template](https://github.com/facebook/create-react-app/pull/8177) for more information
- Avoid inlining type declarations
- Use `interface` over `type` so that consumers can extend the properties
