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
})