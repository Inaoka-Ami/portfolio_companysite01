//////////// ハンバーガーメニュー ////////////
$(".hamburger_icon").on("click", function (e) {
  $(".hamburger-nav").slideToggle();
});

// クリックしたら閉じる
$('.hamburger-nav a[href]').on('click', function(event) {
  $('.hamburger_icon').trigger('click');
});


//////////// Slide スライド ////////////
var swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 58,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 80,
      centeredSlides: true,
    },
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (n) {
      return '0' + n;
    },
    formatFractionTotal: function (n) {
      return '0' + n;
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//////////// Work 下からフェードインさせる ////////////
$('.fadeInUp').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      // フェードインアップというクラスを付与してます
      $(this.element).addClass('animate__fadeInUp');

      // アニメーションが１回しか呼ばれないようにするためにdestroyしてます
      this.destroy();
    }
  },

  // 画面中央に来たらhandlerを実行する設定です
  offset: '50%',
});


//////////// 選ばれる理由 アコーディオン ////////////
// アコーディオンのタイトルがクリックされたら
$('.accordion_title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


// 三角形の動き
$(function () {
  $(".accordion_title").on('click', function () {
    $(this).toggleClass("open");
  });
});


//////////// voice 左・右からフェードインさせる ////////////
$('.fadeInLeft').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      // フェードインアップというクラスを付与してます
      $(this.element).addClass('animate__fadeInLeft');

      // アニメーションが１回しか呼ばれないようにするためにdestroyしてます
      this.destroy();
    }
  },

  // 画面中央に来たらhandlerを実行する設定です
  offset: '50%',
});

$('.fadeInRight').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      // フェードインアップというクラスを付与してます
      $(this.element).addClass('animate__fadeInRight');

      // アニメーションが１回しか呼ばれないようにするためにdestroyしてます
      this.destroy();
    }
  },

  // 画面中央に来たらhandlerを実行する設定です
  offset: '50%',
});
