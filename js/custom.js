$(function(){

//----===== chairman1 slider =====------

$('.chairman1-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.left',
  nextArrow:'.right',
  autoplaySpeed: 2000,
    
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

//------======== author slider ========---------
$('.author-slider').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  arrows:true,
  prevArrow:'.next',
  nextArrow:'.previewus',
  autoplaySpeed: 2000,
    
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});

    
//-----===== back to top nuttom js ======-----
$('.back-top').click(function(){
       $('html, body').animate({scrollTop:0},1500)
   });
    
   $('.back-bottom').click(function(){
     $('html,body').animate({scrollTop:$(document).height()},1000);   
   });

    $(window).scroll(function(){
       var scrolling = $(this).scrollTop();
       if(scrolling > 200){
           $('.back-top').fadeIn(1500);
       }
       else{
          $('.back-top').fadeOut(1500);
       }
       
       
       var scrolling = $(this).scrollTop();

        if(scrolling >= 2500){
            $('.back-bottom').fadeOut(1500);
        }
        else{
             $('.back-bottom').fadeIn(1500);
        }
       
       
       if(scrolling > 150){
           $('.navbar').addClass('navbar2');
       }
       else{
           $('.navbar').removeClass('navbar2');
       }
       
   });
    
//-----===== wow js =====------
new WOW().init();
    
    
//animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });
    
//-------=========== priloader =============---------
    
$(window).on('load', function(){
    $('.sub-wrapper').delay(2000).fadeOut(1000); 
});

    $(window).on('load', function(){
    $('.wrapper').delay(2000).fadeOut(1000); 
});

 //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 500);
                return false;
            }
        }
    });
    
 // Closes responsive menu when a scroll link is clicked
    
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    
//  -------======= venobox =====------ 
  $('.venobox').venobox();   
    
});