/* Initial changes to HTML; at top for priority loading */

// Changing page title to text in testJS_0.js
document.getElementById("pageTitle").innerHTML = tabTitle;

// Changing h1 element to text in testJS_0.js
document.getElementById("quizName").innerHTML = quizHeader;

// Changing the dimensions of the div that has the map images.
document.getElementById("mapContainer").style.width = imgDimension[0] + "px";
document.getElementById("mapContainer").style.height = imgDimension[1] + "px";

// Creating list for student's answers
for (var i = 0; i < 10; i++) {
  var newQ = document.createElement("li");
  newQ.id = "q" + (i + 1);
  newQ.className = "qList";
  newQ.innerHTML = '<span id = ' + ("q" + (i + 1) + "num") + ' >' + (i + 1) + ". " + '</span>' + 
    ' _<span id = ' + ("q" + (i + 1) + "ans") + '></span>_';
  ansList.appendChild(newQ);
}

/***********
 * Classes *
 ***********/
 
 // These classes are currently only used to store info.

// Class for storing Location information
class Location {
  constructor(letter, description){
    this.letter = letter;
    this.description = description;
    this.imgSrc = this.letter + " Selected.png";
  }
}

// Class for Question information
class Question {
  constructor (number, quizText, answer) {
    this.number = number; // Order in quiz
    this.quizText = quizText; // From quiz
    this.answer = answer; // Letter corresponding to the correct location
  }
}

/*******************************************
 * Variables: Location and Question Arrays *
 *******************************************/

// Location instance will be stored here with 'A' at index 0.
var locArray = [];

// Populating locArray
for (var i = 0; i < lTextArray.length; i++) {
  var newLoc = new Location(String.fromCharCode(65+i), lTextArray[i]);
  locArray.push(newLoc);
}

// Question instances will be stored here with '1' at index 0 (just to make it more confusing for myself)
var qArray = [];

// Populating qArray
for (var i = 0; i < qTextArray.length; i++) {
  var newQue = new Question(i+1, qTextArray[i], qAnsArray[i]);
  qArray.push(newQue);
}

/******************************
 * Variables: Selected values *
 ******************************/

// These values correspond to the indexes of the locArray and qArray; -1 meaning no item is selected.
var selectedLocation = -1;
var selectedQuestion = -1;
 
/*************
 * Functions *
 *************/
 
// Adds/removes "bolded" class to element to apply CSS formatting
function toggleBoldByID (htmlID) {
  if (document.getElementById(htmlID).classList.contains("bolded")) {
    document.getElementById(htmlID).classList.remove("bolded");
  }
  else {
    document.getElementById(htmlID).classList.add("bolded");
  }
}

// Functions: Question Selection //

// Changes selectedQuestion to -1 (no question is selected)
function unSelQue () { selectedQuestion = -1; }

// Update HTML to reflect the text of the selected question
function updateSelQue () {
  if (selectedQuestion == -1) {
    document.getElementById("selQText").innerHTML = "No question is selected";
  }
  else {
    document.getElementById("selQText").innerHTML = qArray[selectedQuestion].number + ". " +qArray[selectedQuestion].quizText;
  }
}

// Changes value of selectedQuestion
function selQue (inputQueIndex) {
  if (selectedQuestion != -1) { toggleBoldByID('q' + (selectedQuestion + 1) + "num"); }
  if (inputQueIndex == selectedQuestion) { unSelQue(); }
  else {
    selectedQuestion = inputQueIndex;
    toggleBoldByID('q' + (selectedQuestion + 1) + "num");
  }
}

// Used when selecting questions via keyDown
// Changes 48,49-57 to 9,0-8 to be used with array indexing
function keySelQue (inputKeyCode) {
  var queIndex = inputKeyCode - 49;
  if (queIndex == -1) { queIndex = 9; }
  selQue(queIndex);
}

// Functions: Location Selection //

// Used to change the image overlaying the base map. This is used to show the highlighted areas of a selected location.
function changeMap (srcText) {
  document.getElementById("selLoc").src = "Images/" + srcText;
}

// Changes selectedLocation to -1 (no location is selected)
function unSelLoc () { selectedLocation = -1; }

// Changes the value of selectedLocation
function selLoc (selLocIndex) {
  if (selLocIndex == selectedLocation) { unSelLoc(); }
  else { selectedLocation = selLocIndex; }
}

// Update HTML to reflect selegctedLocation
function updateSelLoc () {
  if (selectedLocation != -1) {
    changeMap(locArray[selectedLocation].imgSrc);
    document.getElementById("selLText").innerHTML = locArray[selectedLocation].description;
    }
  else {
    changeMap("");
    document.getElementById("selLText").innerHTML = "No location is selected";
   }
}

// Converts keyCode to index for locArray
function keySelLoc (keyCode) {
  selLoc(keyCode - 65);
}

// Functions: Pairing selectedQuestion with selectedLocation
function pairSelected () {
  var ansText = "";
  if (selectedLocation != -1) { ansText = locArray[selectedLocation].letter; }
  document.getElementById("q" + qArray[selectedQuestion].number + "ans").innerHTML = ansText;
}

/**********
 * Events *
 **********/

 // Keyboard events (Enter, a-j, 0-9)
window.addEventListener("keydown", onKeyDown);

// Keydown events
function onKeyDown(event) {
  switch (event.keyCode) {
    case 13: // Enter
      pairSelected();
      break;
    case 48: // 0, but used for Question 10
    case 49: // 1
    case 50: // 2
    case 51: // 3
    case 52: // 4
    case 53: // 5
    case 54: // 6
    case 55: // 7
    case 56: // 8
    case 57: // 9
      keySelQue(event.keyCode);
      updateSelQue();
      break;
    case 65: // a
    case 66: // b
    case 67: // c
    case 68: // d
    case 69: // e
    case 70: // f
    case 71: // g
    case 72: // h
    case 73: // i
    case 74: // j
      keySelLoc(event.keyCode);
      updateSelLoc();
      break;
    default: // Key not specified above
      break;
  }
}

// function for clicking li
function listClick(e) {
  if (e.currentTarget.classList.contains("qList")) {
    selQue(e.currentTarget.id.slice(1) - 1);
    updateSelQue();
  }
}

// Adding click functionality to Question list
for (var i = 0; i < 10; i++) {
  document.getElementById('q' + (i + 1)).addEventListener('click', listClick, false);
}