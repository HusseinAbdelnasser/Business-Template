
    $(function () {

    $(window).scroll(function(){
  
    var navbar = $('.navbar');
  
    if ($(window).scrollTop() >=300) {

      navbar.addClass('scrolled');

    } else {

      navbar.removeClass('scrolled');
    }
  
    });
  });
