///骞垮憡
var arr = [23949,23950,23951,23952,23953]
var sw = "";
for(var i=0;i<arr.length;i++){
    try{
        if(oDaTaNew16654['pos'+arr[i]]){
            console.log(oDaTaNew16654['pos'+arr[i]][1]);
            sw += "<div class=\'swiper-slide\'><a href=\'"+oDaTaNew16654['pos'+arr[i]][1]+"\' target=\'_blank\' onClick=\'PTTSendClick(\'btn\',\'swiper-banner"+(i+1)+"\',\'骞垮憡杞挱"+(i+1)+"\');\'><img src=\'//ossweb-img.qq.com/upload/adw/"+oDaTaNew16654['pos'+arr[i]][2]+"\' alt=\'"+oDaTaNew16654['pos'+arr[i]][9]+"\'></a></div>"
        }
    }catch(e){
        console.log(e)
    }
}
$(".left_banners .swiper-wrapper").html(sw);
////////
var mySwiper = new Swiper('.swiper-banner', {
    direction: 'horizontal',
    loop: true,
    observer: true,//淇敼swiper鑷繁鎴栧瓙鍏冪礌鏃讹紝鑷姩鍒濆鍖杝wiper
    observeParents: true,//淇敼swiper鐨勭埗鍏冪礌鏃讹紝鑷姩鍒濆鍖杝wiper
    autoplay: {
        delay: 6000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    pagination: {
        el: '.swiper-pagination1',
        clickable: true
    },

})


$(".news_navs li").click(function () {

    if (!$(this).hasClass("active")) {
        var index = $(this).index();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".new_con").hide();
        $(".new_con").eq(index).show();

    }
})
//
var wraps=$('.new_con ul');
var chanelID=[117008,117009,117010,117011];
for (var i = 0; i < wraps.length; i++) {

    fillNews.list({
        "gameID": "308",
        "newsType": "news",
        "type": "iTag",
        "pageSize":5,
        "id":chanelID[i],
        "tpl": "<li><a href=\"{url}\" target=\"_blank\"><span class=\"new_title\">{sTitle}</span><span class=\"new_time\">{sIdxTimeShort}</span></a></li>",
        "wrap":wraps[i],
        "detailURL": "/web202106/newsdetail.html"
    })
}
////////
$(".js_item").eq(0).addClass("act");
$(".js_nav li").click(function () {
    if (!$(this).hasClass("active")) {
        makeAllMusicPaused();
        var index = $(this).index();
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
        $(".js_item").fadeOut();
        $(".js_item").eq(index).fadeIn();
        $(".js_item").removeClass("act");
        $(".js_item").eq(index).addClass("act");


    }


})
$(".expend").click(function () {
    if ($(this).hasClass("expd")) {
        $(this).removeClass("expd");
        $(".code_down").removeClass("code_exp")

    } else {

        $(this).addClass("expd");
        $(".code_down").addClass("code_exp")

    }



})


var zyswiper = new Swiper('.zyswiper', {
    loop: true,
    // autoplay: {
    //     delay: 6000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    // },
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    navigation: {
        nextEl: '.zy_next',
        prevEl: '.zy_prev',
    },

    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 100,
        modifier: 4,
        slideShadows: false
    },
    on: {
        slideChangeTransitionEnd: function () {
            var index = this.realIndex;
            $(".visiont_ms_item").fadeOut();
            $(".visiont_ms_item").eq(index).fadeIn();
            $(".ldswiper .swiper-slide").removeClass("swiper-slide-active");
            $(".ldswiper .swiper-slide").eq(index).addClass("swiper-slide-active");



        },
    },
    //   controller: {
    //     control: ldswiper,
    //   }

})

$(".ldswiper .swiper-slide").click(function () {
    if (!$(this).hasClass("swiper-slide-active")) {
        var index = $(this).index();
        zyswiper.slideTo(index);

    }

})





window.onload = function () {

    var tsswiper = new Swiper('.swiper1', {
        initialSlide: 0,
        slidesOffsetBefore: Math.floor(200 * ($(window).width() / 1920)),
        loop: true,
        slidesPerView: 'auto',
        loopedSlides: 5,

        /*  loopAdditionalSlides : 3, */
        observer: true,
        /* observeParents:true, */
        navigation: {
            prevEl: '.prevbtn',
            nextEl: '.nextbtn',
        },
        pagination: {
            el: '.swiper-pagination2',
            clickable: true
        },
        on: {
            slideChangeTransitionEnd: function () {
                var index = this.realIndex;

                $(".p5_num").fadeOut();
                $(".p5_num").eq(index).fadeIn();




            },
        },

    });

    $(".tese_main").css({
        "margin-left": "calc(3.5rem + " + Math.floor(200 * ($(window).width() / 1920)) + "px)"
    })


}






/* var tsswiper = new Swiper('.tsswiper', {
    loop: true,

    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 'auto',


    coverflowEffect: {
        rotate: 20,
        stretch: 50,
        depth: 80,
        modifier: 2,
        slideShadows: false
    },
    pagination: {
        el: '.swiper-pagination2',
        clickable: true
    },

    on: {
        slideChangeTransitionEnd: function () {
            var index = this.realIndex;

            $(".p5_num").fadeOut();
            $(".p5_num").eq(index).fadeIn();




        },
    },


}) */


// var ldswiper = new Swiper('.ldswiper', {
//     slidesPerView : 3,
//     spaceBetween:'5%' ,

// })









function forIEview() {
    if (window.ActiveXObject || "ActiveXObject" in window) {
        $(".p4_dianzhui").hide();
        $(".p5_dianzhui").hide();
        $(".addor").hide();
        $('.music_btn').addClass("on");

    }
}
forIEview();


function makeAllMusicPaused() {
    var audioMusicsLength = $('.audios').length;
    var $audioMusics = $('.audios');
    $('.sounds').removeClass('active');
    for (var i = 0; i < audioMusicsLength; i++) {
        $audioMusics[i].pause();
        $audioMusics[i].currentTime = 0;
    }
}

$('.audios').each(function (index, element) {
    element.addEventListener('playing', function (e) {
        var _self = $(this);
        _self.parent('.sounds').addClass('active');
    }, false);
    element.addEventListener('ended', function (e) {
        var _self = $(this);
        _self.parent('.sounds').removeClass('active');
    }, false);
})



$(".sounds").on("click", function () {
    var _self = $(this);
    var cvaudioId = _self.data('id');
    if(!cvaudioId) return;
    var cvAudio = $('#' + cvaudioId)[0];
    if (cvAudio.paused) {
        makeAllMusicPaused();
        _self.addClass('active');
        cvAudio.volume = 0.8;
        cvAudio.play();
    } else {
        _self.removeClass('active');
        cvAudio.pause();
    }





})

