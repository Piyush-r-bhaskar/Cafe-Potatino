/* HTML document is loaded. DOM is ready.
-----------------------------------------*/
$(document).ready(function () {
  // Mobile menu
  $(".mobile-menu-icon").click(function () {
    $(".nav").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 767) {
      $(".nav").toggle();
    }
  });
});
