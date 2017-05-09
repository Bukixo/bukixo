$(() => {
  // const $about = $('#about');
  // const $aboutBox = $('#about-box');
  const $linkedinSvg = $('#linkedinSvg');
  const $linkedin = $('#linkedin');
  const $githubSvg = $('#githubSvg');
  const $github = $('#github');
  const $emailSvg = $('#emailSvg');
  const $email = $('#email');
  const $contactInfo = $('.contactInfo');
  const $contacts = $('.contacts');

  $githubSvg.addClass('animated slideInDown');
  $linkedinSvg.addClass('animated slideInDown');
  $emailSvg.addClass('animated slideInDown');

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



});
