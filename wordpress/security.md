---
label: Security
icon: shield-lock
---

Security in the context of web development is a huge topic. This section only addresses some of the things we can do at the server-side code level.

---

## General Rules

### Always disallow plugin/theme edits from the admin

Always `define( 'DISALLOW_FILE_MODS', true );`. Code changes such as plugin updates should be done from the repository for easier code maintenance and constancy. This also prevents an attacker that might have gained admin access from making a code change by uploading a plugin.

### Always remove unused code

Always remove unused code. Unused WordPress plugins and themes can provide a vector for attack. Also remove as much unused code as possible and regularly audit the code base for unused WordPress plugins.

### Regularly scan your codebase for vulnerable packages

Build a process to regularly scan your codebase against known vulnerabilities. You can use tools like [https://wpvulndb.com/](https://wpvulndb.com/) to scan for plugins or themes that could be an issue.

### Disable XML-RPC

Always disable XML-RPC since it can be used for brute force or DDoS attacks. XML_RPC is an older and mostly unused feature. Perfer the JSON API when available.

### WordPress updates

Always keep WordPress up to date. WordPress core minor versions should be installed as soon as possible. WordPress Core offers security updates and “minor” updates to older versions of WordPress. Often bad actors will scan the web for these vulnerabilities given the WP’s popularity. This means it’s very important to update as soon as possible.

### Don’t use ‘admin’ as the default admin username.

Don’t use usernames like `admin` since it is easily guessable. Usernames like this make brute forcing much easier.

### Disable User Enumeration

Always consider the information available on the JSON API about the users of the site. WordPress users data can be accessed via WordPress JSON API. This could expose something like usernames that could then be used in a brute force attempt or email addresses to be used to try to phish an user.

### Managing API Keys

Where possible, keys should be stored either in the `wp_options` table, or as a constant defined in the `wp-config.php`, never within the application source code. Storing keys in these locations reduce the chance of accidentally pushing these keys into an upstream version control repository. Additionally, these locations increase discoverability during routine security audits or when rotating keys.

---

## Input Validation and Sanitization

To validate is to ensure the data you’ve requested of the user matches what they’ve submitted. Sanitization is a broader approach ensuring data conforms to certain standards such as an integer or HTML-less text. The difference between validating and sanitizing data can be subtle at times and context-dependent.

Validation is always preferred to sanitization. Any non-static data that is stored in the database must be validated or sanitized. Not doing so can result in creating potential security vulnerabilities.

WordPress has a number of [validation](https://developer.wordpress.org/plugins/security/data-validation/#core-wordpress-functions) and [sanitization](https://developer.wordpress.org/themes/theme-security/data-sanitization-escaping/#sanitization-securing-input) functions built-in.

Sometimes it can be confusing as to which is the most appropriate for a given situation. Other times, it’s even appropriate to write our own sanitization and validation methods.

Here’s an example of validating an integer stored in post meta:

```php
if ( ! empty( $_POST['user_id'] ) ) {
  if ( absint( $_POST['user_id'] ) === $_POST['user_id'] ) {
    update_post_meta( $post_id, 'key', absint( $_POST['user_id'] ) );
  }
}
```

`$_POST['user_id']` is validated using `absint()` which ensures an `integer >= 0`. Without validation (or sanitization), `$_POST['user_id']` could be used maliciously to inject harmful code or data into the database.

Here is an example of sanitizing a text field value that will be stored in the database:

```php
if ( ! empty( $_POST['special_heading'] ) ) {
  update_option( 'option_key', sanitize_text_field( $_POST['special_heading'] ) );
}
```

Since `update_option()` is storing in the database, the value must be sanitized (or validated). The example uses the `sanitize_text_field()` function, which is appropriate for sanitizing general text fields.

### Raw SQL Preparation and Sanitization

There are times when dealing directly with SQL can’t be avoided. WordPress provides us with `$wpdb`.

```php
global $wpdb;

$wpdb->get_results( $wpdb->prepare( "SELECT id, name FROM $wpdb->posts WHERE ID='%d'", absint( $post_id ) ) );
```

`$wpdb->prepare()` behaves like `sprintf()` and essentially calls `mysqli_real_escape_string()` on each argument. `mysqli_real_escape_string()` escapes characters like `'` and `"` which prevents many SQL injection attacks.

By using `%d` in `sprintf()`, we are ensuring the argument is forced to be an integer. You might be wondering why `absint()` was used since it seems redundant. It’s better to over sanitize than to miss something accidentally.

Here is another example:

```php
global $wpdb;

$wpdb->insert( $wpdb->posts, array( 'post_content' => wp_kses_post( $post_content ), array( '%s' ) ) );
```

`$wpdb->insert()` creates a new row in the database. $post_content is being passed into the post_content column. The third argument lets us specify a format for our values `sprintf()` style. Forcing the value to be a string using the %s specifier prevents many SQL injection attacks. However, `wp_kses_post()` still needs to be called on $post_content as someone could inject harmful JavaScript otherwise.

---

## Escape or Validate Output

To escape is to ensure data conforms to specific standards before being passed off. Validation, again, ensures that data matches what is to be expected in a much stricter way. Any non-static data outputted to the browser must be escaped or validated.

WordPress has a number of core functions that can be leveraged for escaping. At Entermedia, we follow the philosophy of late escaping. This means we escape things just before output in order to reduce missed escaping and improve code readability.

Here are some simple examples of **late-escaped** output:

```php
<div>
  <?php echo esc_html( get_post_meta( $post_id, 'key', true ) ); ?>
</div>
```

`esc_html()` ensures output does not contain any HTML thus preventing JavaScript injection and layout breaks.

Here is another example:

```php
<a href="mailto:<?php echo sanitize_email( get_post_meta( $post_id, 'key', true ) ); ?>">Email me</a>
```

`sanitize_email()` ensures output is a valid email address. This is an example of validating our data. A broader escaping function like `esc_attr()` could have been used, but instead `sanitize_email()` was used to validate.

Here is another example:

```php
<script>
if ( document.cookie.indexOf( 'cookie_key' ) >= 0 ) {
  document.getElementById( 'test' ).getAttribute( 'href' ) = <?php echo wp_json_encode( get_post_meta( $post_id, 'key', true ) ); ?>;
}
</script>
```

`wp_json_encode()` ensures that whatever is returned is safe to be printed in your JavaScript code. It returns a JSON encoded string.

Note that `wp_json_encode()` includes the string-delimiting quotes for you.

Sometimes you need to escape data that is meant to serve as an attribute. For that, you can use `esc_attr()` to ensure output only contains characters appropriate for an attribute:

```php
<div class="<?php echo esc_attr( get_post_meta( $post_id, 'key', true ) ); ?>"></div>
```

If you need to escape such that HTML is permitted (but not harmful JavaScript), the wp_kses_* functions can be used:

```php
<div>
    <?php echo wp_kses_post( get_post_meta( $post_id, 'meta_key', true ) ); ?>
</div>
```

`wp_kses_*` functions should be used sparingly as they have bad performance due to a large number of regular expression matching attempts. If you find yourself using `wp_kses_*`, it’s worth evaluating what you are doing as a whole.

Are you providing a meta box for users to enter arbitrary HTML? Perhaps you can generate the HTML programmatically and provide the user with a few options to customize.

If you do have to use `wp_kses_*` on the frontend, output should be cached for as long as possible.

Translated text also often needs to be escaped on output.

Here’s an example:

```php
<div>
  <?php esc_html_e( 'An example localized string.', 'my-domain' ) ?>
</div>
```

Instead of using the generic `__()` function, something like `esc_html__()` might be more appropriate. Instead of using the generic `_e()` function, `esc_html_e()` would instead be used.

There are many escaping situations not covered in this section. Everyone should explore the [WordPress Plugin Handbook](https://developer.wordpress.org/plugins/security/securing-output/) section on escaping output to learn more.

---

## Nonces

In programming, a nonce, or number used only once, is a tool used to prevent [CSRF](https://en.wikipedia.org/wiki/Cross-site_request_forgery) or cross-site request forgery.

The purpose of a nonce is to make each request unique so an action cannot be replayed.

WordPress’ [implementation](https://developer.wordpress.org/plugins/security/nonces/) of nonces are not strictly numbers used once, though they serve an equal purpose.

The literal WordPress definition of nonces is “A cryptographic token tied to a specific action, user, and window of time.”. This means that while the number is not a true nonce, the resulting number is specifically tied to the action, user, and window of time for which it was generated.

Let’s say you want to trash a post with `ID` 1. To do that, you might visit this URL: `https://example.com/wp-admin/post.php?post=1&action=trash`

Since you are authenticated and authorized, an attacker could trick you into visiting a URL like this: `https://example.com/wp-admin/post.php?post=2&action=trash`

For this reason, the trash action requires a valid WordPress nonce.

After visiting `https://example.com/wp-admin/post.php?post=1&action=trash&_wpnonce=b192fc4204`, the same nonce will not be valid in `https://example.com/wp-admin/post.php?post=2&action=trash&_wpnonce=b192fc4204`.

Update and delete actions (like trashing a post) should require a valid nonce.

Here is some example code for creating a nonce:

```php
<form method="post" action="">
  <?php wp_nonce_field( 'my_action_name' ); ?>
  ...
</form>
```

When the form request is processed, the nonce must be verified:

```php
// Verify the nonce to continue.
if ( ! empty( $_POST['_wpnonce'] ) && wp_verify_nonce( $_POST['_wpnonce'], 'my_action_name' ) ) {
  // Nonce is valid!
}
```
