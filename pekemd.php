<?php
/**
 * Plugin Name:       PekeMD
 * Description:       It enables you to write in Markdown format into the Gutenberg WP editor
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.2.0
 * Author:            Pekebyte
 * Author URI:		  https://pekebyte.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       pekemd
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function pekemd_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'pekemd_block_init' );
