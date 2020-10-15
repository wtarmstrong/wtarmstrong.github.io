class Location {
	constructor (letter, imgSrc, imgAlt) {
		this.letter = letter;
		this.imgSrc = imgSrc;
		this.imgAlt = imgAlt;
		this.description = "";
		this.isSelected = false;
	}
}

// Use with "var locArray = prepLocArray();" to create array of Location objects
function prepLocArray () {
	var locationArray = [];
	var letters = "ABCDEFGHIJ";
	for (var i = 0; i < letters.length; i++) {
		var currentLetter = letters.charAt(i);
		locationArray.push(new Location(currentLetter,
			"./Images/" + currentLetter + " Selected.png",
			"Location " + currentLetter + " Selected"));
	}
	return locationArray;
}

class Question {
	constructor (number) {
		this.number = number;
		this.qId = "q" + (this.number + 1);
		this.qNumId = this.qId + " num";
		this.qAnsId = this.qId + " answer";
		this.qGradeId = this.qId + " grade";
		this.answer;
		this.quizText = "";
		this.pairedLocation;
	}
}

// Returns an array of 10 Question objects
function prepQArray () {
	var qArray = [];
	for (var i = 0; i < 10; i++) {
		qArray.push(new Question(i));
	}
	return qArray;
}