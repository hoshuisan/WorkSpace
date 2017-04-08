/**
 * Created by lenovo on 2017/3/30.
 */

//swiper设置
var mySwiper = new Swiper (".swiper-container", {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 0,
    loop: false,
    onReachEnd: function(swiper){
        $("#page2").hide();
        $("#page3").show();
    }
});
$("#page2 , #page3").hide();
$("#start").on("click",function(){
    $(" #page1").hide();
    $(" #page2").show();
});
$(".swiper-container label,.swiper-container input").click(function(){
    var this_active = $(this).parents(".swiper-slide").index();
    setTimeout(function(){
        mySwiper.slideTo(this_active+1,500)
    },500);

});
$('.swiper-button-next').click(function(){
    if(mySwiper .isEnd){
        $(" #page2").hide();
        $(" #page3").show();
    }
});

