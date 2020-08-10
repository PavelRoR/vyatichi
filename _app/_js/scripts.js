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


    /*Конец документа*/
});