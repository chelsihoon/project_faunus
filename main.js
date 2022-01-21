$(function () {
    //메타버스
    let meta = $("#main_cnt_4").offset().top - 300;
    $(window).scroll(function () {
        winScroll = $(window).scrollTop();
        if (winScroll > 0) {
            $("#header").css("background-color", "rgba(72, 87, 118, 0.3)");
            $("#header .nav_wrap .util").addClass("hoverEffect");
        } else {
            $("#header").css("background-color", "rgba(72, 87, 118, 0)");
            $("#header .nav_wrap .util").removeClass("hoverEffect");
        }
        if (winScroll > meta) {
            $("#main_cnt_4 .txt_wrap h2:first-child").css({
                left: "0",
                opacity: "1",
            });
            $("#main_cnt_4 .txt_wrap h2:last-child").css({
                right: "0",
                opacity: "1",
            });
            $("#main_cnt_4 .img_wrap .frame_txt").css({
                top: "50%",
                opacity: "1",
            });
            $("#main_cnt_4 .img_wrap .frame").css({
                transform: "translate(-50%, -50%) scale(1)",
                opacity: "1",
            });
        }
    });

    //탑베너
    let slideBtn = 0;
    function topSlider(index) {
        $("#banner .container .banner_cnt_wrap .banner_cnt")
            .eq(index)
            .stop(true, true)
            .css({ left: "50%", opacity: "1" })
            .siblings()
            .css({ left: "35%", opacity: "0" });
    }
    $("#banner .next_btn")
        .stop(true, true)
        .click(function () {
            slideBtn++;
            if (slideBtn > 1) {
                slideBtn = 0;
            }
            topSlider(slideBtn);
        });
    $("#banner .prev_btn")
        .stop(true, true)
        .click(function () {
            slideBtn--;
            if (slideBtn < 0) {
                slideBtn = 1;
            }
        });
    // 미드베너, 솔루션
    let midBtn = -1;
    let midImg = 0;
    function midSlider(index) {
        $("#main_cnt_2 .bg_warp img")
            .eq(midImg)
            .fadeIn(500)
            .siblings()
            .fadeOut(500);
        $("#main_cnt_2 .container .slide_wrap .cnt_wrap .cnt")
            .eq(index)
            .find(".cnt_titl")
            .css({
                top: "-35px",
                "font-size": "34px",
            })
            .parent()
            .parent()
            .siblings()
            .find(".cnt_titl")
            .css({
                top: "0px",
                "font-size": "18px",
            });
        $("#main_cnt_2 .container .slide_wrap .cnt_wrap .cnt")
            .eq(index)
            .find(".btn_more")
            .css({
                opacity: "1",
            })
            .parents()
            .siblings()
            .find(".btn_more")
            .css({
                opacity: "0",
            });
        $("#main_cnt_2 .container .slide_wrap .cnt_wrap .cnt")
            .eq(index)
            .find(".bar")
            .css({
                width: "100px",
                height: "4px",
                "border-radius": "0",
            })
            .parent()
            .siblings()
            .find(".bar")
            .css({
                width: "8px",
                height: "8px",
                "border-radius": "100%",
            });
        $("#main_cnt_2 .container .slide_wrap .cnt_wrap .cnt")
            .eq(index)
            .find(".focus_on")
            .css({
                width: "200px",
                height: "200px",
            })
            .parent()
            .siblings()
            .find(".focus_on")
            .css({
                width: "0px",
                height: "0px",
            });
    }
    $("#main_cnt_2 .next_btn")
        .stop(true, true)
        .click(function () {
            midBtn++;
            midImg++;
            if (midBtn > 4) {
                midBtn = 0;
            }
            if (midImg > 2) {
                midImg = 1;
            }
            midSlider(midBtn);
        });
    $("#main_cnt_2 .prev_btn")
        .stop(true, true)
        .click(function () {
            midBtn--;
            midImg--;
            if (midBtn < 0) {
                midBtn = 4;
            }
            if (midImg == 0) {
                midImg = 1;
            }
            midSlider(midBtn);
        });
    $("#main_cnt_2 .container .slide_wrap .cnt_wrap .cnt").each(function (
        index
    ) {
        $(this).click(function () {
            midBtn = index;
            if (index % 2 == 0) {
                midImg = 2;
            } else {
                midImg = 1;
            }
            midSlider(index);
        });
    });
});
