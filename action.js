$(window).scroll(function() {
  var y = $(this).scrollTop();
  $('.experienceText').each(function () {
       var t = $(this).parent().offset().top-400;
       if (y > t) {
           $(this).addClass("slideIn");
           $(this).show();
       }
       else {
           $(this).fadeOut();
       }
   });
 });
