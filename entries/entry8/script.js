function changeStyle() {
    const element = document.querySelector('.floattxt');
    element.classList.toggle('alternate-style');
}

setInterval(changeStyle, 3000);
