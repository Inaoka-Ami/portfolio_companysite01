
//////////// ハンバーガーメニュー ////////////
$(function () {
  $('#js-hamburger-menu, .navigation__list-sp').on('click', function () {
    $('.navigation').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});

// クリックしたら閉じる
$('.navigation a[href]').on('click', function(event) {
  $('.hamburger-menu').trigger('click');
});



//////////// スライド ////////////
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


//////////// Dentatsuで一歩先の働き方を  要素をふわっとフェードインさせる ////////////
$('.work-item').waypoint({
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
$('.accordion-title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


// 三角形の動き
$(function () {
  $(".accordion-title").on('click', function () {
    $(this).toggleClass("active");
  });
});


//////////// voice スクロールに付随したフェードイン（左右方向） ////////////
$('.left').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

$('.right').waypoint({
  handler: function (direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});


//////////// STEP  要素をふわっとフェードインさせる ////////////
$('.step-item').waypoint({
  handler: function (direction) {
    if (direction === 'down') {
      // フェードインアップというクラスを付与してます
      $(this.element).addClass('animate__fadeInUp');

      // アニメーションが１回しか呼ばれないようにするためにdestroyしてます
      this.destroy();
    }
  },

  // 画面中央に来たらhandlerを実行する設定です
  offset: '70%',
});


//////////// FAQ アコーディオン ////////////

// アコーディオンのタイトルがクリックされたら
$('.accordion-inside-title').on('click', function (e) {

  // .accordion-contentを選択
  var content = $(e.target).next();

  // .accordion-contentを表示・非表示
  content.slideToggle();

});


// 三角形の動き
$(function () {
  $(".accordion-inside-title").on('click', function () {
    $(this).toggleClass("active");
  });
});
