/* Scroll on Buttons*/

$(".js--scroll-to-plans").click(function () {
  $("html, body").animate(
    { scrollTop: $(".js--section-plans").offset().top },
    1000
  );
});
