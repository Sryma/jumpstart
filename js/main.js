          
 
 $(document).ready(function(){
  $('.carousel').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    pauseOnFocus: false,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });


 var scrollDistance = 0;
  $(window).scroll(function(){
    var topOfPage = $(this).scrollTop();
    if (topOfPage - scrollDistance > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      scrollDistance = topOfPage;
    } else if (scrollDistance - topOfPage > 50){
      $('.navbar').animate({top: '0px'}, 150);
      scrollDistance = topOfPage;
    }
  });
});

