$(function(){
  // ヘッダーの高さを再取得する関数
  function updateHeaderHeight() {
    // ヘッダーの高さを再計算
    var headerHeight = $('.p-header').outerHeight() || 0;
    // 必要に応じてCSS変数として保存
    $(':root').css('--header-height', headerHeight + 'px');
  }

  // 初期化時にヘッダーの高さを取得
  updateHeaderHeight();

  // リサイズ時にヘッダーの高さを再取得
  $(window).on('resize', function() {
    updateHeaderHeight();
  });

  // スムーススクロール
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var href = $(this).attr('href');

    // hrefが#だけの場合はトップにスクロール
    if (href === '#') {
      $('html, body').animate({
        scrollTop: 0
      }, 800, 'swing');

      // ハンバーガーメニューが開いている場合は閉じる
      $('.ham-btn').removeClass('active');
      $('.ham-menu').removeClass('active');
      $('body').removeClass('fixed');
      return;
    }

    var target = $(href);
    if (target.length) {
      // ヘッダーの高さを取得（固定ヘッダーの場合）
      var headerHeight = $('.p-header').outerHeight() || 0;

      // ターゲット要素の位置を取得し、ヘッダーの高さ分を引く
      var targetPosition = target.offset().top - headerHeight;

      $('html, body').animate({
        scrollTop: targetPosition
      }, 800, 'swing');

      // ハンバーガーメニューが開いている場合は閉じる
      $('.ham-btn').removeClass('active');
      $('.ham-menu').removeClass('active');
      $('body').removeClass('fixed');
    }
  });

  // ハンバーガーメニュー
  $('.ham-btn').on('click', function(){
    $(this).toggleClass('active');
    $('.ham-menu').toggleClass('active');
    $('body').toggleClass('fixed');
  });

  $('.ham-menu').on('click', function(){
    $(this).removeClass('active');
    $('.ham-btn').removeClass('active');
    $('body').removeClass('fixed');
  });

  $('.p-faq__question').on('click', function(){
    var $item = $(this).closest('.p-faq__item');
    $item.toggleClass('is-open');
    $(this).next('.p-faq__answer').slideToggle(300);
  });

});