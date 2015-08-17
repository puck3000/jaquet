$(function() {

// nav toggl stuff
  var navToggle = $("#navToggle")
  var nav = $("nav>ul")
   navToggle.click(function(){
     nav.toggleClass("open");
   });

//  init smooth scroll
  smoothScroll.init();

// flickity

  $('.slideshow').flickity({
    // options
    lazyLoad: true,
    prevNextButtons: false,
    imagesLoaded: true,
    wrapAround: true
  });

  // arrow navi for slideshow
//
//   $msg = $("#msg");
//
// $(".gallery-cell-image").on('mousemove', function(e) {
//     var mouseSide;
//     var $gallery = $('.gallery').flickity();
//     if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
//         mouseSide = 'L';
//         $(this).addClass("leftHover");
//     } else {
//         mouseSide = 'R';
//         $(this).removeClass("leftHover");
//     }
// });


// end wrapFunc
});
