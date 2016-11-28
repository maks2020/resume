import svg4everybody from 'svg4everybody';
import $ from 'jquery';

$(() => {
	svg4everybody();
});
//	slider
$('.slider-form').click(function (evt){
	const widthWindow = document.documentElement.clientWidth;
	const widthElement = $(this).width();
	const setX0 = (widthWindow - widthElement) / 2;
	const posMarkerX = evt.pageX - setX0 - 8.5;
	let posSkill = 0;
	if (posMarkerX < 0) {
		$('.slider-form__marker').css('left', '0px');
		posSkill = 0;
	}else if (posMarkerX > 756) {
		$('.slider-form__marker').css('left', '756px');
		posSkill = 756;
	}else {
		$('.slider-form__marker').css('left', posMarkerX);
		posSkill = posMarkerX;
	}
	const skillValue = Math.round(( posSkill / 756 * 100) * 100) / 100;
	$('.slider-form__marker').attr('title', skillValue);
});
$('.checkbox-form__checked').click(function () {
	const checkedLi = $(this);
	if (checkedLi.css('opacity') === '1') {
		checkedLi.css('opacity', '0');
	}else {
		checkedLi.css('opacity', '1');
	}
});


// // add string in word-form
// $('.words-form__textarea').scroll(function (){
// 	let currentHeightTextarea = parseFloat($('.words-form__textarea').css('height'));
// 	let lineHeight = parseFloat($('.words-form__textarea').css('line-height'));
// 	currentHeightTextarea += lineHeight;
// 	let valueHeightTextarea = String(currentHeightTextarea) + 'px';
// 	console.log(valueHeightTextarea);
// 	$('.words-form__textarea').css('height', valueHeightTextarea);
// });

