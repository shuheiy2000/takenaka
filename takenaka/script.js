$(function() {
	$("header p").click(function(){
		var id ="#" +  $(this).text();
		var position = $(id).offset().top;
		$("html,body").animate({
		scrollTop : position
		},400);
	});
});