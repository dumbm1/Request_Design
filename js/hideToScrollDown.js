var header     = $('.scroll-out-elem'),
    scrollPrev = 0;

$(window).scroll(function () {
  var scrolled = $(window).scrollTop();

  if (scrolled > 100 && scrolled > scrollPrev) {
    header.addClass('scroll-out-elem__out');
  } else {
    header.removeClass('scroll-out-elem__out');
  }
  scrollPrev = scrolled;
});
