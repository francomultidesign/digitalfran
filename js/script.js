$(document).ready(function(){
    $('.illustration, .websites, .videos, .contact').fadeOut('slow');

    $('.websites-link a').on('click', function() {
    $('.websites').fadeIn('slow')
    $('.websites').addClass('inview');
    $('.home').addClass('backdoor');
  });
    $('.illustration-link a').on('click', function() {
    $('.illustration').fadeIn('slow');
    $('.illustration').addClass('inview');
    $('.home').addClass('backdoor');
  });
    $('.video-link a').on('click', function() {
    $('.videos').fadeIn('slow');
    $('.videos').addClass('inview');
    $('.home').addClass('backdoor');
  });
  $('.contact-link a').on('click', function() {
    $('.contact').fadeIn('slow');
    $('.contact').addClass('inview');
    $('.home').addClass('backdoor');
  });
  //removing modales
  $('div.btn-back').on('click', function() {
    $('.illustration, .websites, .videos, .contact').fadeOut('slow');
    $('.trick').removeClass('inview');
    $('.home').removeClass('backdoor');
  });
  // Title example
  $('.tlt').textillate({
    loop: true,
    minDisplayTime: 100,
    in: {
      effect: 'flipInX',
      delayScale: 0,
    },
    out: {
      effect: 'fadeOutDown',
      delayScale: 0,
    },
    type: 'word',
  });
  // Fix for hover in buttons
  $('.my_popup_open, button').on('focus',function(){
    $(this).blur();
    });

});

// GOOGLE ANALITYCS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-79727364-1', 'auto');
ga('send', 'pageview');