<?php
	//Static Slider begin
	//check if the group field has data
	if( have_rows('static-slider') ):
		while ( have_rows('static-slider') ) : the_row();
			//slider begin
			$scontent_image_id = get_sub_field('sts-img');
			$scontent_heading = get_sub_field('sts-heading');
			$scontent_subheading = get_sub_field('sts-subheading');
			$scontent_text = get_sub_field('sts-text');
			$scontent_subtext = get_sub_field('sts-subtext');
			$scontent_link = get_sub_field('sts-link');
			
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
				<!-- Static Slider HTML begin -->
				<?php echo wp_get_attachment_image($scontent_image_id, 'thumbnail_name');?>
				<!-- Static Slider HTML end -->
			<?php
			//slider end
		endwhile;
	endif;
	//Static Slider end
?>