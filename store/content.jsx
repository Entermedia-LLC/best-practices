const content = [
  {
    id: "best-practices",
    path: "/",
    title: "Best Practices",
    children: [
      { path: "/#audience", title: "Audience" },
      { path: "/#goal", title: "Goal" },
      { path: "/#contributing", title: "Contributing" },
    ],
  },
  {
    id: "css",
    path: "/css",
    title: "CSS",
    children: [
      { path: "/css#philosophy", title: "Philosophy" },
      { path: "/css#accessibility", title: "Accessibility" },
      { path: "/css#performance", title: "Performance" },
      { path: "/css#responsivedesign", title: "Responsive Design" },
      { path: "/css#syntaxandformatting", title: "Syntax and Formatting" },
      { path: "/css#documentation", title: "Documentation" },
      { path: "/css#frameworks", title: "Frameworks" },
      { path: "/css#futherreading", title: "Further Reading" },
    ],
  },
  {
    id: "js",
    path: "/js",
    title: "JavaScript",
    children: [
      {
        path: "/js#philosophy",
        title: "Code Style, Tooling & Documentation",
      },
      {
        path: "/js#designpatterns",
        title: "Design Patterns",
      },
      {
        id: "js-react",
        path: "/js/react",
        title: "React.js",
      },
    ],
  },
];

export default content;
