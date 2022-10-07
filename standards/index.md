---
label: Coding Standards
icon: check-circle
order: 950
---

The following are general coding standards that should be applied to every project:

1. **Never include API or token keys in code.** Instead, they should be defined in a ignored file that's never commited to code.

---

## Editor Config

Every project should include an Editor Config file, `.editorconfig` in the root directory. This file will define and maintain consistent coding styles between the different IDEs and Code Editors used on the project.

All developers should install the corresponding Editor Config plugin for their preferred development editor from [EditorConfig.org](http://editorconfig.org/#download).

The editor config file with standard settings for commonly used files is shown below.

```bash
root = true

[*]
indent_style = tab
indent_size = 2
trim_trailing_whitespace = true

[*.{php,js,css,scss}]
end_of_line = lf
insert_final_newline = true
indent_style = tab
indent_size = 2
```

Developers may extend and/or customize these rules as new file formats are added to the project.

---

## Code Commenting

Comments play a very important role in communication, specially when different developers are working on the same code, and it saves a lot of time. Also, since new age compilers anyways remove all the comments while creating the production code, it’s better to have them than not.

Entermedia uses the following list of conventions every developer should follow in regards to commenting code:

1. Comments **should not duplicate the code**.
2. Good comments do not excuse unclear code.
3. If you can’t write a clear comment, there may be a problem with the code.
4. Comments **should dispel confusion**, not cause it.
5. Explain unidiomatic code in comments.
6. Provide links to the original source of copied code.
7. Include links to external references where they will be most helpful.
8. Add comments when fixing bugs.
9. Use comments to mark incomplete implementations (i.e. `@TODO`, `@FIXME`).

For JavaScript, see [JavaScript Code Commenting Standards](/best-practices/javascript/#code-commenting).

### Documenting Tips

#### Language

Short descriptions should be clear, simple, and brief. Document “what” and “when” – “why” should rarely need to be included. The “why” can go in the long description if needed. For example:

Functions and closures are _third-person singular_ elements, meaning third-person singular verbs should be used to describe what each does.

!!!success Tip
Need help remembering how to conjugate for third-person singular verbs? Imagine prefixing the function, hook, class, or method summary with “It”:

- _Good:_ “(It) Does something.”
- _Bad:_ “(It) Do something.”
  !!!

**Functions:** What does the function do?

- _Good:_ Handles a click on X element.
- _Bad:_ Included for back-compat for X element.

**`@since`**: Can be used when searching for the version something was added using tools such as `svn blame`

If, after using these tools, the version number cannot be determined, use `@since Unknown`.

#### Grammer

Descriptive elements should be written as complete sentences. The one exception to this standard is file header summaries, which are intended as file “titles” more than sentences.

The serial (Oxford) comma should be used when listing elements in summaries, descriptions, and parameter or return descriptions.

---

## Avoid Cookies

Safari browser’s Intelligent Tracking Prevention (ITP) 2.1 sets the expiration period at 7 days for all first-party cookies set by in-line (or tag management solution injected) vendor JavaScript libraries like Google Analytics’ analytics.js.

Authentication cookies (secure and HTTP-only) which have been properly implemented won’t be affected by the 7-day cap. These cookies should be deployed using the `Set-Cookie` header in the HTTP response and inaccessible via JavaScript’s `document.cookie` API.

Solutions for other types of cookies include:

1. Using `localStorage` to persist the unique identifier (i.e. the client ID) instead of relying solely on the `_ga` cookie
2. Setting the `_ga` cookie with the HTTP response, rather than with JavaScript Keep in mind that these solutions come with caveats: using `localStorage` only works on the same domain and would not work for cross-domain tracking.

As an alternative to local storage, server-side tracking via the proxy layer in Cloudflare is probably the best option for clients with significant traffic from Safari.
