//  carousel

$(function() {
    $('.carousel').carousel({
        interval: 3000
    });
});

// profile card 

$(document).ready(function(){
    $('.section__contact-button.button-contact').click(function(){
        $('.section__contact--profile').addClass('popup')             
    });
     $('.section__contact--close').click(function(){
        $('.section__contact--profile').removeClass('popup')      
     });
});

//portfolio
//$('.section__portfolio-horizontal-content').hide().delay(2000).fadeIn(1000);

//$('.section__portfolio-horizontal-model').slideDown(2000);