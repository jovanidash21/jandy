$(document).ready(function() {
  var scrollHeight = $(window).scrollTop();

  // Sections
  var headerSection = $('.header-section');
  var navBarSection = $('.nav-bar-section');
  var heroSliderSection = $('.hero-slider-section');

  navBarSection.find('a.dropdown-toggle').hover(function(e) {
    var _this = $(this);
    var parent = _this.offsetParent(".dropdown-menu");
    _this.parent("li").toggleClass('open');

    if(!parent.parent().hasClass('nav')) {
        _this.next().css({"top": _this[0].offsetTop, "left": parent.outerWidth() - 4});
    }

    $('.nav li.open').not(_this.parents("li")).removeClass("open");

    return false;
  });

  heroSliderSection.find('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: false,
    autoplayTimeout: 5000,
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ],
    pagination: false,
    responsiveClass:true
  });
});
