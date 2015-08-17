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

var gallery = $('.slideshow').flickity({
    // options
    lazyLoad: true,
    prevNextButtons: false,
    pageDots: false,
    imagesLoaded: true,
    wrapAround: true,
    autoPlay: 4500
  });

  // arrow navi for slideshow

  // display the arrows
  $msg = $("#msg");
  $slideshow = $(".slideshow");

$(".slideshow").on('mousemove', function(e) {
    var mouseSide;
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $($slideshow).removeClass("rightHover").addClass("leftHover");
    } else {
        mouseSide = 'R';
        $($slideshow).removeClass("leftHover").addClass("rightHover");
    }
});

  // click that fuck

  $('.slideshow').on( 'click', function(e) {
    var mouseSide;
    var $gallery = $('.slideshow').flickity({
        // options
        lazyLoad: true,
        prevNextButtons: false,
        pageDots: false,
        imagesLoaded: true,
        wrapAround: true,
        autoPlay: 4500
      });
    if ((e.pageX - this.offsetLeft) < $(this).width() / 2) {
        mouseSide = 'L';
        $gallery.flickity('previous');
    } else {
        mouseSide = 'R';
        $gallery.flickity('next');
    }
  });






// end wrapFunc
});
