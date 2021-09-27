$(document).ready(function () {
    var navMenus = $("header .menu li");
    navMenus.click(function () {
        navMenus.removeClass('changed');
        $(this).addClass("changed");
    });

    $('.slider').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        pauseOnHover: false,
        pauseOnFocus: false,
        prevArrow: '<button class="slide-arrow prev-arrow"><img src="./images/icons/Icon ionic-ios-arrow-back.svg" alt="Previous"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"><img src="./images/icons/Icon ionic-ios-arrow-Right.svg" alt="Next"></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});
function showMenu(){
    $("header .mobile-menu").toggleClass("active")
}