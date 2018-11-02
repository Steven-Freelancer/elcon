$(document).ready(function(){
	
	//Toggle nav
	$('.toggle').click(function(){
		$('#nav').addClass('open');
        $('.wrap-overlay').show();
        $('html').addClass('fixed-body');
	})

	$('#nav .close').click(function(e){
        e.preventDefault();
        $('#nav').removeClass('open');
        $('.wrap-overlay').hide();
        $('html').removeClass('fixed-body');
    });

	//Handle click outside menu
    $(document).click(function(e){
        if(!$(e.target).closest('#nav, .toggle').length){
            $('#nav .close').trigger('click');
        }

    });

    $('.flexslider').flexslider({
	    animation: "slide",
		directionNav: false,
		slideshowSpeed: 4000
	});

	$('.list .name').click(function(){
		$(this).parent().toggleClass('active');
		$(this).next().slideToggle('fast');
		$(this).parent().siblings().removeClass('active');
		$(this).parent().siblings().find('.info').slideUp();
		$(this).closest('.list').siblings().find('li').removeClass('active');
		$(this).closest('.list').siblings().find('.info').slideUp();
	});

	$('.list li:first .name').click();
})