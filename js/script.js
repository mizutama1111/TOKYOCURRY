$(function(){
    $('.slider').bxSlider({
        mode:'fade',
        speed:2000,
        pager:false,
        auto:true,
        pause:2000
    });
    $(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 100) {
			$('p.pagetop').fadeIn(300);
		} else {
			$('p.pagetop').fadeOut(300);
		}
	});
	$('p.pagetop a').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;　
	});
});