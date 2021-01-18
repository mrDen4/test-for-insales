$(document).ready(function () {
    $('.products__slider:first').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: true,
      autoplay: false,
      arrows: true,
      slidesToScroll: 1,
      prevArrow: $('.products .arrows__arrow--left'),
      nextArrow: $('.products .arrows__arrow--right'),
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 3
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToScroll: 1,
            slidesToShow: 1
          }
        }
      ]
    });

    //Табы
    $('.products__slider').not(':first').hide();
    $('.products__tabs .tabs__item').click(function() {
      $('.products__tabs .tabs__item').removeClass('tabs__item--active').eq($(this).index()).addClass("tabs__item--active");
      $(".products__slider").hide().eq($(this).index()).fadeIn();
      $('.products__slider').eq($(this).index()).slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        adaptiveHeight: true,
        autoplay: false,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.products .arrows__arrow--left'),
        nextArrow: $('.products .arrows__arrow--right'),
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 3
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToScroll: 1,
              slidesToShow: 1
            }
          }
        ]
      });
    }).eq(0).addClass("tabs__item--active");

    //Слайдер для главного блока
    $('.hero__slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: false,
        arrows: true,
        slidesToScroll: 1,
        prevArrow: $('.hero__slider-wrap .arrows__left'),
        nextArrow: $('.hero__slider-wrap .arrows__right')
      });

      //Мобильное меню в шапке
      $('.header .header__burger').click(function() {
        $('.header .header__mobile-menu').addClass('header__mobile-menu--active');
        $('.bg').addClass('bg--active');
      })

      $('.bg').click(function() {
        $('.header .header__mobile-menu').removeClass('header__mobile-menu--active');
        $('.bg').removeClass('bg--active');
      })
});