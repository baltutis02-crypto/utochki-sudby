<?php
	//Casual Slider begin
	//check if the repeater field has rows of data
	if( have_rows('cs_repeater') ):
		while ( have_rows('cs_repeater') ) : the_row();
			//slide begin
			$scontent_image_id = get_sub_field('cs-r-img');
			$scontent_heading = get_sub_field('cs-r-heading');
			$scontent_subheading = get_sub_field('cs-r-subheading');
			$scontent_text = get_sub_field('cs-r-text');
			$scontent_subtext = get_sub_field('cs-r-subtext');
			$scontent_link = get_sub_field('cs-r-link');
			
			$scontent_linklabel = '';
			$scontent_linkurl = '';
			if($scontent_link)
			{
				$scontent_linkurl = $scontent_link['url'];
				if($scontent_link['title'])
				{
					$scontent_linklabel = $scontent_link['title'];
				}
				else
				{
					//DO NOT FORGET TO DEFINE DEFAULT VALUE HERE!!!
					$scontent_linklabel = 'Mehr';
				}
			}
			?>
				<!-- Casual Slider HTML begin -->
				<?php echo wp_get_attachment_image($scontent_image_id, 'thumbnail_name');?>
				<!-- Casual Slider HTML end -->
			<?php
			//slide end
		endwhile;
	endif;
	//Casual Slider end
?>