// set skill from 0 to 99.8 in title marker 
function skill(value){
	var skill_value = Math.round((value / 756 *100)*100)/100;
	$('.level-js-graph__marker').attr('title',skill_value);
}
//set position marker in depends from click in fields slider 
$('.level-js-graph').click(function(evt){
	var width_window = document.documentElement.clientWidth;
	var width_element = $(this).width();
	var set_x_0 = (width_window - width_element)/2;
	var pos_marker_x = evt.pageX - set_x_0 - 8.5;
	var pos_skill = 0;
	if(pos_marker_x < 0) {
		$('.level-js-graph__marker').css('left','0px');
		pos_skill = 0;
	} else if (pos_marker_x > 756) {
		$('.level-js-graph__marker').css('left','756px');
		pos_skill = 756;
	} else {
		$('.level-js-graph__marker').css('left', pos_marker_x);
		pos_skill = pos_marker_x;
	}
	skill(pos_skill);
});

