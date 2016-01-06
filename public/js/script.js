$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 550) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 

    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

});

 // carousel 
$(document).ready(function(){
    $('.strains').slick({
    	infinite: true,
  		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.left-arrow'),
        nextArrow: $('.right-arrow'),
	});
});