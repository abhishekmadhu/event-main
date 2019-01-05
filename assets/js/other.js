/*	header bg changer	*/
function displayNextBgImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementByClassName("scroll-image-gallery").src = imagesTwo[x];
}

function displayPreviousBgImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementByClassName("scroll-image-gallery").src = imagesTwo[x];
}

function startBgTimer() {
    setInterval(displayNextImage, 5000);
}

var imagesTwo = [], x = -1;
imagesTwo[0] = "image1.jpg";
imagesTwo[1] = "image2.jpg";
imagesTwo[2] = "image3.jpg";

/*   Actual Image changer   */

function displayNextImage() {
    x = (x === images.length - 1) ? 0 : x + 1;
    document.getElementById("site-header").style.backgroundImage = images[x];
}

function displayPreviousImage() {
    x = (x <= 0) ? images.length - 1 : x - 1;
    document.getElementById("site-header").style.backgroundImage = images[x];
}

function startTimer() {
    setInterval(displayNextImage, 5000);
}

var images = [], x = -1;
images[0] = "url(image1.jpg)";
images[1] = "url(image2.jpg)";
images[2] = "url(image3.jpg)";