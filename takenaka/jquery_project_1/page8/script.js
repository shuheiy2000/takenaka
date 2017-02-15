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
  $(".languages-box").hover(
    function(){
    $(this).find("p").fadeIn();
  },function(){
    $(this).find("p").fadeOut();
  });
  
  $(".btn-pricing").click(function(){
    var title = $(this).parents(".price-column").find("h2").text();
    var cource = $(this).attr("id");
    $("#apply-modal").fadeIn();
    $("#apply-form").find("h2").text(title);
    $("#course-select").val(cource);
  });
  $("#close-modal").click(function(){
    $("#apply-modal").fadeOut();
  });
  
  $(".zoom-black").hide();
  $(".column-image").hover(function(){
    $(this).css("background-size","120%");
    $(this).find(".zoom-black").fadeIn();

  },function(){
    $(this).css("background-size","100%");
    $(this).find(".zoom-black").fadeOut();
  });

  $(".filter-item").click(function(){
    $(".filter-item").removeClass("active");
    $(this).addClass("active");
    var id = $(this).attr("id");
    $(".column-box").fadeOut(1);
    switch(id){
      case "blog":
        $(".blog").fadeIn();
        breake;
      case "tip":
        $(".tip").fadeIn();
        breake;
      case "all":
        $(".column-box").fadeIn();
        breake;
    }
  });
 $('.contact-form').submit(function() {
   var errorflg = true;
  $(".error-message").text("");
  if($(".contact-email").val() == ""){
    $(".error-email").text("入力してください");
    errorflg = false;
  };
  if($(".contact-subject").val() == ""){
    $(".error-subject").text("入力してください");
    errorflg = false;
  };
  if($(".contact-message").val() == ""){
    $(".error-message2").text("入力してください");
    errorflg = false;
  };
  
  if(errorflg == true){
    $(this).find("form").hide();
    $(this).find("h4").text("お問い合わせありがとうございます。");
  }
  return false;
  });
  
  $('.carousel').carousel({
  interval: 2500,
  pause: "none",
  wrap: true,
  keybord: true
});
  
});