$(document).ready(function () {
// Исправление бага в IE на телефонах
// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
// Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style');
        msViewportStyle.appendChild(
            document.createTextNode(
                '@-ms-viewport{width:auto!important}'
            )
        );
        document.head.appendChild(msViewportStyle)
    }


    const headerSearch = $('.header-search'),
        navWrap = $('.nav-wrap'),
        headerSearchNav = 'header-search-nav',
        headerSearchOpened = 'header-search-opened',
        navWrapOpened = 'nav-wrap-opened';

    $('.header-nav-toggle').click(
        function () {
            navWrap.toggleClass(navWrapOpened);
            headerSearch.toggleClass(headerSearchOpened).toggleClass(headerSearchNav);
        });


    $('.icon-search').click(
        function () {
            headerSearch.toggleClass(headerSearchOpened);
        });

    $('.header-cancel').click(
        function () {
            headerSearch.removeClass(headerSearchOpened);
            navWrap.removeClass(navWrapOpened);
            headerSearch.removeClass(headerSearchNav);
        });
});
