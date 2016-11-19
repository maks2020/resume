$(".row_checkbox_block_checked p").click(function(){
		var checked_li = $(this);
		if(!($(checked_li).hasClass("check_class"))) {
			$(checked_li).css('opacity','1');
			$(checked_li).addClass("check_class");
		} else {
			$(checked_li).css('opacity','0');
			$(checked_li).removeClass("check_class");
		}
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

