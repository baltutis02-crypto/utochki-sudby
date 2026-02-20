<?php
/**
 * SCHABLONN THEME functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package SCHABLONN_THEME
 *
 * TODO: THINGS TO REPLACE
 * SCHABLONN THEME
 * SCHABLONN_THEME
 * SCHABLONN-THEME
 * schablonn-theme
 * schablonn_theme
 * _SCHABLONN_THEME_VERSION
 *
 * with proper names
 *
 *
 */

if ( ! defined( '_SCHABLONN_THEME_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_SCHABLONN_THEME_VERSION', '0.9.0' );
}

if ( ! function_exists( 'schablonn_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function schablonn_theme_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on SCHABLONN THEME, use a find and replace
		 * to change 'schablonn-theme' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'schablonn-theme', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus(
			array(
				'menu-1' => esc_html__( 'Primary', 'schablonn-theme' ),
			)
		);

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support(
			'html5',
			array(
				'search-form',
				'comment-form',
				'comment-list',
				'gallery',
				'caption',
				'style',
				'script',
			)
		);



		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 250,
				'width'       => 250,
				'flex-width'  => true,
				'flex-height' => true,
			)
		);
	}
endif;
add_action( 'after_setup_theme', 'schablonn_theme_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function schablonn_theme_content_width() {
	$GLOBALS['content_width'] = apply_filters( 'schablonn_theme_content_width', 640 );
}
add_action( 'after_setup_theme', 'schablonn_theme_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function schablonn_theme_widgets_init() {
	register_sidebar(
		array(
			'name'          => esc_html__( 'Sidebar', 'schablonn-theme' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'schablonn-theme' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s">',
			'after_widget'  => '</section>',
			'before_title'  => '<h2 class="widget-title">',
			'after_title'   => '</h2>',
		)
	);
}
add_action( 'widgets_init', 'schablonn_theme_widgets_init' );

/**
 * Remove std editor from pages.
 */
function remove_editor() {
    remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'remove_editor');

/**
 * Remove std post and comment pages.
 */
function custom_menu_page_removing() {
    remove_menu_page( 'edit.php' );
    remove_menu_page( 'edit-comments.php' );
}

/**
 * Enqueue scripts and styles.
 */
function schablonn_theme_scripts() {
    /* Styles */
    wp_enqueue_style( 'bootstrap-min', 			get_template_directory_uri().'/assets/css/bootstrap.min.css' );
    wp_enqueue_style( 'bootstrap-grid', 		get_template_directory_uri().'/assets/css/bootstrap-grid.min.css' );
    wp_enqueue_style( 'bootstrap-reboot', 		get_template_directory_uri().'/assets/css/bootstrap-reboot.css' );
    wp_enqueue_style( 'owl-carousel', 			get_template_directory_uri().'/assets/css/owl.carousel.min.css' );
    wp_enqueue_style( 'owl-theme-default', 		get_template_directory_uri().'/assets/css/owl.theme.default.css' );
    wp_enqueue_style( 'slick-carousel', 		get_template_directory_uri().'/assets/css/slick.css' );
    wp_enqueue_style( 'slick-theme-default', 	get_template_directory_uri().'/assets/css/slick-theme.css' );
    wp_enqueue_style( 'lightbox-min', 			get_template_directory_uri().'/assets/css/lightbox.min.css' );
    wp_enqueue_style( 'schablonn-theme-style', 			get_stylesheet_uri(), array(), _SCHABLONN_THEME_VERSION );
    wp_style_add_data( 'schablonn-theme-style', 			'rtl', 'replace' );

    /* Scripts */
    wp_enqueue_script( 'jquery-minified', 		get_template_directory_uri().'/assets/js/jquery-3.3.1.min.js', 			array(), false, true );
    wp_enqueue_script( 'jquery-migrate', 		get_template_directory_uri().'/assets/js/jquery-migrate-1.4.1.min.js', 	array(), false, true );
    wp_enqueue_script( 'bootstrap-min-js', 		get_template_directory_uri().'/assets/js/bootstrap.min.js', 			array(), false, true );
    wp_enqueue_script( 'bootstrap-bundle-js', 	get_template_directory_uri().'/assets/js/bootstrap.bundle.min.js', 		array(), false, true );
    wp_enqueue_script( 'owl-carousel-js', 		get_template_directory_uri().'/assets/js/owl.carousel.min.js', 			array(), false, true );
    wp_enqueue_script( 'owl-marquee-js', 		get_template_directory_uri().'/assets/js/owl.marquee.min.js', 			array(), false, true );
    wp_enqueue_script( 'slick-slider-js', 		get_template_directory_uri().'/assets/js/slick.min.js', 				array(), false, true );
    wp_enqueue_script( 'wow-min', 				get_template_directory_uri().'/assets/js/wow.min.js', 					array(), false, true );
    wp_enqueue_script( 'schablonn-theme-script', 		get_template_directory_uri().'/assets/js/script.js', 					array(), false, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'schablonn_theme_scripts' );

/**
 * Enqueue backend scripts and styles.
 */
function load_admin_style() {
    wp_register_style( 'admin_css', get_template_directory_uri() . '/assets/css/admin-style.css', false, '1.0.0' );
}
add_action( 'admin_enqueue_scripts', 'load_admin_style' );

/**
 * Define custom backend colors.
 */
function additional_admin_color_schemes() {
    //Get the theme directory
    $theme_dir = get_template_directory_uri();

    wp_admin_css_color( 'schablonn-theme', __( 'SCHABLONN THEME' ),
        $theme_dir . '/assets/css/admin-colors/dist/colors.min.css',
        array( '#222222', '#F9F7F6', '#E0D5D1', '#E30613' )
    );
}
add_action('admin_init', 'additional_admin_color_schemes');

/**
 * Set Custom Color for new users by Default.
 */
function set_default_admin_color($user_id) {
    $args = array(
        'ID' => $user_id,
        'admin_color' => 'schablonn-theme'
    );
    wp_update_user( $args );
}
add_action('user_register', 'set_default_admin_color');

/**
 * Register ACF option pages.
 */
function register_acf_options_pages() {

    // Check function exists.
    if( !function_exists('acf_add_options_page') )
        return;

    $option_page_gnl = acf_add_options_page(
        array(
            'page_title'    => __('Allgemeine Einstellüngen'),
            'menu_title'    => __('Allgemeine Einstellüngen'),
            'menu_slug'     => 'general-settings',
            'capability'    => 'edit_posts',
            'redirect'      => false,
            'menu_icon'     => 'dashicons-admin-generic'
        )
    );
}
add_action('acf/init', 'register_acf_options_pages');

/**
 * Register custom post types.
 */
function create_post_type()
{

    // example with rooms and news/events included
    register_post_type('rooms', // Register Custom Post Type
        array(
            'labels' => array(
                'name' => 'Rooms', // Rename these to suit
                'singular_name' => 'Room'
            ),
            'show_in_nav_menus' => false,
            'show_ui' => true,
            'public' => false,
            'hierarchical' => false, // Allows your posts to behave like Hierarchy Pages
            'has_archive' => false,
            'menu_position' => 12,
            'menu_icon' => 'dashicons-admin-multisite',
            'supports' => array(
                'title',
            ),
            'can_export' => true, // Allows export in Tools > Export
            'taxonomies' => array()
        )
    );

    register_post_type('news_n_events', // Register Custom Post Type
        array(
            'labels' => array(
                'name' => 'News & Events', // Rename these to suit
                'singular_name' => 'News/Event'
            ),
            'show_in_nav_menus' => false,
            'show_ui' => true,
            'public' => true,
            'hierarchical' => false, // Allows your posts to behave like Hierarchy Pages
            'has_archive' => false,
            'menu_position' => 12,
            'menu_icon' => 'dashicons-media-document',
            'supports' => array(
                'title',
            ),
            'rewrite' => array(
                'slug' => "news-events"
            ),
            'can_export' => true, // Allows export in Tools > Export
            'taxonomies' => array()
        )
    );
}
add_action('init', 'create_post_type');