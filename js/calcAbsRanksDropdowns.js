;'use strict';
(function () {
  $('.ranks-dropdown').on('show.bs.dropdown', (e) => {
    let menuMainH = $('.menu-main').height();
    let menuRanksH = $('.menu-ranks').height();
    let menuSearchH = $('.menu-search').height();
    let menuH = (menuMainH + menuRanksH + menuSearchH);
    console.log(menuH);
  });
}());
