window.addEventListener('DOMContentLoaded', () => {
    const ruBtn = document.getElementsByClassName('header__ru_eng');
    const isRuClicked = false

    ruBtn[0].addEventListener('click', (elem) => {
        if (isRuClicked) {
            console.log('pressen ru')
        } else {
            window.location.href = 'index.html';
            isRuClicked = true;
            isEngClicked = false;
        }
    })

    const sliderArrowLeft = document.querySelector(".slider__arrow_left"),
          sliderArrowRight = document.querySelector(".slider__arrow_right"),
          sliderContent = document.querySelectorAll('.slider__content'),
          sliderDots = document.querySelectorAll(".slider__dote");

    let count = 1;

    console.log(sliderDots);

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


    const formBtn = document.querySelector(".form__submit"),
          form = document.querySelector(".form");
          inputs = document.querySelectorAll(".form__input")

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Form sent!!!");
        inputs.forEach(elem => {
            elem.value = '';
        });
    });
})