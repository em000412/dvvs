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

document.addEventListener('DOMContentLoaded', function() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const controlButtons = document.querySelectorAll('.fixed-slider-controls button');
    const slideCount = sliderItems.length;
    let currentIndex = 0;
    let isAnimating = false;

    function showSlide(index, animated = true) {
        if (isAnimating) return;
        isAnimating = animated;

        sliderItems.forEach(item => item.classList.remove('active'));
        sliderItems[index].classList.add('active');

        const offset = -index * 100;
        sliderWrapper.style.transition = animated ? 'transform 0.5s ease-in-out' : 'none';
        sliderWrapper.style.transform = `translateX(${offset}%)`;

        setTimeout(() => {
            isAnimating = false;
            sliderWrapper.style.transition = 'transform 0.5s ease-in-out'; // Возвращаем transition
        }, animated ? 500 : 0);

        controlButtons.forEach((button, i) => button.classList.remove('active'));
        controlButtons[index].classList.add('active');
    }

    function goToNext() {
        if (isAnimating) return;
        let nextIndex = currentIndex + 1;
        if (nextIndex >= slideCount) {
            nextIndex = 0; // Переключаемся на первый слайд
        }
        showSlide(nextIndex);
        currentIndex = nextIndex;
    }

    function goToPrev() {
        if (isAnimating) return;
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = slideCount - 1; // Зацикливаем назад
        }
        showSlide(prevIndex);
        currentIndex = prevIndex;
    }
    function goToSlide(index) {
        if (isAnimating) return;
        showSlide(index);
        currentIndex = index;
    }
    nextButton.addEventListener('click', goToNext);
    prevButton.addEventListener('click', goToPrev);

    controlButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const slideIndex = parseInt(button.dataset.slide);
            goToSlide(slideIndex);
        });
    });

    showSlide(currentIndex, false); // Инициализация без анимации
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.event-item-slide');
    const prevButton = document.querySelector('.events-button-prev');
    const nextButton = document.querySelector('.events-button-next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide) => {
            slide.classList.remove('active'); // Убираем класс active у всех слайдов
            slide.style.display = 'none'; // Скрываем все слайды
        });
        slides[index].classList.add('active'); // Добавляем класс active к текущему слайду
        slides[index].style.display = 'flex'; // ВАЖНО! Показываем текущий слайд как flex
    }
    

    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length; // Циклический переход
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1); // Переход к следующему слайду
    });

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1); // Переход к предыдущему слайду
    });

    // Инициализация первого слайда
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.action-item-slide');
    const prevButton = document.querySelector('.actions-button-prev');
    const nextButton = document.querySelector('.actions-button-next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'flex'; // или 'block', если нужно
            } else {
                slide.style.display = 'none';
            }
        });
    }

    function goToSlide(index) {
        currentIndex = (index + slides.length) % slides.length; // чтобы по кругу листать
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });

    // Показать первый слайд при загрузке
    showSlide(currentIndex);
});




document.addEventListener('DOMContentLoaded', function () {
    const sliderContainer = document.querySelector('.main-mini-slider__slide-container');
    const slides = document.querySelectorAll('.main-mini-slider__slide');
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    const pagination = document.querySelector('.slider-pagination');
    const bullets = document.querySelectorAll('.pagination-bullet');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        bullets.forEach(bullet => bullet.classList.remove('active'));

        slides[index].classList.add('active');
        bullets[index].classList.add('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    pagination.addEventListener('click', (event) => {
        if (event.target.classList.contains('pagination-bullet')) {
            const slideIndex = parseInt(event.target.dataset.slide);
            goToSlide(slideIndex);
        }
    });

    // Инициализация слайдера
    showSlide(currentIndex);
});