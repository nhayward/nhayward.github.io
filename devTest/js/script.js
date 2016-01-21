$(document).ready(function(){
	$('#menuButton').click(function(){
      $('#expandingMenu').slideToggle();
      $('#expandingMenu').css('display', 'flex');
    });

	//collapses the expandable menu on screen sizes that don't use it
    $(window).resize(function() {
    	if ($(window).width() > 735) {
    		$('#expandingMenu').slideUp();
    	}
    });

    $('#carousel').slick({
    	dots: true,
    	infinite: true,
    	draggable: false,
    	slidesToShow: 1,
    	cssEase: 'linear'
    });
});