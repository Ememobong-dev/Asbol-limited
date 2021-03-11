(function($) {

   "use strict";

    //    Naviation
   var OnePageNavigation = function() {
    $('body').scrollspy({target:'#ftco-navbar'});
    $('#ftco-navbar li a').on('click', function(e){
        if(this.hash !== ''){
            e.preventDefault();

        const hash= this.hash;

        $('html,body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
            window.location.hash= hash;
        });
        }
    });
  };
  OnePageNavigation();



   var fullHeight = function() {

       $('.js-fullheight').css('height', $(window).height());
       $(window).resize(function(){
           $('.js-fullheight').css('height', $(window).height());
       });

   };
   fullHeight();

   // loader
   var loader = function() {
       setTimeout(function() { 
           if($('#ftco-loader').length > 0) {
               $('#ftco-loader').removeClass('show');
           }
       }, 1);
   };
   loader();

   // Scrollax
  $.Scrollax();

   var carousel = function() {
       $('.wwd-slider').owlCarousel({
           loop: true,
           dots: true,
           items: 1,
           margin: 30,
           stagePadding: 0,
           nav: false,
           navText: ['<i class="fa fa-arrow-left"></i>', '<i class="fa fa-arrow-right"></i>'],
           responsive:{
               0:{
                   items: 1
               },
               768: {
                items: 2,
                },
               1200:{
                   items: 3
               }
           }
       });

       $('.slide-one-item').owlCarousel({
        center: false,
        items: 1,
        dots: true,
        loop: true,
        stagePadding: 0,
        margin: 0,
        smartSpeed: 1000,
        autoplay: true,
        pauseOnHover: false,
        autoHeight: true,
        nav: false,
        navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
      });

   };
   carousel();


  

})(jQuery);

