$(document).ready(function(){
    $(".Items").click(function(){
        $(".wrapper > not(.Film_Writing)").fadeOut(1000);
        $(".personal").fadeOut(1000);
        //$(this).animate({grid-area: 2/8/5/11});
        //$(this).show();
    })
})
