//Controls the navbar scroll visibility toggle
$(window).scroll(function(){
	
	if ($(window).width() > 992) {
		$('.navbar-nav').toggleClass('d-none', $(this).scrollTop() < 50);
		$('.main-nav-wrapper').toggleClass('bg-light', $(this).scrollTop() > 50);
		$('.main-nav-wrapper').toggleClass('outer-element', $(this).scrollTop() > 50);
		console.log($(window).width())
	}else{
		//$('.navbar-nav').toggleClass('d-none', $(this).scrollTop() < 50);
		$('.navbar-nav').removeClass('d-none');
	}
	
});

if ($(window).width() < 992) {
		$('.navbar-nav').removeClass('d-none', $(this).scrollTop() >= 0);
		$('.main-nav-wrapper').addClass('bg-light');
		console.log('small');
	}

//Quote bar visibility toggle
$(window).scroll(function(){
	$('.quote-bar').toggleClass('d-none', $(this).scrollTop() < 800);
});

//Get tooltips running
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})