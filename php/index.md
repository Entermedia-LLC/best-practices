---
label: PHP
icon: code
order: 550
---

## Performance

Writing performant code is absolutely critical, especially at the enterprise level. There are a number of strategies and best practices we must employ to ensure our code is optimized for high-traffic situations.

### Efficient Queries

**Build arrays that encourage lookup by key instead of search by value.** `in_array()` is not an efficient way to find if a given value is present in an array. The worst case scenario is that the whole array needs to be traversed, thus making it a function with [O(n)](https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions) complexity. VIP review reports `in_array()` use as an error, as it’s known not to scale.

The best way to check if a value is present in an array is by building arrays that encourage lookup by key and use `isset()`. `isset()` uses an [O(1)](https://en.wikipedia.org/wiki/Big_O_notation#Orders_of_common_functions) hash search on the key and will scale.

Here is an example of an array that encourages lookup by key by using the intended values as keys of an associative array

```php
$array = array(
 'foo' => true,
 'bar' => true,
);
if ( isset( $array['bar'] ) ) {
  // value is present in the array
};
```

In case you don’t have control over the array creation process and are forced to use `in_array()`, to improve the performance slightly, you should always set the third parameter to `true` to force use of strict comparison.

### Caching

Caching is simply the act of storing computed data somewhere for later use, and is an incredibly important concept in WordPress and Drupal. There are different ways to employ caching, and often multiple methods will be used.

### Avoid Sessions

Sessions add extra complexity to web sites and extra burden on hosting setups. Avoid using sessions to store individual users’ preferences or other data.

Instead of sessions, use cookies or client-side storage APIs if possible. In addition to keeping this data off the web servers, they empower site visitors to view and delete the data tied to their activity. Systems Engineers can configure full-page caches to ignore custom cookies so they don’t interfere with caching.

If sessions must be used, create them conservatively. Don’t create sessions for every visitor. Limit sessions to the smallest group that needs them: logged-in editors and admins, or visitors using a particular feature.

Sessions should never be stored in the database. This introduces extra data into a storage system that’s not meant for that volume. Database session libraries also rely on PHP code which can’t match the performance of PHP’s native session handlers. PHP extensions for Memcache and Redis allow sessions to be stored in these in-memory datastores and are a good solution for sessions when multiple webservers are present.

---

## Avoid Heredoc and Nowdoc

PHP’s **doc syntaxes** construct large strings of HTML within code, without the hassle of concatenating a bunch of one-liners. They tend to be easier to read, and are easier for inexperienced front-end developers to edit without accidentally breaking PHP code.

```php
$y = <<<JOKE
I told my doctor
"it hurts when I move my arm like this".
He said, "<em>then stop moving it like that!</em>"
JOKE;
```

However, heredoc/nowdoc make it impossible to practice **late escaping**:

```php
// Early escaping
$a = esc_attr( $my_class_name );

// Something naughty could happen to the string after early escaping
$a .= 'something naughty';

// Entermedia prefer to escape right at the point of output, which would be here
echo <<<HTML
<div class="test {$a}">test</div>
HTML;
```

As convenient as they are, engineers should avoid heredoc/nowdoc syntax and use traditional string concatenation & echoing instead. The HTML isn’t as easy to read. But, we can be sure escaping happens right at the point of output, regardless of what happened to a variable beforehand.

```php
// Something naughty could happen to the string...
$my_class_name .= 'something naughty';

// But it doesn't matter if we're late escaping
echo '<div class="test ' . esc_attr( $my_class_name ) . '">test</div>';
```

Even better, [use WordPress’ get_template_part() function as a basic template engine](https://developer.wordpress.org/reference/functions/get_template_part/#comment-2349). Make your template file consist mostly of HTML, with `<?php ?>` tags just where you need to escape and output. The resulting file will be as readable as a heredoc/nowdoc block, but can still perform late escaping within the template itself.
