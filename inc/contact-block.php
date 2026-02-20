<?php
	$cb_heading = get_sub_field('cb_heading');
	$cb_text = get_sub_field('cb_text');
	$cb_contactform_shortcode = get_sub_field('cb_form_shortcode');
?>
<!-- Contact Form HTML begin -->
<?php echo do_shortcode($cb_contactform_shortcode); ?>
<!-- Contact Form HTML end -->