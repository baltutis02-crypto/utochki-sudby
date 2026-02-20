<?php
	$ms_static_img_id = get_sub_field('ms_static-img');
?>
<!-- Marquee Slider Carousel begin and Static image -->
<?php echo wp_get_attachment_image($ms_static_img_id, 'thumbnail_name');?>
<?php
	if( have_rows('ms_carousel') ):
		while ( have_rows('ms_carousel') ) : the_row();
			$ms_slider_img_id = get_sub_field('ms_c_img');
			?>
				<!-- Picture Slider Carousel slide HTML begin -->
				<?php echo wp_get_attachment_image($ms_slider_img_id, 'thumbnail_name');?>
				<!-- Picture Slider Carousel slide HTML end -->
			<?php			
		endwhile;
	endif;
?>
<!-- Marquee Slider Carousel end -->