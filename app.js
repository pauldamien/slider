
const slides = [...document.querySelectorAll(".slide")]
//declaration of const
const sliderData = {

    direction: 0,
    slideOutIndex: 0,
    slideInIndex: 0
}

const directionButtons = [...document.querySelectorAll(".direction-btn")];

directionButtons.forEach(btn => btn.addEventListener("click", handleClick))


//gestion des verrouillages et animations

function handleClick(e) {
    getDirection(e.target)
}

function getDirection(btn) {
    sliderData.direction = btn.className.includes("right") ? 1 : -1


    sliderData.slideInIndex = slides.findIndex(slide => slide.classList.contains("active"))


    if (sliderData.slideOutIndex + sliderData.direction >
        slides.length - 1) {
        sliderData.slideInIndex = 0;
    }

    else if (sliderData.slideOutIndex + sliderData.direction < 0) {
        sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
    }

    else {
        sliderData.slideInIndex = sliderData.slideOutIndex + sliderData.direction;
    }
}
