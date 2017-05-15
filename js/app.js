$(() => {
  // const $titleBox = $('.title-box');
  // // const $about = $('#about');
  // const $aboutBox = $('.about-box');
  // const $contactInfo = $('.contactInfo');
  // // const $contacts = $('.contacts');
  const $home = $('.home');
  // const $fabric = $('fabric');
  // const $wanderful = $('.wanderful');
  // const $ed = $('.ed');
  // const $shuku = $('.shuku');
  // const $simon = $('.simon');
  const $links = $('.projects a');

  backgroundChange();


///////////////////////////////////////////////


  function changeColor(selector, colors) {
    var curCol = 0;
    if (curCol === colors.length) curCol = 0;
    $(selector).css('background-color', colors[curCol]);
    curCol++;

  }

  function backgroundChange(){
    changeColor($home, ['#e0e0e0']);
  }

////////////////////////////////////////


  $links.on('click', scrollToSection);

  function scrollToSection() {
    const section = $(this).attr('href');
    $('body').animate({ scrollTop: $(`${section}`).offset().top}, 1000);
  }

}); ////////////window closing tag
