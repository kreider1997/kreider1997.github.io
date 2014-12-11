$( document ).ready(function() {

  $('a[rel="external"]').attr('target','_blank');

  var alian = $(".linkMenu").clone().prependTo("body");
  $(alian).addClass("close")

  $("#ham").click(function(){
    if  ($(alian).hasClass("close"))
        $(alian).removeClass("close").addClass("open");
    else
        $(alian).removeClass("open").addClass("close");
  });
});
