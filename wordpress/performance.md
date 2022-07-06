---
label: Performance
icon: rocket
---

# Performance

Writing performant code is absolutely critical, especially at the enterprise level. There are a number of strategies and best practices we must employ to ensure our code is optimized for high-traffic situations.

---

## Efficient Database Queries

When querying the database in WordPress, you should generally use a `WP_Query` object. `WP_Query` objects take a number of useful arguments and do things behind-the-scenes that other database access methods such as `get_posts()` do not.

Here are a few key points:

- Only run the queries that you need.
  A new `WP_Query` object runs five queries by default, including calculating pagination and priming the term and meta caches. Each of the following arguments will remove a query:
  - `'no_found_rows' => true`: useful when pagination is not needed.
  - `'update_post_meta_cache' => false`: useful when post meta will not be utilized.
  - `'update_post_term_cache' => false`: useful when taxonomy terms will not be utilized.
  - `'fields' => 'ids'`: useful when only the post IDs are needed (less typical).
- Do not use `posts_per_page => -1`. This is a performance hazard. What if we have 100,000 posts? This could crash the site. If you are writing a widget, for example, and just want to grab all of a custom post type, determine a reasonable upper limit for your situation.
  ```php
  // Query for 500 posts.
  new WP_Query( array(
    'posts_per_page' => 500,
  ));
  ```
- Do not use `$wpdb` or `get_posts()` unless you have good reason. `get_posts()` actually calls `WP_Query`, but calling `get_posts()` directly bypasses a number of filters by default. Not sure whether you need these things or not? You probably don't.
- If you don't plan to paginate query results, always pass `no_found_rows => true` to `WP_Query`. This will tell WordPress not to run `SQL_CALC_FOUND_ROWS` on the SQL query, drastically speeding up your query. `SQL_CALC_FOUND_ROWS` calculates the total number of rows in your query which is required to know the total amount of “pages” for pagination.
  ```php
  // Skip SQL_CALC_FOUND_ROWS for performance (no pagination).
  new WP_Query( array(
    'no_found_rows' => true,
  ));
  ```
