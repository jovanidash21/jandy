// Global varianbles
/*global Waypoint, lightbox, WOW */

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

var calculateScrollBarWidth = function() {
  var scrollBarDiv = document.createElement('div');
  scrollBarDiv.className = 'modal-scrollbar-measure';
  $(document.body).append(scrollBarDiv);
  var scrollBarWidth = scrollBarDiv.offsetWidth - scrollBarDiv.clientWidth;
  $(document.body)[0].removeChild(scrollBarDiv);
  return scrollBarWidth;
};
var scrollBarWidth = calculateScrollBarWidth();

// Body
var body = $('body');

$(window).load(function() {
  $(".loader").fadeOut("slow");
})

$(document).ready(function() {

  // Nav bar section
  var navBarSection = body.find('.nav-bar-section');
  if (navBarSection.length) {
    navBarSection.find('.navbar-nav').onePageNav({
      changeHash: true,
      scrollSpeed: 400
    });
    navBarSection.find('.navbar-fixed-top').autoHidingNavbar({
      hideOffset: 210
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
  }

  // Hero slider section
  var heroSliderSection = body.find('.hero-slider-section');
  if (heroSliderSection.length) {
    var heroSlider = heroSliderSection.find('.owl-carousel');
    var heroTitle = heroSlider.find('.hero-title');
    var heroSubtitle = heroSlider.find('.hero-subtitle');
    var animated = 'animated ';
    var heroTitleAnimation = animated + heroTitle.data('animation');
    var heroSubtitleAnimation = animated + heroSubtitle.data('animation');
    var heroTitleDelay = heroTitle.data('delay');
    var heroSubtitleDelay = heroSubtitle.data('delay');

    setTimeout(function () {
        heroTitle.addClass('animated ' + heroTitleAnimation);
      }, heroTitleDelay
    );
    setTimeout(function () {
        heroSubtitle.addClass('animated ' + heroSubtitleAnimation);
      }, heroSubtitleDelay
    );
    heroSlider.owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      dots: false,
      items: 1,
      loop: true,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ]
    }).on('change.owl.carousel', function(event) {
      heroTitle.removeClass('animated ' + heroTitleAnimation);
      heroSubtitle.removeClass('animated ' + heroSubtitleAnimation);
      heroSlider.find('.owl-item.cloned').find('.hero-title').removeClass(heroTitleAnimation);
      heroSlider.find('.owl-item.cloned').find('.hero-subtitle').removeClass(heroSubtitleAnimation);
    }).on('changed.owl.carousel', function(event) {
      setTimeout(function () {
          heroSlider.find('.owl-item.active').find('.hero-title').addClass(heroTitleAnimation);
        }, heroTitleDelay
      );
      setTimeout(function () {
          heroSlider.find('.owl-item.active').find('.hero-subtitle').addClass(heroSubtitleAnimation);
        }, heroSubtitleDelay
      );
    });
  }

  // Gallery section
  var gallerySection = body.find('.gallery-section');
  if (gallerySection.length) {
    if (!$('.lb-outerContainer').parent().hasClass('lb-wrapper')) {
      $('.lb-outerContainer').wrap( "<div class='lb-wrapper'></div>" );
    }
    gallerySection.find('a[data-lightbox="main-gallery"]').on('click', function() {
      $('body').css('padding-right', scrollBarWidth);
      $('#lightboxOverlay, .lb-loader, .lb-close').on('click', function() {
        $('body').css('padding-right', '0');
      });
      $('.lb-wrapper').on('click', function() {
        $('body').css('padding-right', '0');
        $('.lb-close').click();
      });
    });
  }

  // Services section
  var servicesSection = body.find('.services-section');
  if (servicesSection.length) {
    servicesSection.find('.service-card .service-description').matchHeight();
  }

  // Counter section
  var counterSection = body.find('.counter-section');
  if (counterSection.length) {
    var counterSectionWaypoint = new Waypoint({
      element: counterSection,
      handler: function() {
        counterSection.find('.counter').countTo({
          refreshInterval: 11,
          speed: 900
        });
        this.destroy();
      },
      offset: '211px'
    });
  }

  // Testimonials section
  var testimonialsSection = body.find('.testimonials-section');
  if (testimonialsSection.length) {
    testimonialsSection.find('.owl-carousel').owlCarousel({
      animateIn: 'fadeIn',
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      items: 1,
      loop: true,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ]
    });
  }

  // Sponsors section
  var sponsorsSection = body.find('.sponsors-section');
  if (sponsorsSection.length) {
    var sponsorsSLider = sponsorsSection.find('.owl-carousel');
    sponsorsSLider.owlCarousel({
      autoplay: true,
      autoplayTimeout: 3000,
      responsive:{
        0:{
            items: 1
        },
        500:{
            items: 3
        },
        1000:{
            items: 5
        }
      }
    }).on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
        sponsorsSLider.trigger('next.owl');
      } else {
        sponsorsSLider.trigger('prev.owl');
      }
      e.preventDefault();
    });
  }

  // Lightbox Config
  lightbox.option({
    disableScrolling: true
  });

  // ScrollUp Config
  $(function () {
    $.scrollUp({
      animation: 'slide',
      scrollDistance: 400,
      scrollSpeed: 400,
      scrollText: "<i class='fa fa-angle-up fa-4x'></i>"
    });
  });

  // jQuery stellar config
  $.stellar({
    responsive: true
  });

  // Wow js Config
  var wow = body.find('.wow');
  if (wow.length) {
    new WOW().init();
  }
});
