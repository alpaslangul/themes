ASite = {

    init: function () {
        imagesCount = $('.images .gallery-item').length;    // toplam images altındaki birinci kademe div sayısı
       
        ASite.imageLoop();
        $(".mCS_img_loaded").bind('click', ASite.textHover);

    },

    imageLoop: function () {

        for (var i = 0; i < imagesCount; i++) {
            var rndASite = Math.floor((Math.random() * 4));
            console.log('.loop' + rndASite + '');            
            $('.images .gallery-item').eq(i).children('.loop'+rndASite+'').addClass('imgActive').siblings().removeClass('imgActive');
                           
            console.log(rndASite);
       }
        
    },

    textHover: function () {
            console.log('textHover');
        
    }
},
    $(document).ready(function () {
        ASite.init();
       
    });