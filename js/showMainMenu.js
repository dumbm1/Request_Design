(function showMainMenu() {
  'use strict';
  let menu_main = document.querySelector('div.menu-main');
  let menu_main_list = document.querySelector('div.menu-main-list');
  menu_main.addEventListener('click', function (e) {
    let media_md = window.matchMedia("(max-width: 768px)");
    if (media_md.matches) {
      menu_main_list.classList.toggle('show-me');
    }
  });
  document.addEventListener('click', (e) => {
    if (e.target.classList.toString().match('nav-link') ||
      e.target.classList.toString().match('menu-main') ||
      e.target.classList.toString().match('menu-main-list') ||
      e.target.classList.toString().match('mail')
    ) {return;}
    menu_main_list.classList.remove('show-me');
  });
}());
