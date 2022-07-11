---
label: WordPress
icon: browser
order: 500
---

---

## Coding Standards

Every project, whether a plugin a theme or a standalone library, should be coded to be reusable and modular.

### General Notes

Every project, whether it includes Composer-managed dependencies or not, **must** contain a `composer.json` file defining the project so it can in turn be pulled in to **other** projects via Composer, [see below](/wordpress/#composer-based-project-structure).

### Plugins

If the code for a project is split off into a functionality plugin, it should be done in such a way that the theme can function when the functionality plugin is disabled, broken, or missing. Each plugin should operate within its own namespace, both in terms of code isolation and in terms of internationalization.

Any functions the plugin exposes for use in a theme should be done so through actions and filters - the plugin should contain multiple calls to `add_filter()` and `add_action()` as the hooks themselves will be defined in the theme.

### Themes

Any theme dependencies on functionality plugins should be built with the use of `do_action()` or `apply_filters()`.

**In short**, changing to the default theme should not trigger errors on a site. Nor should disabling a functionality plugin - every piece of code should be decoupled and use standard WordPress paradigms (hooks) for interacting with one another.

---

## Composer Based Project Structure

Here’s how we might structure a project with Composer:

```shell
|- composer.json ____________________________ # Define third party dependencies
|- wp-config.php ____________________________ # WordPress configuration
|- wp/ ______________________________________ # Composer install WordPress here
|- wp-content/ ______________________________ # Composer dependencies
|  |- themes/ _______________________________ # Themes directory
|    |- custom-theme/ _______________________ # Custom theme
|  |- plugins/ ______________________________ # Plugins directory
|    |- custom-plugin/ ______________________ # Custom plugin
```

Here’s what `composer.json` might look like with some example plugins:

```json
{
  "name": "entermedia/project-slug",
  "description": "Project description",
  "repositories":[
    {
      "type":"composer",
      "url":"https://wpackagist.org"
    }
  ],
  "extra": {
    "wordpress-install-dir": "wp"
  },
  "require": {
    "johnpbloch/wordpress": "4.9",
    "wpackagist-plugin/wordpress-importer": "dev-trunk",
    "wpackagist-plugin/debug-bar": "dev-trunk",
    "wpackagist-plugin/debug-bar-extender": "dev-trunk",
  }
}
```
