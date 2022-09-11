'use strict';

{
  // モーダルウィンドウ始め
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const modal = document.getElementById('modal');
  const mask= document.getElementById('mask');

  open.addEventListener('click', () => {
    modal.classList.remove('hidden');
    mask.classList.remove('hidden');
  });

  close.addEventListener('click', () => {
    modal.classList.add('hidden');
    mask.classList.add('hidden');
  });

  mask.addEventListener('click', () => {
    // modal.classList.add('hidden');
    // mask.classList.add('hidden');
    close.click();
  });
  // モーダルウィンドウ終わり

  // ハンバーガーメニュー始め
  const open_menu = document.getElementById('open_menu');
  const overlay = document.querySelector('.overlay');

  open_menu.addEventListener('click', () => {
    overlay.classList.add('show');
    open_menu.classList.add('hide');
  });


  
 
  // ハンバーガーメニュー終わり



}