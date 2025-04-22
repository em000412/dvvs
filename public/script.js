document.addEventListener('DOMContentLoaded', function() {
    const searchIconButton = document.querySelector('.header-container__controls .search-icon-button');
    const searchFormMobile = document.querySelector('.header-container__controls .header-container__search__form');
    const searchSubmitButton = document.querySelector('.header-container__search__form .header-container__search__submit');
    const menuIconButton = document.querySelector('.header-container__controls .menu-icon-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuCloseButton = document.querySelector('.mobile-menu__close-button'); // Получаем кнопку закрытия

    if (searchIconButton && searchFormMobile && searchSubmitButton) {
        searchIconButton.addEventListener('click', function() {
            searchFormMobile.classList.add('active');
            searchIconButton.classList.add('active');
        });

        searchSubmitButton.addEventListener('click', function(event) {
            event.preventDefault();
            searchFormMobile.classList.remove('active');
            searchIconButton.classList.remove('active');
        });

        document.addEventListener('click', function(event) {
            const mobileSearchWrapper = document.querySelector('.mobile-search-wrapper');
            if (!searchFormMobile.contains(event.target) && !searchIconButton.contains(event.target) && !mobileSearchWrapper.contains(event.target) && searchFormMobile.classList.contains('active')) {
                searchFormMobile.classList.remove('active');
                searchIconButton.classList.remove('active');
            }
        });
    }

    // JavaScript для кнопки открытия меню
    if (menuIconButton && mobileMenu) {
        menuIconButton.addEventListener('click', function() {
            mobileMenu.classList.add('open'); // Открываем меню, добавляя класс 'open'
        });
    }

    // JavaScript для кнопки закрытия меню
    if (mobileMenuCloseButton && mobileMenu) {
        mobileMenuCloseButton.addEventListener('click', function() {
            mobileMenu.classList.remove('open'); // Закрываем меню, удаляя класс 'open'
        });
    }
});