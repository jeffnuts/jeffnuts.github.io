$(function() {
    $('body').removeClass('fade-out');
});

$( document ).ready(function() {
    var listOfClasses = ["color-scheme-1","color-scheme-2","color-scheme-3","color-scheme-4"];
    var randomNum = Math.floor(Math.random() * listOfClasses.length); 
    $("html").addClass(listOfClasses[randomNum]);
});




$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 985) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 900); 
        return false; 
    }); 
});


function mouseIn() {
  $('.img').addClass('show');
}

function mouseOut() {
  $('.img').removeClass('show');
}

$('.hover-me').hover(mouseIn, mouseOut);