<?php
	//Start Slider begin
	//check if the repeater field has rows of data
	if( have_rows('ss_repeater') ):
		while ( have_rows('ss_repeater') ) : the_row();
			//slide begin
			$scontent_image_id = get_sub_field('ss-r-img');
			$scontent_heading = get_sub_field('ss-r-heading');
			$scontent_subheading = get_sub_field('ss-r-subheading');
			$scontent_text = get_sub_field('ss-r-text');
			$scontent_subtext = get_sub_field('ss-r-subtext');
			$scontent_link = get_sub_field('ss-r-link');
			
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
				<!-- Start Slider HTML begin -->
				<?php echo wp_get_attachment_image($scontent_image_id, 'thumbnail_name');?>
				<!-- Start Slider HTML end -->
			<?php
			//slide end
		endwhile;
	endif;
	//Start Slider end
?>