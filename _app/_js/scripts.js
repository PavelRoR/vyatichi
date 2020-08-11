//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js

$(document).ready(function () {
    /* Якорь */
    $("a[href='#plan']").click(function (h) {
        h.preventDefault();
        var f = $(this).attr("href"),
            g = $(f).offset().top;
        $("body,html").animate({
            scrollTop: g
        }, 1500)
    });
    $(".video-wrapper-rev img").click(function () {
        // if (!$(this).parent().hasClass('switched-rev')) {
        var a = $(this).parent().attr("data-youtube");
        // var b = $(this).parent().attr("data-img");
        // $('#coaches').find('.video-wrapper-rev iframe').parent().html('<img src=' + b + ' alt="Отзыв 1 />"');
        // $('#coaches').find('.video-wrapper-rev iframe').html('<img src=' + b + ' alt="Отзыв 1 />"');
        // }

        $(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1&mute=1&modestbranding=1"  allowfullscreen></iframe>').addClass('switched-rev');
        // }
        // else {
    });

    /*Конец документа*/
});