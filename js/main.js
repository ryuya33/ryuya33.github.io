'use strict';

{
  // モーダルウィンドウ始め
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask= document.getElementById('mask');

  if(open) {
    open.addEventListener('click', () => {
      modal.classList.remove('hidden');
      mask.classList.remove('hidden');
    });
  }

  if(close) {
    close.addEventListener('click', () => {
      modal.classList.add('hidden');
      mask.classList.add('hidden');
    });
  }

  if(mask) {
    mask.addEventListener('click', () => {
      // modal.classList.add('hidden');
      // mask.classList.add('hidden');
      close.click();
    });
  }
  // モーダルウィンドウ終わり

  // ハンバーガーメニュー始め
  const open_menu = document.getElementById('open_menu');
  const overlay = document.querySelector('.overlay');
  const close_menu = document.getElementById('close_menu');

  open_menu.addEventListener('click', () => {
    overlay.classList.add('show');
    open_menu.classList.add('hide');
  });

  close_menu.addEventListener('click', () => {
    overlay.classList.remove('show');
    open_menu.classList.remove('hide');
  });
  // ハンバーガーメニュー終わり

// アコーディオンUI始め
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');

      dts.forEach(el => {
        if (dt !== el) {
          el.parentNode.classList.remove('appear');
        }
      })
    });
  });
// アコーディオンUI終わり

// タブメニュー始め
  const menuItems = document.querySelectorAll('.menu li a');

  menuItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      item.classList.add('active');
    });
  });
 
// タブメニュー終わり


}