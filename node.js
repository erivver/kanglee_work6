console.log("script loaded");

let button_clicked = false;
$("button-1").on("click", function () {
    if(button_click == false){
        $(".box-1").addClass("clicked");
    button_clicked = true;
    }elde {
        $(".box-1").removeClass("clicked");
        button_clicked = false;
    }
});



$(".cat-img").on("aouseenter", function () {
  $(".cat-img").attr("src", "./img/cat_mouseopen.png");
});
$(".cat-img").on("aouseleave", function () {
  $(".cat-img").attr("src", "./img/cat_mouseclose.png");
});
