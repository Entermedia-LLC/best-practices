---
label: Internationalization
icon: globe
---

All text strings in a project should be internationalized using core localization functions. Even if the project does not currently dictate a need for translatable strings, this practice ensures translation-readiness should a future need arise.

WordPress provides a myriad of [localization functionality](https://developer.wordpress.org/plugins/internationalization/). Engineers should familiarize themselves with features such as [pluralization](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#plurals) and [disambiguation](https://developer.wordpress.org/plugins/internationalization/how-to-internationalize-your-plugin/#disambiguation-by-context) so translations are flexible and translators have the information they need to work accurately.

Samuel Wood (Otto) put together a guide to WordPress internationalization best practices, and engineers should take time to familiarize themselves with its guidance: [Internationalization: You’re probably doing it wrong](http://ottopress.com/2012/internationalization-youre-probably-doing-it-wrong/)

It’s important to note that the strings passed to translation functions should always be literal strings, never variables or named constants, and code shouldn’t use [string interpolation](https://en.wikipedia.org/wiki/String_interpolation#PHP) to inject values into either string. Most tools used to create translations rely on [GNU gettext](https://www.gnu.org/software/gettext/) scanning source code for translation functions. PHP code won’t be interpreted, only scanned like it was a block of plain text and stored similarly. If WordPress’s translation APIs can’t find an exact match for a string inside the translation files, it won’t be able to translate the string. Instead, use [printf formatting codes](https://en.wikipedia.org/wiki/Printf_format_string) inside the string to be translated and pass the translated version of that string to `sprintf()` to fill in the values.

For example:

```php
// This will confuse translation software
$string = __( "$number minutes left", 'plugin-domain' );
// So will this
define( 'MINUTES_LEFT', '%d minutes left' );
$string = __( MINUTES_LEFT, 'plugin-domain' );
// Correct way to do a simple translation
$string = sprintf( __( '%d minutes left', 'plugin-domain' ), $number );
// A more complex translation using _n() for plurals
$string = sprintf( _n( '%d minute left', '%d minutes left',  $number, 'plugin-domain' ), $number );
```

Localizing a project differs from the core approach in two distinct ways:

- A unique text domain should be used with all localization functions
- Internationalized output should always be escaped

---

## Text Domains

Each project should leverage a unique text domain for its strings. Text domains should be lowercase, alphanumeric, and use hyphens to separate multiple words: `entermedia-project-name`.

Like the translated strings they accompany, text domains should never be stored in a variable or named constant when used with core localization functions, as this practice can often produce unexpected results. Translation tools won’t interpret PHP code, only scan it like it was plain text. They won’t be able to assign the text domain correctly if it’s not there in plain text.

```php
// Always this
$string = __( 'Hello World', 'plugin-domain' );
// Never this
$string = __( 'Hello World', $plugin_domain );
// Or this
define( 'PLUGIN_DOMAIN', 'plugin-domain' );
$string = __( 'Hello World', PLUGIN_DOMAIN );
```

If the code is for release as a plugin or theme in the WordPress.org repositories, the text domain **must** match the directory slug for the project in order to ensure compatibility with the WordPress language pack delivery system. The text domain should be defined in the “Text Domain” header in the plugin or stylesheet headers, respectively, so the community can use [GlotPress](https://wordpress.org/plugins/glotpress/) to provide new translations.

---

## Escaping Strings

Most of WordPress’s translation functions don’t escape output by default. So, it’s important to escape the translated strings like any other content.

To make this easier, the WordPress API includes functions that translate and escape in a single step. Engineers are encouraged to use these functions to simplify their code:

### For use in HTML

1. [`esc_html__`](https://developer.wordpress.org/reference/functions/esc_html__/): Returns a translated and escaped string
2. [`esc_html_e`](https://developer.wordpress.org/reference/functions/esc_html_e/): Echoes a translated and escaped string
3. [`esc_html_x`](https://developer.wordpress.org/reference/functions/esc_html_x/): Returns a translated and escaped string, **passing a context** to the translation function

### For use in attributes

1. [`esc_attr__`](https://developer.wordpress.org/reference/functions/esc_attr__/): Returns a translated and escaped string
2. [`esc_attr_e`](https://developer.wordpress.org/reference/functions/esc_attr_e/): Echoes a translated and escaped string
3. [`esc_attr_x`](https://developer.wordpress.org/reference/functions/esc_attr_x/): Returns a translated and escaped string, passing a context to the translation functio
