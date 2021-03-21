$(function() {
  $(window).scroll(function () {
      if ($(this).scrollTop() > 5) {
        $("#navbar").addClass('navbar-shadow')
      }
      if ($(this).scrollTop() < 5) {
        $('#navbar').removeClass('navbar-shadow')
      }
  });
});
