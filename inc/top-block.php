<?php
	//Slider block begin
	$slider_type = get_field_object('slider_switch');
	$slider_type_value = $slider_type['value'];
	
	if($slider_type_value == 'ss')
	{
		echo get_template_part('template-parts/top-block/start-slider');
	}
	elseif($slider_type == 'sts')
	{
		echo get_template_part('template-parts/top-block/static-slider');
	}
	else
	{
		//$slider_type == 'cs'
		echo get_template_part('template-parts/top-block/casual-slider');
	}
	//Slider block end
?>