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
photos[0] = "assets/images/ourstory/image10.jpg";
photos[1] = "assets/images/ourstory/image2.jpg";
photos[2] = "assets/images/ourstory/image3.jpg";
photos[3] = "assets/images/ourstory/image4.jpg";
photos[4] = "assets/images/ourstory/image5.png";
photos[5] = "assets/images/ourstory/image6.jpg";
photos[6] = "assets/images/ourstory/image7.jpg";
photos[7] = "assets/images/ourstory/image9.jpg";
photos[8] = "assets/images/ourstory/image1.jpg";


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
/*
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
images[0] = "url(assets/images/backgrounds/header1.png)";
images[1] = "url(assets/images/backgrounds/header2.jpg)";
*/

/****************************************************************************/

/********************************TEST PART***********************************/

// $(document).ready(function () {
//      $('a[href^="#"]').on('click', function (e) {
//          e.preventDefault();

//          var target = this.hash,
//              $target = $(target);

//          $('html, body').stop().animate({
//              'scrollTop': $target.offset().top - 80
//          }, 900, 'swing', function () {
//              // window.location.hash = target;
//          });
//      });
//  });


smoothScroll.init();