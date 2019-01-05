function displayNextPhoto(){
	y = (y === photos.length - 1) ? 0 : y + 1;
	document.getElementById("image-to-be-changed").src = photos[y];
}

function displayPreviousPhoto() {
	// body...
	y = (y <= 0) ? photos.length - 1 : y - 1;
	document.getElementById("image-to-be-changed").src = photos[y];
}

var photos = [], y = -1;
photos[0] = "image3.jpg";
photos[1] = "image4.jpg";
photos[2] = "image6.jpg";
photos[3] = "image7.jpg";
photos[4] = "image8.jpg";

$(document).ready(function(){
	$("#right-arrow-two").click(function() {
		// alert("Clicked");
	    displayNextPhoto();
	});
});
$(document).ready(function(){
	$("#right-arrow-one").click(function() {
	    displayPreviousPhoto();
	});
});

$(document).ready(function(){
	setInterval(displayNextPhoto, 3000);
});

/***************************************************************************/

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
    setInterval(displayNextImage, 7000);
    // setInterval(displayNextPhoto, 3000);
}

var images = [], x = -1;
images[0] = "url(image1.jpg)";
images[1] = "url(image2.jpg)";
images[2] = "url(image3.jpg)";

/****************************************************************************/

