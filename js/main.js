$(document).ready(function(){
    // pc 메뉴 이동
    var nav = $(".gnb ul li.slide");
    var cont = $("#container .nav_go");

    nav.click(function(c){
        c.preventDefault();
        var target = $(this);
        var index = target.index();

        var section = cont.eq(index);
        var offset = section.offset().top;
        
        $("html, body").stop().animate({ scrollTop: offset },500);
        
        
    });
});