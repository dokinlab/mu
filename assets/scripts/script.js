"use scrict";

jQuery('.jsToggle').on('click',function(){
  jQuery(this).toggleClass('active');
});

jQuery('.jsParentToggle').on('click',function(){
  jQuery(this).parent().toggleClass('active');
});

jQuery(document).keyup(function(e) {
    if (e.key === "Escape") {
        jQuery('.jsToggle').removeClass('active');
        jQuery('#body').removeClass('mainMenuActived');
        jQuery('#body').removeClass('searchActived');
    }
});

jQuery('.jsToggleMainMenu').on('click',function(){
  jQuery('body').removeClass('chooseMenuActived');
  jQuery('body').toggleClass('mainMenuActived');
});

jQuery('.jsOpenMainMenu').on('click',function(){
  jQuery('body').removeClass('chooseMenuActived');
  jQuery('body').addClass('mainMenuActived');
});

jQuery('.jsCloseMainMenu').on('click',function(){
  jQuery('body').removeClass('mainMenuActived');
});

jQuery('.jsOpenChooseMenu').on('click',function(){
  jQuery('body').removeClass('mainMenuActived');
  jQuery('body').addClass('chooseMenuActived');
});

jQuery('.jsCloseChooseMenu').on('click',function(){
  jQuery('body').removeClass('chooseMenuActived');
});

jQuery('.jsOpenSearch').on('click',function(){
  jQuery('body').addClass('searchActived');
});

jQuery('.jsCloseSearch').on('click',function(){
  jQuery('body').removeClass('searchActived');
});

jQuery('.jsVideoPlay').on('click',function(){
  jQuery(this).parent().addClass('active');
  document.querySelectorAll('video').forEach(vid => vid.pause());
  jQuery(this).parent().find('video').get(0).play();
});

jQuery('.jsScrollTo').bind('click',function(e){
  let anchor = jQuery(this);
  jQuery('html,body').stop().animate({
    scrollTop: jQuery(anchor.attr('href')).offset().top
  },1000);
  e.preventDefault();
});

let checkScrollTop = function(){
  if (jQuery(this).scrollTop() != 0) {
    jQuery('body').addClass('toTopActived');
  } else {
    jQuery('body').removeClass('toTopActived');
  }
}

checkScrollTop();

jQuery('.js__ratingTab').on('click',function(){
    jQuery('.ratingPage__tabsItem').removeClass('active');
    jQuery('.ratingPage__body').removeClass('active');
    jQuery(this).addClass('active');
    let id = jQuery(this).data('id');
    jQuery('.ratingPage__body_'+id).addClass('active');
});

jQuery(document).on('scroll',function(){
  checkScrollTop();
});

jQuery('.jsCommentAnswer').on('click',function(){
  jQuery(this).parent().parent().toggleClass('active');
});

jQuery('.jsSelect2').select2();

jQuery('input[type=tel]').mask('+7 (999) 999-99-99');

let newsSwiper = new Swiper('#jsNewsSwiper',{
  navigation: {
    prevEl: '#jsNewsSwiperPrev',
    nextEl: '#jsNewsSwiperNext',
  },
  breakpoints: {
    1270: {
      slidesPerView: 2,
      spaceBetween: 30
    }
  }
});

let mainThingSwiper = new Swiper('#jsMainThingSwiper',{
  effect: 'fade',
  fadeEffect: {crossFade:true},
  navigation: {
    prevEl: '#jsMainThingSwiperPrev',
    nextEl: '#jsMainThingSwiperNext',
  },
});

let videosSwiper = new Swiper('#jsVideosSwiper',{
  navigation: {
    prevEl: '#jsVideosSwiperPrev',
    nextEl: '#jsVideosSwiperNext',
  },
  breakpoints: {
    1270: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

let mainSliderSwiper = new Swiper('#jsMainSliderSwiper',{
  navigation: {
    prevEl: '#jsMainSliderSwiperPrev',
    nextEl: '#jsMainSliderSwiperNext',
  },
});

let articlesSwiper = new Swiper('#jsArticlesSwiper',{
  navigation: {
    prevEl: '#jsArticlesSwiperPrev',
    nextEl: '#jsArticlesSwiperNext',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1270: {
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

let docsSwiper = new Swiper('#jsDocsSwiper',{
  navigation: {
    prevEl: '#jsDocsSwiperPrev',
    nextEl: '#jsDocsSwiperNext',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1270: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }
});

console.log('script.js loaded');