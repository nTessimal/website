(function($) {

  "use strict";

  $(window).on('load', function() {

   /* One Page Navigation & wow js  */
    var OnePNav = $('.onepage-nev');
    var top_offset = OnePNav.height() - -0;
    OnePNav.onePageNav({
      currentClass: 'active',
      scrollOffset: top_offset,
    });

    /* Page Loader active */
    $('#preloader').fadeOut();

    // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });

    /* WOW Scroll Spy */
     var wow = new WOW({
        // disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox */
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });
  });

}(jQuery));
