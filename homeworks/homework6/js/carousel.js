var sliders = document.querySelector(".slider");
var begin = 0;

for (i = 1; i <= 5; i++) {
    var image = document.createElement("img");
    image.src = "img/Slide" + i + ".jpg";
    image.alt = "slide" + i;
    image.classList.add("slide-picture");
    sliders.appendChild(image);
}
var images = document.querySelectorAll(".slide-picture");

function nextSlide() {
    for (y = 0; y < images.length; y++) {
        images[y].classList.add("hide");
    }
    images[begin].classList.remove("hide");
}
nextSlide();
document.querySelector("#next-btn").onclick = function() {
    if (begin - 1 == -1) {
        begin = images.length - 1;
    } else {
        begin--;
    }
    nextSlide();
};
document.querySelector("#prev-btn").onclick = function() {
    if (begin + 1 == images.length) {
        begin = 0;
    } else {
        begin++;
    }
    nextSlide();
};