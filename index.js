$("h1").click(function() {
  $("h1").css("color", "purple");
});

$(document).keydown(function(event) {
  $("h1").text(event.key);
});

$("h1").on("click", function() {
  $("h1").hide();
});

