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

// Sections
var navBarSection = $('.nav-bar-section');
var heroSliderSection = $('.hero-slider-section');
var gallerySection = $('.gallery-section');
var servicesSection = $('.services-section');
var counterSection = $('.counter-section');
var testimonialsSection = $('.testimonials-section');
var sponsorsSection = $('.sponsors-section');

$(window).load(function() {
  $(".loader").fadeOut("slow");
})

$(document).ready(function() {
  // Nav bar section
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

  // Hero slider section
  var heroSlider = heroSliderSection.find('.owl-carousel');
  var heroTitle = heroSlider.find('.hero-title');
  var heroSubtitle = heroSlider.find('.hero-subtitle');
  var heroTitleAnimation = heroTitle.data('animation');
  var heroSubtitleAnimation = heroSubtitle.data('animation');
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
    autoplayTimeout: 5000,
    dots: false,
    items: 1,
    loop: true,
    nav: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>"
    ]
  }).on('changed.owl.carousel', function(event) {
    var item = event.item.index - 2; // Position of the current item

    heroTitle.removeClass('animated ' + heroTitleAnimation);
    heroSubtitle.removeClass('animated ' + heroSubtitleAnimation);

    setTimeout(function () {
        heroSlider.find('.owl-item').not('.cloned').eq(item).find('.hero-title').addClass('animated ' + heroTitleAnimation);
      }, heroTitleDelay
    );
    setTimeout(function () {
        heroSlider.find('.owl-item').not('.cloned').eq(item).find('.hero-subtitle').addClass('animated ' + heroSubtitleAnimation);
      }, heroSubtitleDelay
    );
  });

  // Gallery section
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

  // Services section
  servicesSection.find('.service-card .service-description').matchHeight();

  // Counter section
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
  })

  // Testimonials section
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

  // Sponsors section
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
  new WOW().init();
});