<?php
	$tb_img_id = get_sub_field('tb_img');
	$tb_heading = get_sub_field('tb_heading');
	$tb_subheading = get_sub_field('tb_subheading');
	$tb_text = get_sub_field('tb_text');
	$tb_subtext = get_sub_field('tb_subtext');
	$tb_link = get_sub_field('tb_link');
?>
<!-- Text Block HTML begin -->
<?php echo wp_get_attachment_image($tb_img_id, 'thumbnail_name');?>
<!-- Text Block HTML end -->