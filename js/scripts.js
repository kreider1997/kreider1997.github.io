$( document ).ready(function() {

  var alian = $(".linkMenu").clone().prependTo("body");
  $(alian).hide();
  $("#ham").click(function(){
    $(alian).slideToggle("slow", function(){
    });
  });
});
