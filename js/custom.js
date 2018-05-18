//Controls the navbar scroll visibility toggle
$(window).scroll(function(){
	$('.main-nav-wrapper').toggleClass('bg-light', $(this).scrollTop() > 50);
	$('.main-nav-wrapper').toggleClass('outer-element', $(this).scrollTop() > 50);
	$('.navbar-nav').toggleClass('d-none', $(this).scrollTop() < 50);
});

//Quote bar visibility toggle
$(window).scroll(function(){
	$('.quote-bar').toggleClass('d-none', $(this).scrollTop() < 800);
});