(function ($) {


  $('.client-testimonial-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    prevArrow: "<span class='left-arrow arrow-common arrow-new'></span>",
    nextArrow: "<span class='right-arrow arrow-common arrow-new'></span>",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.recommended-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<span class='left-arrow arrow-common arrow-new'></span>",
    nextArrow: "<span class='right-arrow arrow-common arrow-new'></span>",
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


  $('.industry-slider-one').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  $('.industry-slider-two').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.feature-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.quote-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.grid-type-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [

      // {
      //   breakpoint: 9999,
      //   settings: "unslick"
      // },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.member-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    // fade: true,
    infinite: true,
    adaptiveHeight: true,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 1950,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1922,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



  /* hamburger menu */

  $(".hamburger").on("click", function () {
    $("body").toggleClass("ham-open");
  });


  $(".main-navigation .menu > .menu-item-has-children > a").on(
    "click",
    function () {
      $("body").toggleClass("open-item-child");
    }
  );



  // match height
  $('.industry-slider-one .item, .industry-slider-two .item').matchHeight();
  // $('.industry-slider-two .item').matchHeight();
  $('.scoring-section .grid-layout,.scoring-section .grid-layout h3,.scoring-section .grid-layout p').matchHeight();
  // $('.scoring-section .grid-layout h3').matchHeight();
  // $('.scoring-section .grid-layout p').matchHeight();
  $('.member-slider .item h3').matchHeight();
  $('.blog-slider .item,.blog-slider .blog-lead h3,.industry-section .blog-lead p,.industry-section .blog-lead h3').matchHeight();
  // $('.blog-slider .blog-lead h3').matchHeight();
  // $('.industry-section .blog-lead p').matchHeight();
  // $('.industry-section .blog-lead h3').matchHeight();
  $('.client-testimonial .client-testimonial-main .item,.client-testimonial .client-testimonial-main .item p').matchHeight();
  // $('.client-testimonial .client-testimonial-main .item p').matchHeight();
  $('.recommended-slider .item').matchHeight();
  $('.left-right-content.zigzag-container .custom-container-right .col-md-6').matchHeight();

  $('.member-section .member-slider .item').matchHeight();
  $('.recommended-section .item').matchHeight();
  $('.recommended-slider .item h4').matchHeight();
  $('.content-pos img').matchHeight();
  
  

  

  
  
  
  // fixed header
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 100) {
      $("header").addClass("fixed-header");
      // $("header div").addClass("visible-title");
    } else {
      $("header").removeClass("fixed-header");
      // $("header div").removeClass("visible-title");
    }
  });


  /* mobile menu hamburger submenu */
  // $(".menu-item-has-children:not(.icon-class.menu-item-has-children)").on(
  //   "click",
  //   function () {
  //     $(this).removeClass("et-show-dropdown");
  //     $(this).addClass("et-show-dropdown");
  //   }
  // );



  // accordion custom

  $(".accordion-list > li > .answer").hide();

  $(".accordion-list > li").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active").find(".answer").slideUp();
    } else {
      $(".accordion-list > li.active .answer").slideUp();
      $(".accordion-list > li.active").removeClass("active");
      $(this).addClass("active").find(".answer").slideDown();
    }
    return false;
  });

  /* Tab Active class toggle */

  $('.industry-section li a').on('click', function (e) {
    e.preventDefault();
    $('.industry-slider-one').slick('refresh');
    $('.industry-slider-two').slick('refresh');
    $(".industry-section li a").addClass('active');
    $('.industry-section li a').not(this).removeClass('active');
    $(this.hash).addClass('active-tab-content');
    $('.common-slider').not(this.hash).removeClass('active-tab-content');
    $('.industry-slider-one .item').matchHeight();
    $('.industry-slider-two .item').matchHeight();
  });

 


    // tabs

  // Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});


  // svg

//   $('.svg').each(function(){
//     var img         = $(this);
//     var image_uri   = img.attr('src');

//     $.get(image_uri, function(data) {
//         var svg = $(data).find('svg');
//         svg.removeAttr('xmlns:a');
//         img.replaceWith(svg);
//     }, 'xml');

// });

$("li.menu-item-has-children").on("click", function () {
  $(this).addClass("open").siblings().removeClass('open');
});
})(jQuery);

$(function () {
  $('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true,
    mainClass: 'mfp-fade'
  });
});

$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});




  // svg

  $('.svg').each(function(){
    var img         = $(this);
    var image_uri   = img.attr('src');

    $.get(image_uri, function(data) {
        var svg = $(data).find('svg');
        svg.removeAttr('xmlns:a');
        img.replaceWith(svg);
    }, 'xml');

});