;'use strict';

toggleMenuById('equipment_thermo');
toggleMenuById('equipment_refrigeration');

function toggleMenuById(id) {
  let btnToggleMenu = document.getElementById(id);
  let menuRanksSub;
  let menuRanksSubAll = document.querySelectorAll('.menu-ranks-sub').forEach((item) => {
    if (item.getAttribute('data-toggle') == id) menuRanksSub = item;
  });
  let menuRanksSubCol1 = menuRanksSub.querySelector('.col1');
  let menuRanksSubCol2All = menuRanksSub.querySelectorAll('.col2');

  btnToggleMenu.addEventListener('click', (e) => {
    menuRanksSub.classList.toggle('d-none');
    menuRanksSubCol2All.forEach((item) => {
      item.classList.add('d-none');
    });
    if (menuRanksSub.classList.contains('short-menu')) {
      menuRanksSub.classList.remove('menu-ranks-sub-full-short');
    } else {
      menuRanksSub.classList.remove('menu-ranks-sub-full');
    }

  });


  menuRanksSubCol1.addEventListener('click', (e) => {

    let targ = e.target;
    let menuRanksSubLink = targ.closest('.menu-ranks-sub__link');

    if (!menuRanksSubLink) {
      menuRanksSubCol2All.forEach((item) => {
        item.classList.add('d-none');
      });
      if (menuRanksSub.classList.contains('short-menu')) {
        menuRanksSub.classList.remove('menu-ranks-sub-full-short');
      } else {
        menuRanksSub.classList.remove('menu-ranks-sub-full');
      }

      return;
    }

    let menuToShow = menuRanksSub.querySelector('#' + menuRanksSubLink.getAttribute('data'));

    menuRanksSubCol2All.forEach((item) => {
      if (item.getAttribute('id') != menuRanksSubLink.getAttribute('data')) {
        item.classList.add('d-none');
      }
    });

    menuToShow.classList.toggle('d-none');
    if (menuToShow.classList.contains('d-none')) {
      if (menuRanksSub.classList.contains('short-menu')) {
        menuRanksSub.classList.remove('menu-ranks-sub-full-short');
      } else {
        menuRanksSub.classList.remove('menu-ranks-sub-full');
      }
    } else {
      if (menuRanksSub.classList.contains('short-menu')) {
        menuRanksSub.classList.add('menu-ranks-sub-full-short');
      } else {
        menuRanksSub.classList.add('menu-ranks-sub-full');
      }
    }

  });

  document.addEventListener('click', (e) => {
    let targ = e.target;
    if (targ.closest('.menu-ranks-sub') || targ == btnToggleMenu) return;
    menuRanksSub.classList.add('d-none');
  });
}