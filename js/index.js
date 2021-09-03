/*
  하나의 최근게시스킨으로 여러 컨텐츠 사용을 하려면
  자바스크립트 실행문의 옵션을 수정해야한다.
  가볍고 중복코드가 없게 처리함
  latest.skin.php는 태그파일 거기에 써있는 자바스크립트는 바로 실행된다.
  그러나 지금처럼 독립된 외부 js파일은 이벤트가 없으면 실행불가
  외부연동 스크립트 실행문은 반드시 ready이벤트가 필요
  제이쿼리 ready이벤트를 이용해서 자바스크립트 실행시점을 알려줌
*/
$(function(){

  var swiper1 = new Swiper('.latest_top_wr .swiper1', {
      pagination: '.swiper-pagination1',
      slidesPerView: 1,
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true, // 루프(반복)옵션 활성화시 주석해제
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      centeredSlides: true,
      spaceBetween: 0,
  });

  var swiper2 = new Swiper('.indexSection .swiper1', {
      pagination: '.swiper-pagination1',
      slidesPerView: 'auto',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      loop: true, // 루프(반복)옵션 활성화시 주석해제
      autoplay: 4000,
      autoplayDisableOnInteraction: false,
      centeredSlides: true,
      spaceBetween: 6,
  });
})
