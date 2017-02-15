$(function() {

  $("header a").click(function(){
    var id = $(this).attr("href");
    var position = $(id).offset().top;
    $("html,body").animate({
      scrollTop : position
    },400);
  });
  
    $("#read-more").click(function(){
      
      if($(this).hasClass("open")){
        $(this).removeClass("open");
        $(this).text("もっと詳しく");
        $("#more-text").slideUp();  
      }else{
        $(this).addClass("open");
        $(this).text("閉じる");
        $("#more-text").slideDown();  
      };
    });
});