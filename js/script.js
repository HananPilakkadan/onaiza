$(document).ready(function () {
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
                breakpoint: 641,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    window.onscroll = function () {
        headerFunction();
    };
    var body = document.body;
    var sticky = body.offsetTop;

    function headerFunction() {
        if (window.pageYOffset > 100) {
            body.classList.add("sticky");
        } else {
            body.classList.remove("sticky");
        }
    }
    
});
function showMenu() {
    $("body").toggleClass("active")
}
function showOption() {
    $(".category .content").toggleClass("active")
}
function dropDown() {
    $(".dropdown-content").toggleClass("show");
}
