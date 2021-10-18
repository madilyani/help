var slide_count = 0;
$(".gallerySlider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 2,
  prevArrow: $(".gallerySlider-left"),
  nextArrow: $(".gallerySlider-right"),
  customPaging: function (slider, i) {
    slide_count = slider.slideCount;
    document.querySelector(".current").innerHTML = "1";
  },
  responsive: [
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".gallerySlider").on("beforeChange", (a, b, c, d) => {
  document.querySelector(".current").innerHTML = d + 1;
});
$(".extraNewsSlider").slick({
  dots: false,
  arrows: false,
  infinite: false,
  speed: 1000,
  autoplaySpeed: 3000,
  slidesToShow: 2,
  prevArrow: $(".extraNewsSlider-left"),
  nextArrow: $(".extraNewsSlider-right"),
  focusOnSelect: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1640,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 840,
      settings: {
        arrows: true,
        slidesToShow: 1,
        fade: true,
        cssEase: "linear",
      },
    },
  ],
});
$(".newsSlider").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  pauseOnHover: false,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
