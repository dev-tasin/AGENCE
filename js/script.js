$(function () {
  $(".review-wrapper").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToscScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    centerMode: true,
    centerPadding: "0px",
    prevArrow: '<i class="fa-solid fa-chevron-left left"></i>',
    nextArrow: '<i class="fa-solid fa-chevron-right right"></i>',
  });
  $(".banner-slider").slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToscScroll: 1,
    adaptiveHeight: true,
    pauseOnHover: false,
    centerPadding: "0px",
    speed: 500,
    fade: true,
    arrows: false,
    dots: true,
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".navbar").addClass("menu");
    } else {
      $(".navbar").removeClass("menu");
    }
  });
  $('.top-btn').on('click', function(){
    // console.log('okkk')
    $('html,body').animate({scrollTop: 0}, 1000)
  })

  $(window).on('scroll', function(){
    var scroll = $(this).scrollTop();

    if(scroll > 200){
      $('.top-btn').fadeIn(500)
    }
    else{
      $('.top-btn').fadeOut(500)
    }
  })
});
