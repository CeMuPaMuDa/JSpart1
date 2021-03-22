var sliders = document.querySelector(".slider");
var begin = 0;

for (i = 1; i <= 5; i++) {
    var image = document.createElement("img");
    image.src = "img/Slide" + i + ".jpg";
    image.alt = "slide" + i;
    sliders.appendChild(image);
}

var next = document.querySelector("#next-btn");
next.addEventListener("click", function() {
    begin += 1280;
    if (begin > 5120) {
        begin = 0;
    }
    sliders.style.left = -begin + "px";
});

var prev = document.querySelector("#prev-btn");
prev.addEventListener("click", function() {
    begin -= 1280;
    if (begin < 0) {
        begin = 5120;
    }
    sliders.style.left = -begin + "px";
});