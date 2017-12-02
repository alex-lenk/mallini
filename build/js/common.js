$(document).ready(function () {

// Исправление бага в IE на телефонах - copyright 2014-2017 The Bootstrap Authors

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }

    /* END */


    /* BEGIN .header-search and .nav-wrap */

    const headerSearch = $('.header-search'),
        navWrap = $('.nav-wrap'),
        headerSearchNav = 'header-search-nav',
        headerSearchOpened = 'header-search-opened',
        navWrapOpened = 'nav-wrap-opened';

    $('.header-nav-toggle').click(
        function () {
            navWrap.toggleClass(navWrapOpened);
            headerSearch.toggleClass(headerSearchOpened).toggleClass(headerSearchNav);
        }
    );

    $('.icon-search').click(
        function () {
            headerSearch.toggleClass(headerSearchOpened);
        }
    );

    $('.header-cancel').click(
        function () {
            headerSearch.removeClass(headerSearchOpened);
            navWrap.removeClass(navWrapOpened);
            headerSearch.removeClass(headerSearchNav);
        }
    );

    /* END .header-search and .nav-wrap */


    /* BEGIN header-modal-bag */

    const headerModalBag = $('.header-modal-bag'),
        headerBagOpen = 'modal-bag-open';

    $('.header-modal-bag-close').click(
        function () {
            headerModalBag.removeClass(headerBagOpen);
        }
    );

    $('.header-basket').click(
        function () {
            headerModalBag.toggleClass(headerBagOpen);
        }
    );

    /* END header-modal-bag */


    /* BEGIN header-modal-wishlist */

    const headerModalWishlist = $('.header-modal-wishlist'),
        headerBagWishlist = 'modal-wishlist-open';

    $('.header-modal-wishlist-close').click(
        function () {
            headerModalWishlist.removeClass(headerBagWishlist);
        }
    );

    $('.header-wishlist').click(
        function () {
            headerModalWishlist.toggleClass(headerBagWishlist);
        }
    );

    /* END header-modal-wishlist */


    /* BEGIN header-catalog */

    const headerCatalog = $('.header-catalog'),
        headerCatalogOpen = 'header-catalog-open';

    $('.header-catalog-close').click(
        function () {
            headerCatalog.removeClass(headerCatalogOpen);
        }
    );

    $('.menu-catalog').click(
        function () {
            headerCatalog.toggleClass(headerCatalogOpen);
        }
    );

    /* END header-catalog */


    /* BEGIN home-sales */

    const salesControlLeft = $('.sales-control-left'),
        salesLeft = $('.sales-left'),
        salesRight = $('.sales-right'),
        salesControlRight = $('.sales-control-right'),
        salesActive = 'sales-active',
        salesControlCurrent = 'sales-control-current';

    salesControlLeft.click(
        function () {
            $(this).toggleClass(salesControlCurrent);
            salesControlRight.toggleClass(salesControlCurrent);
            salesLeft.addClass(salesActive);
            salesRight.removeClass(salesActive);
        }
    );

    salesControlRight.click(
        function () {
            $(this).toggleClass(salesControlCurrent);
            $(salesControlLeft).toggleClass(salesControlCurrent);
            salesRight.addClass(salesActive);
            salesLeft.removeClass(salesActive);
        }
    );

    /* END home-sales */


    /* Begin Swiper slider .popular-items-slider */

    var popularItems = new Swiper('.popular-items-slider', {
        navigation: {
            nextEl: '.popular-items-next',
            prevEl: '.popular-items-prev'
        },
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
    });

    /* END Swiper slider .popular-items-slider */



    /* Begin animate scroll elements */

    $(function(){
        $('.header-down').on('click', function(e){
            $('html,body').stop().animate({ scrollTop: $('#home-popular').offset().top }, 1000);
            e.preventDefault();
        });
    });

    /* END animate scroll elements */

});