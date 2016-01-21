$(function() {
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
});