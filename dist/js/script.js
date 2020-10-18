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
})