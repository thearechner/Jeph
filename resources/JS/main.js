// Nav menu
	// Open when someone clicks on the span element
	function openNav() {
  	document.getElementById("nav").style.height = "100%";
	}

	// Close when someone clicks on the "x" symbol inside the overlay
	function closeNav() {
  	document.getElementById("nav").style.height = "0%";
	}

$(document).ready(function(){

// Background gradient and image
  // Init ScrollMagic
	var controller = new ScrollMagic.Controller();

  // Scene for background color
  var bgColorScene = new ScrollMagic.Scene({
    triggerElement: 'body .trigger-image',
    // duration: '300%',
    triggerHook: 0
  })
  .setClassToggle('body', 'changeColor') // add class changeColor to body element

  // .addIndicators({
  //   name: 'change color'
  // }) // adds debug info
  .addTo(controller);

  // Scene for pinning the background image
  var pinBackgroundImage = new ScrollMagic.Scene({
    triggerElement: 'body .trigger-image',
    duration: '100%',
    triggerHook: 0.9
  })
  .setClassToggle('.background-image', 'changeImage')
  .setPin('.background-image .changeImage')
  // .addIndicators({
  //   name: 'pin image'
  // }) // adds debug info
  .addTo(controller);

});
