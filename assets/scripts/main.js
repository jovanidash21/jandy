// Detect IE version
var detectIEVersion = function() {
  var userAgent = window.navigator.userAgent;
  var internetExplorer = userAgent.indexOf('MSIE ');
  if (internetExplorer > 0) {
    return parseInt(userAgent.substring(internetExplorer + 5, userAgent.indexOf('.', internetExplorer)));
  }

  var trident = userAgent.indexOf('Trident/');
  if (trident > 0) {
    var rv = userAgent.indexOf('rv:');
    return parseInt( userAgent.substring(rv + 3,  userAgent.indexOf('.', rv)));
  }

  var edge = userAgent.indexOf('Edge/');
  if (edge > 0) {
    return parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)));
  }
  return false;
};
var IEVersion = detectIEVersion();

// Sections
var navBarSection = $('.nav-bar-section');
var heroSliderSection = $('.hero-slider-section');

$(document).ready(function() {
  // Lightbox Config
  lightbox.option({
    disableScrolling: true
  });

  // Nav bar section
  navBarSection.find('.navbar-fixed-top').autoHidingNavbar({
    hideOffset: 190
  });
  navBarSection.find('a.dropdown-toggle').hover(function(e) {
    var _this = $(this);
    var parent = _this.offsetParent('.dropdown-menu');
    _this.parent('li').toggleClass('open');

    if(!parent.parent().hasClass('nav')) {
        _this.next().css({'top': _this[0].offsetTop, 'left': parent.outerWidth() - 4});
    }

    $('.nav li.open').not(_this.parents('li')).removeClass('open');

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
