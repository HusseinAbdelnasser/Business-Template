
// header height

$(function(){

    var winH = $(window).height();

    $('.header').height(winH);
});


$(function(){

    $('.navbar-light .navbar-nav .nav-link').on("click", function(){

        $(this).parent().addClass('active').siblings().removeClass('active')
    });
});


// navbar background color changing with scroll

$(function () {
  
    $(window).scroll(function(){
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >=600) {

            navbar.addClass('scrolled');

        } else {

            navbar.removeClass('scrolled');
        }
        
    });
 });



// slide paragraph in services2 section

$(function(){

    $(".services2 .area1-details h2").on("click", function(){

        $(this).next('p').slideToggle();
    });

   
});

// dynamic tabs in services3 section

$(function(){

    $(".services3 .tabs li").on("click", function(){

        $(this).addClass('active').siblings().removeClass('active');

        $(".services3 .content-list > div").hide();

        $($(this).data('content')).fadeIn(1000);
    });
});


// animated progress in services3 section

$(function(){

    $(" .services3 .animated-progress span").each(function(){

        $(this).animate({

            width: $(this).attr('data-progress')

        }, 1000);
    });
});




// form in call-me section
$(function(){

    $('[required]').on('blur', function(){

        if($(this).val() == '') {

            $(this).next('span').fadeIn(1000).delay(2000).fadeOut(1000);
        }
    });

    $('[value]').on('focus', function(){

        $(this).attr("value", "")
    });
});




$(function(){

    $('.projects ul li').on("click", function(){

        $(this).addClass('active').siblings().removeClass('active');

        if($(this).data('class') === 'all'){

            $('.shuffle_images .col-lg-3').animate({
                opacity:1
            },1000);

        }else {
             
            $('.shuffle_images .col-lg-3').animate({
                opacity:.08
            },600);

            $($(this).data('class')).animate({
                opacity:1
            },600);
        }
    });
    
});


// smooth scroll

$(function(){

    $(".navbar .navbar-nav .nav-item .nav-link, .header button").on("click" , function(){

        $('html,body').animate({

            scrollTop:$( $(this).data('value')).offset().top
        },1000)
    });
});


// scroll to top
 
$(function(){

    $(window).on("scroll", function(){

        if($(window).scrollTop() >= 700){
            $(".scroll").fadeIn(1000)

        }else{
            
            $(".scroll").fadeOut(1000)
        }
    });

    $(".scroll").on("click", function(){

        $("html , body").animate({
            scrollTop:0
        }, 1000)
    });
        
});


// trigger nice  scroll

$(function(){
    
    $('html').niceScroll({

        cursorcolor:"#21b592" ,

        cursorwidth:'7px' ,

        cursorborder:'1px solid #1abc9c' ,

        cursorborderradius:'0'
       
    })
});

// pop up


$('.projects .overlay').on('click', function(){

    $($(this).data('popup')).fadeIn(1000);
});

$('.popup').on('click', function(){

    $(this).fadeOut(500);
});

$('.popup .inner').on('click', function(e){

    e.stopPropagation();
});


$('.popup .btn').on('click', function(e){

    e.preventDefault();
    $(this).parent().parent().parent().parent().fadeOut(800);
});

$('.popup i').on('click', function(e){

    e.preventDefault();
    $(this).parent().parent().fadeOut(800);
});

$(document).keydown(function(e){

    if(e.keyboardKey == 27) {    // skip button

        $(this).fadeOut(500);
    }
});


// Typed


var typed = new Typed('.header h2 span', {
    strings: ["Template", "Solutions", "Services"],
    typeSpeed: 150,
    showCursor: false,
    loop:true
});
  

var typed = new Typed('.header p', {
    strings: ["Aria is a top consultancy company specializing in business growth using<br> online marketing and conversion optimization tactics "],
    typeSpeed: 30,
    startDelay: 0,
    showCursor:false
});
  


// Testemonials section

$(function(){

    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
    });
     
});




$(".single-gallery").AutoLightbox({
    width: 682,
    height: 384,
    dimBackground: true
});  



// loading screen

$(window).on('load',function() {
    
    $(".loading-overlay .spinner").fadeOut(2000, function()  {

        $("body").css("overflow","hidden");
        
        $(this).parent().fadeOut(4000, function()  {  
              
            $(this).remove();
        });
                                   
    });
});
  
