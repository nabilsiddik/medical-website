$(document).ready(function(){
    // Slick Slider For Home Slider
    $('#slider_section .slider').slick();
    // Mean Menu For Mobile Menu
    $('#header_menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
    });

    // Magnific Popup on Gallery Section
    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            // options for gallery
            enabled: true
          },
    });
    $('.play-icon').magnificPopup({
        delegate: 'a',
        type: 'iframe',
    });

    // Mixitup For Filterable Gallery
    var mixer = mixitup(".gallery-images");

    // Slick Slider for Testimonial section
    $('.testimonial-slider').slick({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
    });

    // Slick slider for peicing section
   



});