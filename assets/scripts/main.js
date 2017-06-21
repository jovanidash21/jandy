$(document).ready(function() {
  $('.nav-bar-section a.dropdown-toggle').hover(function(e) {
    var $el = $(this);
    var $parent = $(this).offsetParent(".dropdown-menu");
    $(this).parent("li").toggleClass('open');

    if(!$parent.parent().hasClass('nav')) {
        $el.next().css({"top": $el[0].offsetTop, "left": $parent.outerWidth() - 4});
    }

    $('.nav li.open').not($(this).parents("li")).removeClass("open");

    return false;
  });

  $('.hero-slider-section .owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    pagination: false,
    dots: false
  })
});
