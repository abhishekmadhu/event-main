/*   Header Image changer   */

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

/****************************************************************************/

function displayNextPhoto(){
	y = (y === photos.length - 1) ? 0 : y + 1;
	document.getElementById("image-to-be-changed").src = photos[x];
}

function displayPreviousPhoto() {
	// body...
	y = (y <= 0) ? photos.length - 1 : y - 1;
	document.getElementById("image-to-be-changed").src = photos[x];
}

var photos = [], y = -1;
photos[0] = "image1.jpg";
photos[1] = "image2.jpg";
photos[2] = "image3.jpg";

$(document).ready(function() {
    $("#right-arrow-two").click(function() {
        alert("button is clicked");
        displayNextPhoto();
    });
});

