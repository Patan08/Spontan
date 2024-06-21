const lukisanSlider = document.querySelector('.lukisan-slider');
const fotografiSlider = document.querySelector('.fotografi-slider');
const prevButtons = document.querySelectorAll('.prev');
const nextButtons = document.querySelectorAll('.next');

function scrollSlider(slider) {
    let scrollAmount = slider.scrollLeft;
    const slideWidth = slider.clientWidth;

    return {
        scrollLeft: scrollAmount,
        slideWidth: slideWidth
    };
}

function moveSlider(button, slider, direction) {
    const { scrollLeft, slideWidth } = scrollSlider(slider);

    if (direction === 'next') {
        slider.scrollTo({
            left: scrollLeft + slideWidth,
            behavior: 'smooth'
        });
    } else {
        slider.scrollTo({
            left: scrollLeft - slideWidth,
            behavior: 'smooth'
        });
    }
}

prevButtons.forEach(button => {
    button.addEventListener('click', function () {
        const slider = button.parentElement.querySelector('.slider');
        moveSlider(button, slider, 'prev');
    });
});

nextButtons.forEach(button => {
    button.addEventListener('click', function () {
        const slider = button.parentElement.querySelector('.slider');
        moveSlider(button, slider, 'next');
    });
});
