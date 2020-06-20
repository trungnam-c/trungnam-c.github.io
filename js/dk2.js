$(document).ready(function() {
    let mbn = ["img/banner.PNG", "img/banner2.PNG", "img/banner3.PNG"];
    let dembn = 0;
    setInterval(function() {
        dembn += 1;
        if (dembn > mbn.length - 1) {
            dembn = 0;
        }
        $("#bn").css("opacity", "0");
        setTimeout(function() {
            $("#bn").html("<img src=" + mbn[dembn] + ">");
            $("#bn").css("opacity", "1");
        }, 1000);
    }, 4000);
    $(".ulcon1").fadeOut();
    $("#iptim").fadeOut();
    $("#menu").click(function() {
        if ($(".ulcon1").css("display") == "none") {
            $(".ulcon1").fadeIn();
            $("#menu").css("transform", "rotate(90deg)")
        } else if ($(".ulcon1").css("display") == "block") {
            $("#menu").css("transform", "rotate(0deg)")
            $(".ulcon1").fadeOut();
        }
    });
    $("#tim").click(function() {
        if ($("#iptim").is(':hidden')) {
            $("#iptim").fadeIn(1000);
        } else {
            $("#iptim").fadeOut(1000);
        }
    });
    alert("Tìm cửa hàng gần nhất bằng cách cho phép vị trí của bạn");
});


// function getLocation() {

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// var x = document.getElementById("map");

// function showPosition(position) {
//     var lat = position.coords.latitude;
//     var lon = position.coords.longitude;
//     var gLatLon = new google.maps.LatLng(lat, lon);

//     var ojbConfig = {
//         zoom: 17,
//         center: gLatLon
//     };
//     var gMap = new google.maps.Map(x, ojbConfig);
//     console.log(gMap);
// }