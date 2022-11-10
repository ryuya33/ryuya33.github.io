'use strict';

{
  //logoの表示始め
  $(window).on('load',function(){
    $("#splash").delay(1500).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });
  //logoの表示終わり

  // logoの表示初回のみ始め
  $(function () {
    var webStorage = function () {
      if (sessionStorage.getItem('access')) {
        $(".loading").addClass('is-active');
      } else {
        sessionStorage.setItem('access', 'true'); // sessionStorageにデータを保存
        $(".loading-animation").addClass('is-active'); // loadingアニメーションを表示
        setTimeout(function () {
          // ローディングを数秒後に非表示にする
          $(".loading").addClass('is-active');
          $(".loading-animation").removeClass('is-active');
        }, 3000); // ローディングを表示する時間
      }
    }
    webStorage();
  });
  // logoの表示初回のみ終わり

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
  const hero = document.querySelector('.hero');

  open_menu.addEventListener('click', () => {
    overlay.classList.add('show');
    open_menu.classList.add('hide');
    hero.classList.add('hide');
  });

  close_menu.addEventListener('click', () => {
    overlay.classList.remove('show');
    open_menu.classList.remove('hide');
    hero.classList.remove('hide');
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
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      })
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      })
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
 
// タブメニュー終わり

// カルーセル始め
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('.hero ul');
  const slides = ul.children;
  const dots = [];
  let currentIndex = 0;


  function updateButtons() {
    prev.classList.remove('hidden_carousel')
    next.classList.remove('hidden_carousel')

    if (currentIndex === 0) {
      prev.classList.add('hidden_carousel');
    }
    if (currentIndex === slides.length - 1) {
      next.classList.add('hidden_carousel');
    }
  }

  function moveSlides() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  function setupDots() {
    for (let i = 0; i < slides.length; i++) {
      const button = document.createElement('button');
      button.addEventListener('click', () => {
        currentIndex = i;
        updateDots();
        updateButtons();
        moveSlides();
      });
      dots.push(button);
      document.querySelector('.nav3').appendChild(button);
    }

    dots[0].classList.add('current');
  }
 
  function updateDots() {
    dots.forEach(dot => {
      dot.classList.remove('current');
    });
    dots[currentIndex].classList.add('current');
  }

  updateButtons();
  setupDots();

  next.addEventListener('click', () => {
    currentIndex++;
    updateButtons();
    updateDots();
    moveSlides();
  });

  prev.addEventListener('click', () => {
    currentIndex--;
    updateButtons();
    updateDots();
    moveSlides();
  });

  window.addEventListener('resize', () => {
    moveSlides();
  });  
// カルーセル終わり
}