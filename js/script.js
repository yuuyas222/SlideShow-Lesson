$(function(){
    $(".theTarget").skippr({
        transition: "fade",
        speed: 1000,
        easing: "easeOutQuart",
        navType: "block",
        childrenElementType: "div",
        arrows: true,
        autoPlay: true,
        autoPlayDuration: 500,
        keyboardOnAlways: true,
        hidePrevious: false
    });
});