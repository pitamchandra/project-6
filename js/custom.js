$(document).ready(function () {

  //scrolling event
  $(window).on("scroll", function () {
    //for menu fixed
    if ($(window).scrollTop() > 100) {
      $("#menu_part").addClass('menu_fixed');
    } else {
      $("#menu_part").removeClass('menu_fixed');
    }

    //for show back to top btn
    if ($(window).scrollTop() > 300) {
      $(".back_to_top").fadeIn();
    } else {
      $(".back_to_top").fadeOut();
    }
  })

  //go to top
  $(".back_to_top").on("click",function(){
    $("body,html").animate({
      scrollTop: 0,
    },2000);
  })
  //for banner slider
  $('.banner_slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    autoplaySpeed:2000,
    speed:1500,
  });

  //for screenshots slider
  $('.screen_slider').slick({
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay:false,
    autoplaySpeed:2000,
    speed:1000,
    centerMode:true,
    centerPadding: '0',
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //for feedback text slider
  $('.slider_text').slick({
    fade:true,
    slidesToScroll:1,
    slidesToShow:1,
    arrows:false,
    asNavFor: '.slider_image',
  });

  //for feedback images slider
  $('.slider_image').slick({
    slidesToScroll:1,
    slidesToShow:3,
    arrows:false,
    dots:true,
    centerMode:true,
    centerPadding: '0',
    asNavFor: '.slider_text',
    focusOnSelect:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //for venobox
  new VenoBox();

});

