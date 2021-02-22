$(document).ready(function() {

    // Меню адаптив ----------------
    $(".menu-triger").click(function() {
        $(".main-menu").slideToggle(200);
    });
    // Каталог адаптив ----------------
    $(".main-menu .close").click(function() {
        $(".main-menu").slideToggle(200);
    });
    $('.tabs').tabs();
    // Главный банер ----------------
    $('.slider').carousel({
        indicators: true,
        //dist:0,
        numVisible: 1,
        fullWidth: true,
        shift: 0,
        padding: 50

    });
    $('.moveNextCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.slider').carousel('next');
    });
    $('.movePrevCarousel').click(function(e) {
        e.preventDefault();
        e.stopPropagation();
        $('.slider').carousel('prev');
    });

    // Стилизация форм ----------------
    $('select').formSelect();
    $('.dropdown-trigger').dropdown();
    // Модальные окна ----------------
    $('.modal').modal();
    $('.pre-tabs').tabs();


    // Аккордион в карточке----------------
    $('.expand').collapsible({
        accordion: false
    });
    $('.collapsible').collapsible();
    $('.filtracc').collapsible({
        accordion: false
    });

    // Карусель товаров ----------------

    var carousel4 = $(".slider-item4");
    carousel4.owlCarousel({
        itemsDesktop: 4,
        itemsDesktop: [1920, 4],
        itemsDesktopSmall: [1400, 4],
        itemsMobile: [420, 1]
    });

    //------------------------------------------
    var carousel3 = $(".slider-item3");
    carousel3.owlCarousel({
        itemsDesktop: 3,
        itemsDesktop: [1920, 3],
        itemsDesktopSmall: [1400, 3],
        itemsTablet: false,
        itemsMobile: [420, 1]
    });

    var carousel3 = $(".brands");
    carousel3.owlCarousel({
        itemsDesktop: 4,
        itemsDesktop: [1900, 4],
        itemsDesktopSmall: [1000, 3],
        itemsTablet: false,
        itemsMobile: [375, 1]
    });

});