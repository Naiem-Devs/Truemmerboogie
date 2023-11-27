(function ($) {
"use strict";


$(document).ready(function(){
    $("#sticker").sticky({
		topSpacing: 0
	});
});

// Mobile Menu
$('#my-navigation').iptOffCanvas({

	// base CSS class
	baseClass: 'offcanvas',
  
	// top, right, bottom, left
	type: 'right',
  
	// close other instances when one opens
	single: true,
  
	static: false
	
  });


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
});

  
$('.parallax-window').parallax();




/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


// WOW active
new WOW().init();

// niceSelect
$(document).ready(function() {
	$('select').niceSelect();
  });

})(jQuery);