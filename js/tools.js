// Switches the text of an html div
var TextSwitcher = function (divId, listOfText) {
	this.divId = divId;
	this.listOfText = listOfText;
	this.currentIndex = 0;
	this.setText();
};

TextSwitcher.prototype.setText = function (index) {
	this.currentIndex = index;
	document.getElementById (this.divId).innerHTML = this.listOfText[this.currentIndex];
}


// Cycles through the text on a timed function
TextSwitcher.prototype.timedTextSwitch = function (frequency) {
	// TODO: fill in this text using a timed repeating JS call
}