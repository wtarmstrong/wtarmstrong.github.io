/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 12: The Spread of Civilization in East and Southeast Asia";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 12: Empires and Kingdoms of Southeast Asia";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1213, 901];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 639,  440,  668,  470",
  /* B */ " 481,  196,  520,  234",
  /* C */ " 875,   90,  900,  119",
  /* D */ " 900,  650,  930,  687",
  /* E */ " 675,  360,  714,  401",
  /* F */ " 639,  669,  665,  701",
  /* G */ " 700,  745,  732,  782",
  /* H */ " 577,  550,  610,  586",
  /* I */ " 758,  810,  781,  840",
  /* J */ " 150,  215,  183,  258"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Pagan [Note: Other sources have this location listed as Bagan.]",
  /* 2. */  "Java",
  /* 3. */  "the Sunda Strait",
  /* 4. */  "the Gulf of Thailand",
  /* 5. */  "Borneo",
  /* 6. */  "India, the region's most influential culture",
  /* 7. */  "Angkor Wat, site of a magnificent Khmer temple",
  /* 8. */  "the Strait of Malacca, through which much trade had to pass",
  /* 9. */  "Sumatra, to which Islam eventually spread",
  /* 10. */ "China, which strongly influenced Vietnam"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /* 1. */  "B",
  /* 2. */  "I",
  /* 3. */  "G",
  /* 4. */  "A",
  /* 5. */  "D",
  /* 6. */  "J",
  /* 7. */  "E",
  /* 8. */  "H",
  /* 9. */  "F",
  /* 10. */ "C"];

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a body of water near the center of the map.",
  /* B. */ "B is a city slightly north of the map's center.",
  /* C. */ "C is a large region in the northeast portion of the map.",
  /* D. */ "D is an island in the southeast portion of the map.",
  /* E. */ "E is a city slightly east of the map's center.",
  /* F. */ "F is an island directly south of the map's center.",
  /* G. */ "G is an area of water in the southern portion of the map between the islands F and I.",
  /* H. */ "H is an area of water south of the map's center passing between the island F and the landmass just north of F.",
  /* I. */ "I is a smaller island to the south and slight east of the map's center.",
  /* J. */ "J is a large region in the northwest portion of the map."];
