<?php
	$vb_heading = get_sub_field('vb_heading');
	$vb_text = get_sub_field('vb_text');
	$vb_stillframe = get_sub_field('vb_internal-video-stillframe');

	$vb_switch = get_sub_field_object('vb_switch');

	$vb_video_yt;
	$vb_video_upl;
	if($slider_type == 'yif')
	{
		$vb_video_yt = get_sub_field('vb_video-youtube');
	}
	else
	{
		//$slider_type == 'iv'
		$vb_video_upl = get_sub_field('vb_internal-video');
	}
?>
<!-- Video Block HTML Start -->
<?php
	if($slider_type == 'yif')
	{
		?>
			<!-- DO NOT FORGET TO CORRECT MEASURMENTS!!! -->
			<iframe class="ytframe" width="730" height="380" data-YTsrc="https://www.youtube-nocookie.com/embed/<?php echo $vb_video_yt; ?>?autoplay=1&controls=1&rel=0" src="" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		<?php
	}
	else
	{
		//$slider_type == 'iv'
		$vb_video_upl;
		$extension = pathinfo($vb_video_upl, PATHINFO_EXTENSION);
		?>
			<!-- DO NOT FORGET TO CORRECT MEASURMENTS!!! -->
			<video class="video-uploaded" controls="controls" preload="auto" width="730" height="380" controls>
				<source src="<?php echo $vb_video_upl ?>" type="video/<?php echo $extension; ?>">
				Your browser does not support the video tag.
			</video>
		<?php
	}
?>
<!-- Video Block HTML End -->