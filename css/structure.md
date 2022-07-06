---
label: Directory Structure
icon: file-code
---

File structure unity across projects improves engineering efficiency and maintainability. We believe the following structure is segmented enough to keep projects organized—and thus maintainable—but also flexible and open ended enough to enable engineers to comfortably modify as necessary. All projects should derive from this structure:

```bash CSS Directory Structure
|- styles/ ___________________________________ # Non-component specific styles
|    |- base.scss ____________________________ # Base HTML element styles
|    |- global/ ______________________________ # Sass variables, mixins & functions
|       |- _core.scss ________________________ # Includes all required core files
|       |- _mixins.scss ______________________ # Sass mixins
|       |- _variables.scss ___________________ # Sass variables
|    |- helpers/ _____________________________ # Helper classes
|       |- layout.module.scss ________________ # Layout helpers classes
|       |- typography.module.scss ____________ # Typography helpers classes
|    |- theme/ _______________________________ # Theme styles
|       |- light.scss ______________________ # Light CSS theme variables
|       |- dark.scss ______________________ # Light CSS theme variables
```
