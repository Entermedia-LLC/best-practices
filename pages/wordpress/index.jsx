// React.js imports
import { useEffect } from "react";

// Next.js imports
import Head from "next/head";

// Component imports
import Template from "../../components/templates/Default";
import Headline from "../../components/molecules/Headline";

// Library imports
import prismjs from "prismjs";
import "prismjs/themes/prism-coy.css";

import "prismjs/components/prism-markup-templating";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-php";

export default function WordPress() {
  useEffect(() => {
    prismjs.highlightAll();
  }, []);

  return (
    <>
      <Head>
        <title>WordPress | Entermedia Best Practices</title>
      </Head>

      <Template>
        <Headline level={1} id="wordpress">
          WordPress
        </Headline>
        <Headline level={2} id="performance" showAnchor>
          Performance
        </Headline>
        <p>
          Writing performant code is absolutely critical, especially at the
          enterprise level. There are a number of strategies and best practices
          we must employ to ensure our code is optimized for high-traffic
          situations.
        </p>
        <Headline level={3}>Efficient Database Queries</Headline>
        <p>
          When querying the database in WordPress, you should generally use a{" "}
          <a
            href="https://developer.wordpress.org/reference/classes/wp_query/"
            target="_blank"
            rel="noreferrer"
          >
            <code>WP_Query</code>
          </a>{" "}
          object. <code>WP_Query</code> objects take a number of useful
          arguments and do things behind-the-scenes that other database access
          methods such as{" "}
          <a
            href="https://developer.wordpress.org/reference/functions/get_posts/"
            target="_blank"
            rel="noreferrer"
          >
            <code>get_posts()</code>
          </a>{" "}
          do not.
        </p>
        <p>Here are a few key points:</p>
        <ul>
          <li>
            <p>Only run the queries that you need.</p>

            <p>
              A new <code>WP_Query</code> object runs five queries by default,
              including calculating pagination and priming the term and meta
              caches. Each of the following arguments will remove a query:
            </p>

            <ul>
              <li>
                <code>&apos;no_found_rows&apos; =&gt; true</code>: useful when
                pagination is not needed.
              </li>
              <li>
                <code>&apos;update_post_meta_cache&apos; =&gt; false</code>:
                useful when post meta will not be utilized.
              </li>
              <li>
                <code>&apos;update_post_term_cache&apos; =&gt; false</code>:
                useful when taxonomy terms will not be utilized.
              </li>
              <li>
                <code>&apos;fields&apos; =&gt; &apos;ids&apos;</code>: useful
                when only the post IDs are needed (less typical).
              </li>
            </ul>
          </li>
          <li>
            <p>
              Do not use <code>posts_per_page =&gt; -1</code>.
            </p>

            <p>
              This is a performance hazard. What if we have 100,000 posts? This
              could crash the site. If you are writing a widget, for example,
              and just want to grab all of a custom post type, determine a
              reasonable upper limit for your situation.
            </p>

            <pre>
              <code className="language-php">{`<?php
// Query for 500 posts.
new WP_Query( array(
  'posts_per_page' => 500,
));
?>`}</code>
            </pre>
          </li>
          <li>
            <p>
              Do not use <code>$wpdb</code> or <code>get_posts()</code> unless
              you have good reason.
            </p>

            <p>
              <code>get_posts()</code> actually calls <code>WP_Query</code>, but
              calling <code>get_posts()</code> directly bypasses a number of
              filters by default. Not sure whether you need these things or not?
              You probably don&apos;t.
            </p>
          </li>
          <li>
            <p>
              If you don&apos;t plan to paginate query results, always pass{" "}
              <code>no_found_rows =&gt; true</code> to <code>WP_Query</code>.
            </p>

            <p>
              This will tell WordPress not to run{" "}
              <code>SQL_CALC_FOUND_ROWS</code> on the SQL query, drastically
              speeding up your query. <code>SQL_CALC_FOUND_ROWS</code>{" "}
              calculates the total number of rows in your query which is
              required to know the total amount of “pages” for pagination.
            </p>

            <pre>
              <code className="language-php">{`<?php
// Skip SQL_CALC_FOUND_ROWS for performance (no pagination).
new WP_Query( array(
  'no_found_rows' => true,
));
?>`}</code>
            </pre>
          </li>
          <li>
            <p>
              Avoid using <code>post__not_in</code>.
            </p>

            <p>
              In most cases it&apos;s quicker to filter out the posts you
              don&apos;t need in PHP instead of within the query. This also
              means it can take advantage of better caching. This won&apos;t
              work correctly (without additional tweaks) for pagination.
            </p>

            <p>Use:</p>

            <pre>
              <code className="language-php">{`<?php
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
?>`}</code>
            </pre>

            <p>Instead of:</p>

            <pre>
              <code className="language-php">{`<?php
$foo_query = new WP_Query( array(
    'post_type' => 'post',
    'posts_per_page' => 30,
    'post__not_in' => $posts_to_exclude
) );
?>`}</code>
            </pre>

            <p>
              See{" "}
              <a
                href="https://vip.wordpress.com/documentation/performance-improvements-by-removing-usage-of-post__not_in/"
                target="_blank"
                rel="noreferrer"
              >
                WordPress VIP
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              A{" "}
              <a
                href="https://wordpress.org/support/article/taxonomies/"
                target="_blank"
                rel="noreferrer"
              >
                taxonomy
              </a>{" "}
              is a tool that lets us group or classify posts.
            </p>

            <p>
              <a
                href="https://wordpress.org/support/article/custom-fields/"
                target="_blank"
                rel="noreferrer"
              >
                Post meta
              </a>{" "}
              lets us store unique information about specific posts. As such the
              way post meta is stored does not facilitate efficient post
              lookups. Generally, looking up posts by post meta should be
              avoided (sometimes it can&apos;t). If you have to use one, make
              sure that it&apos;s not the main query and that it&apos;s cached.
            </p>
          </li>
          <li>
            <p>
              Passing <code>cache_results =&gt; false</code> to{" "}
              <code>WP_Query</code> is usually not a good idea.
            </p>

            <p>
              If <code>cache_results =&gt; true</code> (which is true by default
              if you have caching enabled and an object cache setup),{" "}
              <code>WP_Query</code> will cache the posts found among other
              things. It makes sense to use{" "}
              <code>cache_results =&gt; false</code> in rare situations
              (possibly WP-CLI commands).
            </p>
          </li>
          <li>
            <p>Multi-dimensional queries should be avoided.</p>

            <p>Examples of multi-dimensional queries include:</p>

            <pre>
              <code className="language-markup">{`* Querying for posts based on terms across multiple taxonomies
* Querying multiple post meta keys`}</code>
            </pre>

            <p>
              Each extra dimension of a query joins an extra database table.
              Instead, query by the minimum number of dimensions possible and
              use PHP to filter out results you don&apos;t need.
            </p>

            <p>Here is an example of a 2-dimensional query:</p>

            <pre>
              <code className="language-php">{`<?php
// Query for posts with both a particular category and tag.
new WP_Query( array(
  'category_name' => 'cat-slug',
  'tag' => 'tag-slug',
));
?>`}</code>
            </pre>
          </li>
        </ul>
        <Headline level={3}>
          WP_Query vs. get_posts() vs. query_posts()
        </Headline>
        <p>
          As outlined above, <code>get_posts()</code> and <code>WP_Query</code>,
          apart from some slight nuances, are quite similar. Both have the same
          performance cost (minus the implication of skipping filters): the
          query performed.
        </p>
        <p>
          <a
            href="https://developer.wordpress.org/reference/functions/query_posts/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>query_posts()</code>
          </a>
          , on the other hand, behaves quite differently than the other two and
          should almost never be used. Specifically:
        </p>
        <ul>
          <li>
            It creates a new <code>WP_Query</code> object with the parameters
            you specify.
          </li>
          <li>
            It replaces the existing main query loop with a new instance of{" "}
            <code>WP_Query</code>.
          </li>
        </ul>
        <p>
          As noted in the{" "}
          <a
            href="https://developer.wordpress.org/reference/functions/query_posts/#more-information"
            target="_blank"
            rel="noreferrer noopener"
          >
            WordPress Docs (along with a useful query flow chart)
          </a>
          , <code>query_posts()</code> isn&apos;t meant to be used by plugins or
          themes. Due to replacing and possibly re-running the main query,{" "}
          <code>query_posts()</code> is not performant and certainly not an
          acceptable way of changing the main query.
        </p>
        <Headline level={3}>The “Object Cache”</Headline>
        <p>
          Object caching is the act of caching data or objects for later use. In
          the context of WordPress, objects are cached in memory so they can be
          retrieved quickly.
        </p>
        <p>
          In WordPress, the object cache functionality provided by{" "}
          <a
            href="https://developer.wordpress.org/reference/classes/wp_object_cache/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>WP_Object_Cache</code>
          </a>
          , and the{" "}
          <a
            href="https://developer.wordpress.org/apis/handbook/transients/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Transients API
          </a>{" "}
          are great solutions for improving performance on long-running queries,
          complex functions, or similar.
        </p>
        <p>
          On a regular WordPress install, the difference between transients and
          the object cache is that transients are persistent and would write to
          the options table, while the object cache only persists for the
          particular page load.
        </p>
        <p>
          It is possible to create a transient that will never expire by
          omitting the third parameter, this should be avoided as any
          non-expiring transients are autoloaded on every page and you may
          actually decrease performance by doing so.
        </p>
        <p>
          On environments with a persistent caching mechanism (i.e.{" "}
          <a
            href="https://memcached.org/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Memcache
          </a>
          ,{" "}
          <a href="https://redis.io/" target="_blank" rel="noreferrer noopener">
            Redis
          </a>
          , or similar) enabled, the transient functions become wrappers for the
          normal <code>WP_Object_Cache</code> functions. The objects are
          identically stored in the object cache and will be available across
          page loads.
        </p>
        <p>
          High-traffic environments <em>not</em> using a persistent caching
          mechanism should be wary of using transients and filling the
          wp_options table with an excessive amount of data. See the “
          <a
            href="#appropriate-data-storage"
            target="_blank"
            rel="noreferrer noopener"
          >
            Appropriate Data Storage
          </a>
          ” section for details.
        </p>
        <p>
          Note: as the objects are stored in memory, you need to consider that
          these objects can be cleared at any time and that your code must be
          constructed in a way that it would not rely on the objects being in
          place.
        </p>
        <p>
          This means you always need to ensure you check for the existence of a
          cached object and be ready to generate it in case it&apos;s not
          available. Here is an example:
        </p>
        <pre>
          <code className="language-php">{`<?php
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
?>`}</code>
        </pre>
        <p>
          In the above example, the cache is checked for an object with the 10
          most commented posts and would generate the list in case the object is
          not in the cache yet. Generally, calls to <code>WP_Query</code> other
          than the main query should be cached.
        </p>
        <p>
          As the content is cached for 300 seconds, the query execution is
          limited to one time every 5 minutes, which is nice.
        </p>
        <p>
          However, the cache rebuild in this example would always be triggered
          by a visitor who would hit a stale cache, which will increase the page
          load time for the visitors and under high-traffic conditions. This can
          cause race conditions when a lot of people hit a stale cache for a
          complex query at the same time. In the worst case, this could cause
          queries at the database server to pile up causing replication, lag, or
          worse.
        </p>
        <p>
          That said, a relatively easy solution for this problem is to make sure
          that your users would ideally always hit a primed cache. To accomplish
          this, you need to think about the conditions that need to be met to
          make the cached value invalid. In our case this would be the change of
          a comment.
        </p>
        <p>
          The easiest hook we could identify that would be triggered for any of
          this actions would be{" "}
          <a
            href="https://developer.wordpress.org/reference/hooks/wp_update_comment_count/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <code>wp_update_comment_count</code>
          </a>{" "}
          set as{" "}
          <code>
            do_action( &apos;wp_update_comment_count&apos;, $post_id, $new, $old
            )
          </code>
          .
        </p>
        <p>
          With this in mind, the function could be changed so that the cache
          would always be primed when this action is triggered.
        </p>
        <p>Here is how it&apos;s done:</p>
        <pre>
          <code className="language-php">{`<?php
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
?>`}</code>
        </pre>
        <p>
          With this implementation, you can keep the cache object forever and
          don&apos;t need to add an expiration for the object as you would
          create a new cache entry whenever it is required. Just keep in mind
          that some external caches (like Memcache) can invalidate cache objects
          without any input from WordPress.
        </p>
        <p>
          For that reason, it&apos;s best to make the code that repopulates the
          cache available for many situations.
        </p>
        <p>
          In some cases, it might be necessary to create multiple objects
          depending on the parameters a function is called with. In these cases,
          it&apos;s usually a good idea to create a cache key which includes a
          representation of the variable parameters. A simple solution for this
          would be appending an md5 hash of the serialized parameters to the key
          name.
        </p>
        <Headline level={3}>Page Caching</Headline>
        <p>
          Page caching in the context of web development refers to storing a
          requested location&apos;s entire output to serve in the event of
          subsequent requests to the same location.
        </p>
        <p>
          <a
            href="https://wordpress.org/plugins/batcache"
            target="_blank"
            rel="noreferrer noopener"
          >
            Batcache
          </a>{" "}
          is a WordPress plugin that uses the object cache (often Memcache in
          the context of WordPress) to store and serve rendered pages. It can
          also optionally cache redirects. It&apos;s not as fast as some other
          caching plugins, but it can be used where file-based caching is not
          practical or desired.
        </p>
        <p>
          Batcache is aimed at preventing a flood of traffic from breaking your
          site. It does this by serving old (5 minute max age by default, but
          adjustable) pages to new users. This reduces the demand on the web
          server CPU and the database. It also means some people may see a page
          that is a few minutes old. However, this only applies to people who
          have not interacted with your website before. Once they have logged-in
          or left a comment, they will always get fresh pages.
        </p>
        <p>
          Although this plugin has a lot of benefits, it also has a couple of
          code design requirements:
        </p>
        <ul>
          <li>
            As the rendered HTML of your pages might be cached, you cannot rely
            on server side logic related to <code>$_SERVER</code>,{" "}
            <code>$_COOKIE</code> or other values that are unique to a
            particular user.
          </li>
          <li>
            You can however implement cookie or other user based logic on the
            front-end (e.g. with JavaScript)
          </li>
        </ul>
        <p>
          Batcache does not cache logged in users (based on WordPress login
          cookies), so keep in mind the performance implications for
          subscription sites (like BuddyPress). Batcache also treats the query
          string as part of the URL which means the use of query strings for
          tracking campaigns (common with Google Analytics) can render page
          caching ineffective. Also beware that while WordPress VIP uses
          batcache, there are specific rules and conditions on VIP that do not
          apply to the open source version of the plugin.
        </p>
        <p>
          There are other popular page caching solutions such as the W3 Total
          Cache plugin, though we generally do not use them for a variety of
          reasons.
        </p>
        <Headline level={4}>AJAX Endpoints</Headline>
        <p>
          AJAX stands for Asynchronous JavaScript and XML. Often, we use
          JavaScript on the client-side to ping endpoints for things like
          infinite scroll.
        </p>
        <p>
          WordPress{" "}
          <a
            href="https://developer.wordpress.org/plugins/javascript/ajax/"
            target="_blank"
            rel="noopener noreferrer"
          >
            provides an API
          </a>{" "}
          to register AJAX endpoints on <code>wp-admin/admin-ajax.php</code>.
          However, WordPress does not cache queries within the administration
          panel for obvious reasons. Therefore, if you send requests to an
          admin-ajax.php endpoint, you are bootstrapping WordPress and running
          un-cached queries. Used properly, this is totally fine. However, this
          can take down a website if used on the frontend.
        </p>
        <p>
          For this reason, front-facing endpoints should be written by using the{" "}
          <a
            href="https://developer.wordpress.org/apis/handbook/rewrite/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rewrite Rules API
          </a>{" "}
          and hooking early into the WordPress request process.
        </p>
        <p>Here is a simple example of how to structure your endpoints:</p>
        <pre>
          <code className="language-php">{`<?php
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
?>`}</code>
        </pre>
        <Headline level={3}>Cache Remote Requests</Headline>
        <p>
          Requests made to third-parties, whether synchronous or asynchronous,
          should be cached. Not doing so will result in your site&apos;s load
          time depending on an unreliable third-party!
        </p>
        <p>Here is a quick code example for caching a third-party request:</p>
        <pre>
          <code className="language-php">{`<?php
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
?>`}</code>
        </pre>
        <p>
          <code>prefix_get_posts_from_other_blog()</code> can be called to get
          posts from a third-party and will handle caching internally.
        </p>
        <Headline level={3} id="appropriate-data-storage">
          Appropriate Data Storage
        </Headline>
        <p>
          Utilizing built-in WordPress APIs we can store data in a number of
          ways.
        </p>
        <p>
          We can store data using options, post meta, post types, object cache,
          and taxonomy terms.
        </p>
        <p>
          There are a number of performance considerations for each WordPress
          storage vehicle:
        </p>
        <ul>
          <li>
            <p>
              <a
                href="https://developer.wordpress.org/apis/handbook/options/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Options
              </a>{" "}
              - The options API is a simple key-value storage system backed by a
              MySQL table. This API is meant to store things like settings and
              not variable amounts of data.
            </p>

            <p>
              Site performance, especially on large websites, can be negatively
              affected by a large options table. It&apos;s recommended to
              regularly monitor and keep this table under 500 rows. The
              “autoload” field should only be set to ‘yes&apos; for values that
              need to be loaded into memory on each page load.
            </p>

            <p>
              Caching plugins can also be negatively affected by a large
              wp_options table. Popular caching plugins such as{" "}
              <a
                href="https://wordpress.org/plugins/memcached/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Memcached
              </a>{" "}
              place a 1MB limit on individual values stored in cache. A large
              options table can easily exceed this limit, severely slowing each
              page load.
            </p>
          </li>
          <li>
            <a
              href="https://wordpress.org/support/article/custom-fields/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Post Meta or Custom Fields
            </a>{" "}
            - Post meta is an API meant for storing information specific to a
            post. For example, if we had a custom post type, “Product”, “serial
            number” would be information appropriate for post meta. Because of
            this, it usually doesn&apos;t make sense to search for groups of
            posts based on post meta.
          </li>
          <li>
            <a
              href="https://wordpress.org/support/article/taxonomies/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taxonomies and Terms
            </a>{" "}
            - Taxonomies are essentially groupings. If we have a classification
            that spans multiple posts, it is a good fit for a taxonomy term. For
            example, if we had a custom post type, “Car”, “Nissan” would be a
            good term since multiple cars are made by Nissan. Taxonomy terms can
            be efficiently searched across as opposed to post meta.
          </li>
          <li>
            <a
              href="https://wordpress.org/support/article/post-types/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Custom Post Types
            </a>{" "}
            - WordPress has the notion of “post types”. “Post” is a post type
            which can be confusing. We can register custom post types to store
            all sorts of interesting pieces of data. If we have a variable
            amount of data to store such as a product, a custom post type might
            be a good fit.
          </li>
          <li>
            <a
              href="https://developer.wordpress.org/reference/classes/wp_object_cache/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Object Cache
            </a>{" "}
            - See the Object Cache section above.
          </li>
        </ul>
        <Headline level={3}>Database Writes</Headline>
        <ul>
          <li>
            <p>
              Generally, do not write to the database on frontend pages as doing
              so can result in major performance issues and race conditions.
            </p>
          </li>
          <li>
            <p>
              When multiple threads (or page requests) read or write to a shared
              location in memory and the order of those read or writes is
              unknown, you have what is known as a{" "}
              <a
                href="https://en.wikipedia.org/wiki/Race_condition"
                target="_blank"
                rel="noopener noreferrer"
              >
                race condition
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              Store information in the correct place. See the “
              <a href="#appropriate-data-storage">Appropriate Data Storage</a>”
              section.
            </p>
          </li>
          <li>
            <p>
              Certain options are “autoloaded” or put into the object cache on
              each page load. When{" "}
              <a
                href="https://developer.wordpress.org/apis/handbook/options/"
                target="_blank"
                rel="noopener noreferrer"
              >
                creating or updating options
              </a>
              , you can pass an <code>$autoload</code> argument to{" "}
              <a
                href="https://developer.wordpress.org/reference/functions/add_option/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>add_option()</code>
              </a>
              . If your option is not going to get used often, it shouldn&apos;t
              be autoloaded. As of WordPress 4.2,{" "}
              <a
                href="https://developer.wordpress.org/reference/functions/update_option/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>update_option()</code>
              </a>{" "}
              supports configuring autoloading directly by passing an optional{" "}
              <code>$autoload</code> argument. Using this third parameter is
              preferable to using a combination of{" "}
              <a
                href="https://developer.wordpress.org/reference/functions/delete_option/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code>delete_option()</code>
              </a>{" "}
              and <code>add_option()</code> to disable autoloading for existing
              options.
            </p>
          </li>
        </ul>
        <p>
          Writing information to the database is at the core of any website you
          build. Here are some tips:
        </p>
        <Headline level={2} id="wpgraphql" showAnchor>
          WPGraphQL
        </Headline>
        <p>
          If you are choosing to use GraphQL on a WordPress project, it is
          recommended to use the WPGraphQL plugin. This plugin will return
          WordPress data in JSON format through a GraphQL endpoint - in many
          cases you won&apos;t need to write the schema yourself. This will give
          you all the benefits of concatenating your data requests as well as
          easy access to your data as it is output by WordPress. You can
          retrieve your data by passing a query directly into a simple fetch
          request:
        </p>
        <pre>
          <code className="language-javascript">{`fetch('/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: '[your query string goes here]' }),
  }).then((res) => res.json());`}</code>
        </pre>
        <p>
          The above code snippet will help you get started in making requests to
          the GraphQL service.
        </p>
      </Template>
    </>
  );
}
