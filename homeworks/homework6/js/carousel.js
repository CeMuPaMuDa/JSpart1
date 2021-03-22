var sliders = document.querySelector(".slider");

for (i = 1; i <= 5; i++) {
    var image = document.createElement("img");
    image.src = "img/Slide" + i + ".jpg";
    image.alt = "slide" + i;
    sliders.appendChild(image);
}