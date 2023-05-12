function LunboSwiper(options) {
    this.options = options;
    this.wrap = document.querySelector(this.options.wrap);
    this.leftbtn = document.querySelector(".leftbtn");
    this.rightbtn = document.querySelector(".rightbtn");
    this.items = this.wrap.querySelectorAll(".pic li");
    this.current = 0;
    this.init();
    this.initEvents();



}

LunboSwiper.prototype.clearStyle = function () {
    var length = this.items.length;
    for (var i = 0; i < length; i++) {
        this.items[i].className = "";
    }

}

LunboSwiper.prototype.anim = function (num) {
    this.current = num;
    var length = this.items.length;
    this.clearStyle();
    for (var i = 0; i < length; i++) {
        if (i == this.current) {
            this.items[i].className = "now";
            this.items[i - 1 < 0 ? length - 1 : i - 1].className = "prev";
            this.items[i + 1 > length - 1 ? 0 : i + 1].className = "next";
        }
    }
    if(this.options.callback){
        this.options.callback(num);
    }
}



LunboSwiper.prototype.init = function () {

    this.anim(this.current);


}
LunboSwiper.prototype.initEvents = function () {
    var th = this;
    this.leftbtn.addEventListener('click',function(){
        th.current --;
        if(th.current < 0  ){
            th.current = th.items.length - 1;
        }
        th.anim(th.current );


    },false)

    this.rightbtn.addEventListener('click',function(){
        th.current ++;
        if(th.current > th.items.length - 1 ){
            th.current = 0;
        }
        th.anim(th.current );


    },false)



}



var lunbo1 = new LunboSwiper({
    wrap: '.lswiper',
    callback:function(num){

        console.log(num);
        $(".visiont_ms_item").fadeOut();
        $(".visiont_ms_item").eq(num).fadeIn();
        $(".ldswiper .swiper-slide").removeClass("swiper-slide-active");
        $(".ldswiper .swiper-slide").eq(num).addClass("swiper-slide-active");

    }
})

$(".ldswiper .swiper-slide").click(function () {
    if (!$(this).hasClass("swiper-slide-active")) {
        var index = $(this).index();
        lunbo1.anim(index);

    }

})



