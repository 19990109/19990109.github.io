var swiper = new Swiper('.swiper-container', {
    on:{
        init: function(){
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function(){
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    direction: 'vertical',
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});


var img1=document.getElementById("img1")
var music=document.getElementById("music")
var img2=document.getElementById("img2")
var em1=document.getElementById("mp3bgm")

var flag=1
music.onclick=function(){
    if(flag==1){
        img1.style.animation="none"
        img2.style.display="none"
        em1.pause()
        flag=0
    }else{
        img1.style.animation="music_off 1s linear infinite"
        img2.style.display="block"
        em1.play();
        flag=1
    }
}