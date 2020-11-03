let mmau = [
    ["img/xam1.jpg", "img/xam.jpg"],
    ["img/vang1.jpg", "img/vang.jpg"],
    ["img/xanh1.jpg", "img/xanh.jpg"],
    ["img/den1.jpg", "img/den.jpg"],
    ["img/trang1.jpg", "img/trang.jpg"],
    ["img/do1.jpg", "img/do.jpg"]
];
let tele = ["img/tele1.jpg", "img/tele2.jpg", "img/tele3.jpg"];
let view = ["img/hinh1view.jpg", "img/hinh2view.jpg", "img/hinh3view.jpg", "img/hinh4view.jpg"];
let demview = 0;
let night = ["img/nightmode1.jpg", "img/nightmode1_1.jpg"];
let checknight = 0;
let linkytb = ["https://www.youtube.com/embed/mmm2PIKmtuI", "https://www.youtube.com/embed/84AkrI2Kp0g", "https://www.youtube.com/embed/84Be8mw8bSQ"];
let demytb = 0;
$(document).ready(function() {
    $(".cmau").click(function() {
        let idx = $(this).index();
        $("#sl1").fadeOut();
        $("#sl2").fadeOut();
        setTimeout(function() {
            $("#sl1").attr("src", mmau[idx][0]);
            $("#sl2").attr("src", mmau[idx][1]);
        }, 400);
        $("#sl1").fadeIn();
        $("#sl2").fadeIn();
    });

    $(document).scroll(function() {
        let idx = $(document).scrollTop();
        console.log(idx);
        switch (idx) {
            case 1900:
                $("#tele").css("opacity", "0");
                setTimeout(function() {
                    $("#tele").attr("src", tele[0]);
                    $("#tele").css("opacity", "1");
                }, 500);

                break;
            case 2100:
                $("#tele").css("opacity", "0");
                setTimeout(function() {
                    $("#tele").attr("src", tele[1]);
                    $("#telechu").html("Rộng");
                    $("#tele").css("opacity", "1");
                }, 500);
                break;
            case 2200:
                $("#tele").css("opacity", "0");
                setTimeout(function() {
                    $("#tele").attr("src", tele[2]);
                    $("#telechu").html("Cực Rộng");
                    $("#tele").css("opacity", "1");
                }, 500);
                break;
            case 6000:
                $("#trangden").css("opacity", "0");
                setTimeout(function() {
                    $("#trangden").attr("src", "img/trangden1_1.png");
                    $("#trangden").css("opacity", "1");
                }, 500);
                break;
            case 5800:
                $("#trangden").css("opacity", "0");
                setTimeout(function() {
                    $("#trangden").attr("src", "img/trangden1.png");
                    $("#trangden").css("opacity", "1");
                }, 500);
                break;
        }
    });
    $(".telebtn").click(function() {
        let idtele = $(this).index() - 3;
        $("#tele").css("opacity", "0");
        setTimeout(function() {
            $("#tele").attr("src", tele[idtele]);
            $("#telechu").html("Cực Rộng");
            $("#tele").css("opacity", "1");
        }, 500);

    });
    let mtd = [
        ["img/switchmo.png", "img/trangden1.png"],
        ["img/switchtat.png", "img/trangden1_1.png"]
    ];
    let demtd = 0;
    $("#chandung").click(function() {
        if (demtd == 0) {
            $("#trangden").css("opacity", "0");
            setTimeout(function() {
                $("#chandungimg").attr("src", mtd[demtd][0]);
                $("#trangden").attr("src", mtd[demtd][1]);
                $("#trangden").css("opacity", "1");
            }, 500);
            demtd = 1;
        } else {
            $("#trangden").css("opacity", "0");
            setTimeout(function() {
                $("#chandungimg").attr("src", mtd[demtd][0]);
                $("#trangden").attr("src", mtd[demtd][1]);
                $("#trangden").css("opacity", "1");
            }, 500);
            demtd = 0;
        }
        console.log(demtd);
    });


    $("#trai1").click(function() {
        demview -= 1;
        if (demview < 0) {
            demview = view.length - 1;
        }
        $("#view").css("transform", "scale(0.1 , 0.1)");
        setTimeout(function() {
            $("#view").attr("src", view[demview]);
            $("#view").css("transform", "scale(1 , 1)");
        }, 500);
    });
    $("#phai1").click(function() {
        demview += 1;
        if (demview >= view.length) {
            demview = 0;
        }
        $("#view").css("transform", "scale(0.1 , 0.1)");
        setTimeout(function() {
            $("#view").attr("src", view[demview]);
            $("#view").css("transform", "scale(1 , 1)");
        }, 500);
    });



    $("#light").click(function() {
        if (checknight == 0) {
            checknight = 1;
            $("#light").css("background-color", "white");
            $("#imglight").attr("src", "img/light1.png")
        } else {
            checknight = 0;
            $("#light").css("background-color", "black");
            $("#imglight").attr("src", "img/light.png")
        }
        $("#night").css("opacity", "0");
        $(".timsize1").css("display", "none");
        setTimeout(function() {
            $("#night").attr("src", night[checknight]);
            $("#night").css("opacity", "1");
        }, 1000);
        // if ($(document).width() > 470) {
        //     setTimeout(function() {
        //         $(".timsize1").css("display", "block");
        //     }, 1900);
        // }
    });
    $("#trai2").click(function() {
        demytb -= 1;
        if (demytb < 0) {
            demytb = linkytb.length - 1;
        }
        $("#ytb").attr("src", linkytb[demytb]);
    });
    $("#phai2").click(function() {
        demytb += 1;
        if (demytb >= linkytb.length) {
            demytb = 0;
        }
        $("#ytb").attr("src", linkytb[demytb]);
    });

    // tao cung dang code dong nay
    // dong nay nua
    // dong nay nua
    // nnnnnn


    //     test xung dotasdasdadasd
});