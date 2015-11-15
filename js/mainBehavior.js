/**Hampshire website colors:
 * #F7B245 -> #BC2CE5
 * #BC2CE5 -> #63E1E1
 * #63E1E1 -> #E0EC5B
 * 
 * Typing animation code taken from: http://codepen.io/stathisg/pen/Bkvhg
 */

// Vars for typing effect 
var captionLength = 0;
var caption = '';
var possibleCaptions = [
	"To hack is not enough",
	"Interdisciplinary Hackathon",
	"Sprint 2016"
];
var currentCaptionIndex = 0;

// How long the transition from color to color should take
var colorStageInterval = 3500;

$( document ).ready(function() {
    // Changing background color
	setInterval ('cycleBGcolor()', 0);
	
	// Typing effect
    setInterval ('cursorAnimation()', 600);
    captionEl = $('#caption');
    
    setInterval ('cycleTypeCaption()', 5000);
});

// Functions for typing effect
function cycleTypeCaption() {
	runTypingEffect();
	setTimeout(cycleEraseCaption, 3000);
}
function cycleEraseCaption() {
	runErasingEffect();
}

function runTypingEffect() {
	currentCaptionIndex = (currentCaptionIndex + 1) % 3
	caption = possibleCaptions[currentCaptionIndex];
    type();
}

function type() {
    captionEl.html(possibleCaptions[currentCaptionIndex].substr(0, captionLength++));
    if(captionLength < caption.length+1) {
        setTimeout('type()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }
}

function runErasingEffect() {
    caption = captionEl.html();
    captionLength = caption.length;
    if (captionLength>0) {
        erase();
    } else {
        $('#caption').html("You didn't write anything to erase, but that's ok!");
        setTimeout('runErasingEffect()', 1000);
    }
}

function erase() {
    captionEl.html(caption.substr(0, captionLength--));
    if(captionLength >= 0) {
        setTimeout('erase()', 50);
    } else {
        captionLength = 0;
        caption = '';
    }	
}

function cursorAnimation() {
    $('#cursor').animate({
        opacity: 0
    }, 'fast', 'swing').animate({
        opacity: 1
    }, 'fast', 'swing');
}


// Function for color changing
function cycleBGcolor() {
	$("#bg").animate({
		backgroundColor: "#BC2CE5"
	}, colorStageInterval ).animate({
		backgroundColor: "#63E1E1"
	}, colorStageInterval ).animate({
		backgroundColor: "#E0EC5B"
	}, colorStageInterval ).animate({
		backgroundColor: "#F7B245"
	}, colorStageInterval );
}
