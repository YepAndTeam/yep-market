document.addEventListener('scroll', function() {
    const aboutSection = document.querySelector('.about-us');
    const position = aboutSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Проверка, если секция "О нас" на экране
    if (position < windowHeight - 100) {
        document.querySelector('.info-box').classList.add('visible');
        document.querySelector('.projects-box').classList.add('visible');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0; // Индекс текущего слайда
    const totalSlides = 4; // Общее количество слайдов
    const sliderTrack = document.querySelector('.slider-track'); // Элемент слайдера

    // Функция для отображения текущего слайда
    function showSlide(index) {
        const offset = -index * 500; // Сдвиг слайда в пикселях (500 - ширина каждого слайда)
        sliderTrack.style.transform = `translateX(${offset}px)`; // Применяем сдвиг
    }

    // Функция для перехода на предыдущий слайд
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides; // Циклический переход на предыдущий слайд
        showSlide(currentSlide); // Отображаем слайд
    }

    // Функция для перехода на следующий слайд
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides; // Циклический переход на следующий слайд
        showSlide(currentSlide); // Отображаем слайд
    }

    // Добавляем обработчики событий для кнопок навигации
    document.querySelector('.slider-btn-prev').addEventListener('click', prevSlide);
    document.querySelector('.slider-btn-next').addEventListener('click', nextSlide);

    // Начальный показ слайда
    showSlide(currentSlide);
});
