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
    sliderArrowRight.addEventListener('click', nextSlide);
    sliderDots.forEach((e, i) => {
        e.addEventListener('click', () => {
            showSlides(count = i+1);
        })
    });

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

    $("a[href^='#']").click(function(){
        let _href = $(this).attr('href');
        $('html, body').animate({scrollTop: $(_href).offset().top+'px'});
        return false;
    })

    const questG = document.querySelector('.visual__table-questiong'),
          questA = document.querySelector('.visual__table-questiona'),
          questS = document.querySelector('.visual__table-questions'),
          questM = document.querySelector('.visual__table-questionm'),
          questB = document.querySelector('.visual__table-questionb'),
          questD = document.querySelector('.visual__table-questiond');
    
    const txtA = document.querySelector('.visual__table-txta'),
          txtG = document.querySelector('.visual__table-txtg'),
          txtS = document.querySelector('.visual__table-txts'),
          txtM = document.querySelector('.visual__table-txtm'),
          txtB = document.querySelector('.visual__table-txtb'),
          txtD = document.querySelector('.visual__table-txtd');

    questA.addEventListener('mouseover', () => {
        txtA.style.display = 'block';
    })
    questA.addEventListener('mouseout', () => {
        txtA.style.display = 'none';
    })
    questG.addEventListener('mouseover', () => {
        txtG.style.display = 'block';
    })
    questG.addEventListener('mouseout', () => {
        txtG.style.display = 'none';
    })
    questS.addEventListener('mouseover', () => {
        txtS.style.display = 'block';
    })
    questS.addEventListener('mouseout', () => {
        txtS.style.display = 'none';
    })
    questM.addEventListener('mouseover', () => {
        txtM.style.display = 'block';
    })
    questM.addEventListener('mouseout', () => {
        txtM.style.display = 'none';
    })
    questB.addEventListener('mouseover', () => {
        txtB.style.display = 'block';
    })
    questB.addEventListener('mouseout', () => {
        txtB.style.display = 'none';
    })
    questD.addEventListener('mouseover', () => {
        txtD.style.display = 'block';
    })
    questD.addEventListener('mouseout', () => {
        txtD.style.display = 'none';
    })
    
    const commentsItem = document.querySelectorAll('.comments__item');

    let isCommentFull = false;

    commentsItem.forEach(e => {
        e.addEventListener('click',() => {
            if (isCommentFull){
                for (let block of commentsItem){
                    block.style.display = "block";
                    block.style.width = "555px";
                }
                let commentsBlock = e.childNodes[0];
                commentsBlock.style.padding = "0px"
                commentsBlock.childNodes[0].style.display = "block";
                commentsBlock.childNodes[1].style.display = "block";
                commentsBlock.childNodes[2].style.display = 'none';
                isCommentFull = false;
            } else {
                for (let block of commentsItem){
                    block.style.display = "none";
                }
                e.style.width = "100%";
                e.style.display = "flex";
                let commentsBlock = e.childNodes[0];
                commentsBlock.style.padding = "15px"
                commentsBlock.childNodes[0].style.display = "none";
                commentsBlock.childNodes[1].style.display = "none";
                commentsBlock.childNodes[2].style.display = 'inline';
                isCommentFull = true;
            }
            document.documentElement.scrollTop = 8632;
        })
    })
})
