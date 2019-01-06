// Toggle nav menu

$( document ).ready(function() {
$( "#js-navbar-toggle" ).click(function() {
  $( "#js-menu" ).slideToggle( "fast", function() {
    // Animation complete.
  });
});
});