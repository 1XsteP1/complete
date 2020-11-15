window.addEventListener('DOMContentLoaded', () => {
    const engBtn = document.getElementsByClassName('header__eng');
    const isEngClicked = false

    engBtn[0].addEventListener('click', (elem) => {
        if (isEngClicked) {
            console.log('pressen ru');
        } else {
            window.location.href = 'eng.html';
            isRuClicked = true;
            isEngClicked = false;
        }
    })

    //slider

    const sliderArrowLeft = document.querySelector(".slider__arrow_left"),
          sliderArrowRight = document.querySelector(".slider__arrow_right"),
          sliderContent = document.querySelectorAll('.slider__content'),
          sliderDots = document.querySelectorAll(".slider__dote");

    let count = 1;

    sliderArrowLeft.addEventListener('click', previousSlide);
    sliderArrowRight.addEventListener('click', nextSlide)

    function nextSlide() {
        showSlides(count += 1);
    }
    
    /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    function previousSlide() {
        showSlides(count -= 1);  
    }
    
    /* Устанавливаем текущий слайд: */
    function currentSlide(n) {
        showSlides(count = n);
    }
    
    function showSlides(n) {
        /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
        let slides = sliderContent
        let dots = sliderDots
        
        /* Проверяем количество слайдов: */
        if (n > slides.length) {
          count = 1
        }
        if (n < 1) {
            count = slides.length
        }
      
        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
            slide.style.display = "none";
        }

        for(let dote of dots){
            dote.style.background = "url(icons/slider_dote_disabled.svg) no-repeat"
        }

        dots[count - 1].style.background = "url(icons/slider_dote_active.svg) no-repeat"
        slides[count - 1].style.display = "block";
    }

    showSlides(count);

    //validate form

    const formBtn = document.querySelector(".form__submit"),
          form = document.querySelector(".form");
          inputs = document.querySelectorAll(".form__input")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Форма отправлена!!!");
        inputs.forEach(elem => {
            elem.value = '';
        });
    });
})