$(document).ready(function(){

    let count = 0;

    let gem1 = false;
    let gem2 = false;
    let gem3 = false;
    let gem4 = false;
    let gem5 = false;
    let gem6 = false;
    let gem7 = false;
    let gem8 = false;
    let gem9 = false;
    let gem10 = false;


    // 1. Burning
    $(".gem1").on("mouseenter", function(){

        if (gem1 == false) {

            $(".gem1").addClass("hide");
            $(".character1 .cookie").addClass("show");

            gem1 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 2. Dark
    $(".gem2").on("mouseenter", function(){

        if (gem2 == false) {

            $(".gem2").addClass("hide");
            $(".character2 .cookie").addClass("show");

            gem2 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 3. Eternal
    $(".gem3").on("mouseenter", function(){

        if (gem3 == false) {

            $(".gem3").addClass("hide");
            $(".character3 .cookie").addClass("show");

            gem3 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 4. Gold
    $(".gem4").on("mouseenter", function(){

        if (gem4 == false) {

            $(".gem4").addClass("hide");
            $(".character4 .cookie").addClass("show");

            gem4 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 5. Holy
    $(".gem5").on("mouseenter", function(){

        if (gem5 == false) {

            $(".gem5").addClass("hide");
            $(".character5 .cookie").addClass("show");

            gem5 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 6. Mistic
    $(".gem6").on("mouseenter", function(){

        if (gem6 == false) {

            $(".gem6").addClass("hide");
            $(".character6 .cookie").addClass("show");

            gem6 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 7. Pure
    $(".gem7").on("mouseenter", function(){

        if (gem7 == false) {

            $(".gem7").addClass("hide");
            $(".character7 .cookie").addClass("show");

            gem7 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 8. Saint
    $(".gem8").on("mouseenter", function(){

        if (gem8 == false) {

            $(".gem8").addClass("hide");
            $(".character8 .cookie").addClass("show");

            gem8 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 9. Shadow
    $(".gem9").on("mouseenter", function(){

        if (gem9 == false) {

            $(".gem9").addClass("hide");
            $(".character9 .cookie").addClass("show");

            gem9 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 10. Silent
    $(".gem10").on("mouseenter", function(){

        if (gem10 == false) {

            $(".gem10").addClass("hide");
            $(".character10 .cookie").addClass("show");

            gem10 = true;
            count = count + 1;

            checkAll();
        }

    });


    // 쿠키 10개가 전부 나타났는지 확인
    function checkAll(){

        if (count == 10) {
            $(".event-info").addClass("show");
        }

    }

});