$(document).ready(function() {
  // Sections
  var headerSection = $('.header-section');
  var navBarSection = $('.nav-bar-section');
  var heroSliderSection = $('.hero-slider-section');

  // Heights
  var windowHeight = $(window).height();
  var htmlHeight = $(document).height();
  var headerSectionHeight = navBarSection.offset().top;

  // Window Scroll
  $(window).scroll(function() {
    var scrollHeight = $(window).scrollTop();
    var navBar = navBarSection.find('nav.navbar');

    navBar.wrap('<div class="nav-bar-section-wrapper"></div>');
    navBarSection.find('.nav-bar-section-wrapper').height(navBarSection.outerHeight());

    if (scrollHeight >= headerSectionHeight) {
      navBar.addClass('navbar-fixed-top no-border').autoHidingNavbar({
        hideOffset: htmlHeight/3
      });
    } else {
      navBar.removeClass('navbar-fixed-top no-border');
    }
  });

  // Lightbox Config
  lightbox.option({
    disableScrolling: true
  });

  // Nav bar section
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

  // Hero slider section
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
    pagination: false
  });
});
