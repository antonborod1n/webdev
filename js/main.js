$(function(){

    $('.slider__content').slick({
        /* dots: true, */
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/slider-img/arrow-left.svg" alt="Левая"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/slider-img/arrow-right.svg" alt="Правая"></button>',
    
    });

});