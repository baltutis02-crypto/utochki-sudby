<?php
$as_heading = get_sub_field('as_heading');
$as_subheading = get_sub_field('as_subheading');
$as_text = get_sub_field('as_text');
$as_subtext = get_sub_field('as_subtext');
?>
	<!-- Accordeon Block HTML begin -->
<?php	
// check if the repeater field has rows of data
if(have_rows('as_accordions-repeater')):
	// loop through the rows of data
	while(have_rows('as_accordions-repeater')) : the_row();
		$as_uppertext = get_sub_field('as_ar_upper-text');
		$as_insidetext = get_sub_field('as_ar_text-inside');
		$as_lowertext = get_sub_field('as_ar_lower-text');
		$as_link = get_sub_field('as_ar_link');
		$as_image_id = get_sub_field('as_ar_img');
		
		$as_linklabel = '';
		$as_linkurl = '';
		if($as_link)
		{
			$as_linkurl = $as_link['url'];
			if($as_link['title'])
			{
				$as_linklabel = $as_link['title'];
			}
			else
			{
				//DO NOT FORGET TO DEFINE DEFAULT VALUE HERE!!!
				$as_linklabel = 'Mehr';
			}
		}
		?>
			<!-- Accordeon Content HTML begin -->
			<?php echo wp_get_attachment_image($as_image_id, 'thumbnail_name');?>
			<!-- Accordeon Content HTML end -->
		<?php				
	endwhile;
endif;
?>
	<!-- Accordeon Block HTML end -->