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
