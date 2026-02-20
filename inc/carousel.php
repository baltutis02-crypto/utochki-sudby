<?php
	$c_img_id = get_sub_field('c_img');
	$c_heading = get_sub_field('c_heading');
	$c_subheading = get_sub_field('c_subheading');
	$c_text = get_sub_field('c_text');
	$c_subtext = get_sub_field('c_subtext');
	$c_link = get_sub_field('c_link');
?>
<!-- Carousel block and precontent HTML begin -->
<?php echo wp_get_attachment_image($c_img_id, 'thumbnail_name');?>
<!-- Carousel precontent HTML end -->
<?php
	if( have_rows('c_carousel') ):
		while ( have_rows('c_carousel') ) : the_row();
			$c_c_heading = get_sub_field('c_c_heading');
			$c_c_subheading = get_sub_field('c_c_subheading');
			$c_c_text = get_sub_field('c_c_text');
			$c_c_subtext = get_sub_field('c_c_subtext');
			$c_c_link = get_sub_field('c_c_link');
			$c_c_img_id = get_sub_field('c_c_img');
			?>
				<!-- Carousel item HTML begin -->
				<?php echo wp_get_attachment_image($c_c_img_id, 'thumbnail_name');?>
				<!-- Carousel item HTML end -->
			<?php			
		endwhile;
	endif;
?>
<!-- Carousel block HTML end -->