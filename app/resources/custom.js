$(".row_checkbox_block_checked p").click(function(){
		var checked_li = $(this);
		if(!($(checked_li).hasClass("check_class"))) {
			$(checked_li).css('opacity','1');
			$(checked_li).addClass("check_class");
		} else {
			$(checked_li).css('opacity','0');
			$(checked_li).removeClass("check_class");
		}
	// $("input.my_input").click(function(){
	// 	var checked_li = $(this);
	// 	console.log(checked_li[0]);
	// 	var vision_marker = ".row_checkbox_block_checked";
	// 	console.log(checked_li.prop("checked"));
	// 	if(checked_li.prop("checked")) {
	// 		$(checked_li).find(vision_marker).css("opacity","1");
	// 	} else {
	// 		$(checked_li).find("vision_marker").css("opacity","0");
	// 	}
	});
$('.plans_future_form_checked img').click(function(){
		var checked_ellipse_marker = $(this);
		if(!($(checked_ellipse_marker).hasClass("check_class"))) {
			$(checked_ellipse_marker).css('opacity','1');
			$(checked_ellipse_marker).addClass("check_class");
		} else {
			$(checked_ellipse_marker).css('opacity','0');
			$(checked_ellipse_marker).removeClass("check_class");
		}
	});

