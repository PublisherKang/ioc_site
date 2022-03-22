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

// 우크라이나 Help 함수
goHelp();
function goHelp(){
    
    const helpBtn = document.querySelector(".go_help");
    const contGo = document.querySelector(".cont3.nav_go");
    // let goScroll = contGo.getBoundingClientRect;
    let goScrollTop = contGo.offsetTop;
    console.log(goScrollTop);

    helpBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.scrollTo(0, goScrollTop)
    });
    
}