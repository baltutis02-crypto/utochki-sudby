<div id="entry-content" class="entry-content">
	<?php
	//Layout Creator begin
	//Check value exists
	if(have_rows('std-page-lc_layout-creator')):
		// Loop through rows.
		while (have_rows('std-page-lc_layout-creator')) : the_row();
			if( get_row_layout() == 'carousel' ):
				echo get_template_part('inc/carousel');
			elseif(get_row_layout() == 'marquee-slider'): 
				echo get_template_part('inc/marquee-slider');			
			elseif(get_row_layout() == 'text-block'): 
				echo get_template_part('inc/text-block');
			elseif(get_row_layout() == 'accordions-set'): 
				echo get_template_part('inc/accordions-set');
			elseif(get_row_layout() == 'video-block'): 
				echo get_template_part('inc/video-block');			
			elseif(get_row_layout() == 'file-block'): 
				echo get_template_part('inc/file-block');
			elseif(get_row_layout() == 'map-block'): 
				echo get_template_part('inc/map-block');
			elseif(get_row_layout() == 'contact-block'): 
				echo get_template_part('inc/contact-block');
			/*
			elseif(get_row_layout() == 'multicolumn-block'): 
				$file = get_sub_field('file');
			*/
			endif;
		// End loop.
		endwhile;
	endif;
	//Layout Creator end
	?>
</div>