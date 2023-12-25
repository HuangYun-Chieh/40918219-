$(document).ready(function() {
    // 按鈕1: 調整字體和顏色
    $("#adjust-text").click(function() {
        $("#student-id, #name").css({
            "font-family": "Arial",
            "color": "blue"
        });
    });

    // 按鈕2: 調整大頭照樣式
    $("#adjust-profile").click(function() {
        $("#profile-pic").css({
            "border-radius": "50%",
            "border": "5px solid red"
        });
    });

    // 按鈕3: 換圖
    $("#change-photo").click(function() {
        $("#profile-pic").attr("src", "20231221_232400.jpg");
    });

    // 按鈕4: 動畫切換
    $("#animate-photo").click(function() {
        $("#profile-pic").fadeOut(1000, function() {
            $(this).attr("src", "20231221_232400.jpg").fadeIn(1000);
        });
    });
});
