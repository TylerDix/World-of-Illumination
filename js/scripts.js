// Toggle nav menu

// let mainNav = document.getElementById('js-menu');
// let navBarToggle = document.getElementById('js-navbar-toggle');

// navBarToggle.addEventListener('click', function () {
    
//     mainNav.classList.toggle('active');
// });

// $( "#js-navbar-toggle" ).click(function() {
//   $( "#js-menu" ).slideToggle( "fast", function() {
//     // Animation complete.
//   });
// });
alert("This website is for testing purposes only. You can find the original website here: https://worldofillumination.com/");

$( document ).ready(function() {
$( "#js-navbar-toggle, .menu-collapse" ).click(function() {
  $( "#js-menu" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});
});


// scrolly effect

$("a[href^='#']").click(function(e) {
  e.preventDefault();
  
  var position = $($(this).attr("href")).offset().top;

  $("body, html").animate({
    scrollTop: position
  } /* speed */ );
});