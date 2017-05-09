$(() => {
  const $titleBox = $('.title-box');
  // const $about = $('#about');
  const $aboutBox = $('.about-box');
  const $linkedinSvg = $('#linkedinSvg');
  // const $linkedin = $('#linkedin');
  const $githubSvg = $('#githubSvg');
  // const $github = $('#github');
  const $emailSvg = $('#emailSvg');
  // const $email = $('#email');
  const $contactInfo = $('.contactInfo');
  // const $contacts = $('.contacts');
  const $home = $('.home');
  const $fabric = $('fabric');
  const $wanderful = $('.wanderful');
  const $ed = $('.ed');
  const $shuku = $('.shuku');
  const $simon = $('.simon');

  backgroundChange();




  $githubSvg.addClass('animated slideInDown');
  $linkedinSvg.addClass('animated slideInDown');
  $emailSvg.addClass('animated slideInDown');
  $fabric.addClass('animated slideInDown');
  $wanderful.addClass('animated slideInDown');
  $ed.addClass('animated slideInDown');
  $shuku.addClass('animated slideInDown');
  $simon.addClass('animated slideInDown');

  $linkedinSvg.on('click', function () {
    $contactInfo.text(function(text) {
      return text === '' || text.length !== 0 ? 'www.linkedin.com/bukithompson' : '';
    }).addClass('animated fadeIn');
  });

  $emailSvg.on('click', function () {
    $contactInfo.text(function(text) {
      return text === '' || text.length !== 0 ? 'Bukithompson@gmail.com' : '';
    }).addClass('animated slideInLeft');
  });

  $githubSvg.on('click', function () {
    $contactInfo.text(function(text) {
      return text === '' || text.length !== 0 ? 'www.Github.com/Bukixo' : '';
    }).addClass('animated bounceInRight');
  });


///////////////////////////////////////////////


  function changeColor(selector, colors) {
    var curCol = 0;
    if (curCol === colors.length) curCol = 0;
    $(selector).css('background-color', colors[curCol]);
    curCol++;

  }

  function backgroundChange(){
    changeColor($home, ['Grey']);
  }

}); ////////////window closing tag