- Avoid using `post__not_in`. In most cases it's quicker to filter out the posts you don't need in PHP instead of within the query. This also means it can take advantage of better caching. This won't work correctly (without additional tweaks) for pagination.

  ```php Do
  $foo_query = new WP_Query( array(
      'post_type' => 'post',
      'posts_per_page' => 30 + count( $posts_to_exclude )
  ) );

  if ( $foo_query->have_posts() ) :
      while ( $foo_query->have_posts() ) :
          $foo_query->the_post();
          if ( in_array( get_the_ID(), $posts_to_exclude ) ) {
              continue;
          }
          the_title();
      endwhile;
  endif;
  ```

  ```php Don't
  $foo_query = new WP_Query( array(
    'post_type' => 'post',
    'posts_per_page' => 30,
    'post__not_in' => $posts_to_exclude
  ) );
  ```

  !!!info See [WordPress VIP](https://vip.wordpress.com/documentation/performance-improvements-by-removing-usage-of-post__not_in/) for more information.
  !!!
- A [taxonomy](https://wordpress.org/support/article/taxonomies/) is a tool that lets us group or classify posts.
- [Post meta](https://wordpress.org/support/article/custom-fields/) lets us store unique information about specific posts. As such the way post meta is stored does not facilitate efficient post lookups. Generally, looking up posts by post meta should be avoided (sometimes it can't). If you have to use one, make sure that it's not the main query and that it's cached.
- Passing `cache_results => false` to `WP_Query` is usually not a good idea. If `cache_results => true` (which is true by default if you have caching enabled and an object cache setup), `WP_Query` will cache the posts found among other things. It makes sense to use `cache_results => false` in rare situations (possibly WP-CLI commands).
- Multi-dimensional queries should be avoided. Examples of multi-dimensional queries include:
  ```php
  // Query for posts with both a particular category and tag.
  new WP_Query( array(
    'category_name' => 'cat-slug',
    'tag' => 'tag-slug',
  ));
  ```

---

## `WP_Query` vs. `get_posts()` vs. `query_posts()`

As outlined above, `get_posts()` and `WP_Query`, apart from some slight nuances, are quite similar. Both have the same performance cost (minus the implication of skipping filters): the query performed.

`query_posts()`, on the other hand, behaves quite differently than the other two and should almost never be used. Specifically:

- It creates a new `WP_Query` object with the parameters you specify.
- It replaces the existing main query loop with a new instance of `WP_Query`

As noted in the [WordPress Docs (along with a useful query flow chart)](https://developer.wordpress.org/reference/functions/query_posts/#more-information), `query_posts()` isn't meant to be used by plugins or themes. Due to replacing and possibly re-running the main query, `query_posts()` is not performant and certainly not an acceptable way of changing the main query.

---

## The “Object Cache”

Object caching is the act of caching data or objects for later use. In the context of WordPress, objects are cached in memory so they can be retrieved quickly.

In WordPress, the object cache functionality provided by `WP_Object_Cache`, and the Transients API are great solutions for improving performance on long-running queries, complex functions, or similar.

On a regular WordPress install, the difference between transients and the object cache is that transients are persistent and would write to the options table, while the object cache only persists for the particular page load.

It is possible to create a transient that will never expire by omitting the third parameter, this should be avoided as any non-expiring transients are autoloaded on every page and you may actually decrease performance by doing so.

On environments with a persistent caching mechanism (i.e. [Memcache](https://memcached.org/), [Redis](https://redis.io/), or similar) enabled, the transient functions become wrappers for the normal `WP_Object_Cache` functions. The objects are identically stored in the object cache and will be available across page loads.

High-traffic environments not using a persistent caching mechanism should be wary of using transients and filling the wp_options table with an excessive amount of data. See the “[Appropriate Data Storage]” section for details.

!!!primary Note
As the objects are stored in memory, you need to consider that these objects can be cleared at any time and that your code must be constructed in a way that it would not rely on the objects being in place.
!!!

This means you always need to ensure you check for the existence of a cached object and be ready to generate it in case it's not available. Here is an example:

```php
/**
 * Retrieve top 10 most-commented posts and cache the results.
 *
 * @return array|WP_Error Array of WP_Post objects with the highest comment counts,
 *                        WP_Error object otherwise.
 */
function prefix_get_top_commented_posts() {
  // Check for the top_commented_posts key in the 'top_posts' group.
  $top_commented_posts = wp_cache_get( 'prefix_top_commented_posts', 'top_posts' );

  // If nothing is found, build the object.
  if ( false === $top_commented_posts ) {
      // Grab the top 10 most commented posts.
    $top_commented_posts = new WP_Query( 'orderby=comment_count&posts_per_page=10' );

    if ( ! is_wp_error( $top_commented_posts ) && $top_commented_posts->have_posts() ) {
      // Cache the whole WP_Query object in the cache and store it for 5 minutes (300 secs).
      wp_cache_set( 'prefix_top_commented_posts', $top_commented_posts->posts, 'top_posts', 5 * MINUTE_IN_SECONDS );
    }
  }
  return $top_commented_posts;
}
```

In the above example, the cache is checked for an object with the 10 most commented posts and would generate the list in case the object is not in the cache yet. Generally, calls to `WP_Query` other than the main query should be cached.

As the content is cached for 300 seconds, the query execution is limited to one time every 5 minutes, which is nice.

However, the cache rebuild in this example would always be triggered by a visitor who would hit a stale cache, which will increase the page load time for the visitors and under high-traffic conditions. This can cause race conditions when a lot of people hit a stale cache for a complex query at the same time. In the worst case, this could cause queries at the database server to pile up causing replication, lag, or worse.

That said, a relatively easy solution for this problem is to make sure that your users would ideally always hit a primed cache. To accomplish this, you need to think about the conditions that need to be met to make the cached value invalid. In our case this would be the change of a comment.

The easiest hook we could identify that would be triggered for any of this actions would be `wp_update_comment_count set as do_action( 'wp_update_comment_count', $post_id, $new, $old )`.

With this in mind, the function could be changed so that the cache would always be primed when this action is triggered.

Here is how it's done:

```php
/**
 * Prime the cache for the top 10 most-commented posts.
 *
 * @param int $post_id Post ID.
 * @param int $new     The new comment count.
 * @param int $old     The old comment count.
 */
function prefix_refresh_top_commented_posts( $post_id, $new, $old ) {
  // Force the cache refresh for top-commented posts.
  prefix_get_top_commented_posts( $force_refresh = true );
}
add_action( 'wp_update_comment_count', 'prefix_refresh_top_commented_posts', 10, 3 );

/**
 * Retrieve top 10 most-commented posts and cache the results.
 *
 * @param bool $force_refresh Optional. Whether to force the cache to be refreshed. Default false.
 * @return array|WP_Error Array of WP_Post objects with the highest comment counts, WP_Error object otherwise.
 */
function prefix_get_top_commented_posts( $force_refresh = false ) {
  // Check for the top_commented_posts key in the 'top_posts' group.
  $top_commented_posts = wp_cache_get( 'prefix_top_commented_posts', 'top_posts' );

  // If nothing is found, build the object.
  if ( true === $force_refresh || false === $top_commented_posts ) {
    // Grab the top 10 most commented posts.
    $top_commented_posts = new WP_Query( 'orderby=comment_count&posts_per_page=10' );

    if ( ! is_wp_error( $top_commented_posts ) && $top_commented_posts->have_posts() ) {
      // In this case we don't need a timed cache expiration.
      wp_cache_set( 'prefix_top_commented_posts', $top_commented_posts->posts, 'top_posts' );
    }
  }
  return $top_commented_posts;
}
```

With this implementation, you can keep the cache object forever and don't need to add an expiration for the object as you would create a new cache entry whenever it is required. Just keep in mind that some external caches (like Memcache) can invalidate cache objects without any input from WordPress.

For that reason, it's best to make the code that repopulates the cache available for many situations.

In some cases, it might be necessary to create multiple objects depending on the parameters a function is called with. In these cases, it's usually a good idea to create a cache key which includes a representation of the variable parameters. A simple solution for this would be appending an md5 hash of the serialized parameters to the key name.

---

## Page Caching

Page caching in the context of web development refers to storing a requested location's entire output to serve in the event of subsequent requests to the same location.

[Batcache](https://wordpress.org/plugins/batcache) is a WordPress plugin that uses the object cache (often Memcache in the context of WordPress) to store and serve rendered pages. It can also optionally cache redirects. It's not as fast as some other caching plugins, but it can be used where file-based caching is not practical or desired.

Batcache is aimed at preventing a flood of traffic from breaking your site. It does this by serving old (5 minute max age by default, but adjustable) pages to new users. This reduces the demand on the web server CPU and the database. It also means some people may see a page that is a few minutes old. However, this only applies to people who have not interacted with your website before. Once they have logged-in or left a comment, they will always get fresh pages.

Although this plugin has a lot of benefits, it also has a couple of code design requirements:

- As the rendered HTML of your pages might be cached, you cannot rely on server side logic related to `$_SERVER`, `$_COOKIE` or other values that are unique to a particular user.
- You can however implement cookie or other user based logic on the front-end (e.g. with JavaScript)

Batcache does not cache logged in users (based on WordPress login cookies), so keep in mind the performance implications for subscription sites (like BuddyPress). Batcache also treats the query string as part of the URL which means the use of query strings for tracking campaigns (common with Google Analytics) can render page caching ineffective. Also beware that while WordPress VIP uses batcache, there are specific rules and conditions on VIP that do not apply to the open source version of the plugin.

There are other popular page caching solutions such as the W3 Total Cache plugin, though we generally do not use them for a variety of reasons.

### AJAX Endpoints

AJAX stands for Asynchronous JavaScript and XML. Often, we use JavaScript on the client-side to ping endpoints for things like infinite scroll.

WordPress [provides an API](https://developer.wordpress.org/plugins/javascript/ajax/) to register AJAX endpoints on `wp-admin/admin-ajax.php`. However, WordPress does not cache queries within the administration panel for obvious reasons. Therefore, if you send requests to an admin-ajax.php endpoint, you are bootstrapping WordPress and running un-cached queries. Used properly, this is totally fine. However, this can take down a website if used on the frontend.

For this reason, front-facing endpoints should be written by using the [Rewrite Rules API](https://developer.wordpress.org/apis/handbook/rewrite/) and hooking early into the WordPress request process.

Here is a simple example of how to structure your endpoints:

```php
/**
 * Register a rewrite endpoint for the API.
 */
function prefix_add_api_endpoints() {
	add_rewrite_tag( '%api_item_id%', '([0-9]+)' );
	add_rewrite_rule( 'api/items/([0-9]+)/?', 'index.php?api_item_id=$matches[1]', 'top' );
}
add_action( 'init', 'prefix_add_api_endpoints' );

/**
 * Handle data (maybe) passed to the API endpoint.
 */
function prefix_do_api() {
	global $wp_query;

	$item_id = $wp_query->get( 'api_item_id' );

	if ( ! empty( $item_id ) ) {
		$response = array();

		// Do stuff with $item_id

		wp_send_json( $response );
	}
}
add_action( 'template_redirect', 'prefix_do_api' );
```

---

## Cache Remote Requests

Requests made to third-parties, whether synchronous or asynchronous, should be cached. Not doing so will result in your site's load time depending on an unreliable third-party!

Here is a quick code example for caching a third-party request:

```php
/**
 * Retrieve posts from another blog and cache the response body.
 *
 * @return string Body of the response. Empty string if no body or incorrect parameter given.
 */
function prefix_get_posts_from_other_blog() {
  if ( false === ( $posts = wp_cache_get( 'prefix_other_blog_posts' ) ) ) {
    $request = wp_remote_get( ... );
    $posts = wp_remote_retrieve_body( $request );

    wp_cache_set( 'prefix_other_blog_posts', $posts, '', HOUR_IN_SECONDS );
  }

  return $posts;
}
```

`prefix_get_posts_from_other_blog()` can be called to get posts from a third-party and will handle caching internally.

---

## Appropriate Data Storage

Utilizing built-in WordPress APIs we can store data in a number of ways.

We can store data using options, post meta, post types, object cache, and taxonomy terms.

There are a number of performance considerations for each WordPress storage vehicle:

- [Options](https://developer.wordpress.org/apis/handbook/options/) - The options API is a simple key-value storage system backed by a MySQL table. This API is meant to store things like settings and not variable amounts of data.

  Site performance, especially on large websites, can be negatively affected by a large options table. It's recommended to regularly monitor and keep this table under 500 rows. The “autoload” field should only be set to ‘yes' for values that need to be loaded into memory on each page load.

  Caching plugins can also be negatively affected by a large `wp_options` table. Popular caching plugins such as [Memcached](https://wordpress.org/plugins/memcached/) place a 1MB limit on individual values stored in cache. A large options table can easily exceed this limit, severely slowing each page load.

- [Post Meta or Custom Fields](https://wordpress.org/support/article/custom-fields/) - Post meta is an API meant for storing information specific to a post. For example, if we had a custom post type, “Product”, “serial number” would be information appropriate for post meta. Because of this, it usually doesn't make sense to search for groups of posts based on post meta.
- [Taxonomies and Terms](https://wordpress.org/support/article/taxonomies/) - Taxonomies are essentially groupings. If we have a classification that spans multiple posts, it is a good fit for a taxonomy term. For example, if we had a custom post type, “Car”, “Nissan” would be a good term since multiple cars are made by Nissan. Taxonomy terms can be efficiently searched across as opposed to post meta.
- [Custom Post Types](https://wordpress.org/support/article/post-types/) - WordPress has the notion of “post types”. “Post” is a post type which can be confusing. We can register custom post types to store all sorts of interesting pieces of data. If we have a variable amount of data to store such as a product, a custom post type might be a good fit.
- [Object Cache](https://developer.wordpress.org/reference/classes/wp_object_cache/) - See the Object Cache section above.

---

## Database Writes

- Generally, do not write to the database on frontend pages as doing so can result in major performance issues and race conditions.
- When multiple threads (or page requests) read or write to a shared location in memory and the order of those read or writes is unknown, you have what is known as a [race condition](https://en.wikipedia.org/wiki/Race_condition).
- Store information in the correct place. See the “[Appropriate Data Storage](https://entermedia-llc.github.io/best-practices/wordpress#appropriate-data-storage)” section.
- Certain options are “autoloaded” or put into the object cache on each page load. When [creating or updating options](https://developer.wordpress.org/apis/handbook/options/), you can pass an `$autoload` argument to `add_option()`. If your option is not going to get used often, it shouldn't be autoloaded. As of WordPress 4.2, `update_option()` supports configuring autoloading directly by passing an optional `$autoload` argument. Using this third parameter is preferable to using a combination of `delete_option()` and `add_option()` to disable autoloading for existing options.

