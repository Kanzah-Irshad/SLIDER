
var images = [
    "asset/images/pic 4.gif",
    "asset/images/pic 2.gif", 
    "asset/images/pic 1.gif",
    "asset/images/pic 5.gif",
    "asset/images/pic 3.gif"
];

var currentIndex = 0;

function next() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function prev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function selectImage(index) {
    currentIndex = index;
    updateImage();
}

function updateImage() {
    var sliderImg = document.getElementById("slider-img");
    sliderImg.src = images[currentIndex];

    for (var i = 0; i < images.length; i++) {
        var thumbnailImg = document.querySelector(".thumbnail:nth-child(" + (i + 1) + ") img");
        thumbnailImg.style.border = i === currentIndex ? "2px solid red" : "2px solid transparent";
    }
}