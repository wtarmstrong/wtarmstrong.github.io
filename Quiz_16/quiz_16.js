/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 16: The Age of Absolutism";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 16: Europe Following the Thirty Years' War";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1383, 890];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 744,  200,  785,  243",
  /* B */ " 552,  444,  593,  485",
  /* C */ " 909,  230,  953,  281",
  /* D */ " 416,  455,  452,  509",
  /* E */ "1113,   45, 1152,  101",
  /* F */ " 365,  243,  398,  290",
  /* G */ " 254,  659,  306,  713",
  /* H */ " 840,  519,  887,  569",
  /* I */ " 660,   83,  701,  126",
  /* J */ " 710,  356,  753,  408"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Poland",
  /* 2. */  "Spain",
  /* 3. */  "the Ottoman empire",
  /* 4. */  "Russia",
  /* 5. */  "Prussia",
  /* 6. */  "Austria, whose rulers kept the title Holy Roman Emperor",
  /* 7. */  "Sweden, one of the Protestant powers of Europe",
  /* 8. */  "France, which gained territory following the war",
  /* 9. */  "the Swiss Federation, which won recognition as an independent state at the peace talks",
  /* 10. */ "England, which avoided fighting in the Thirty Years' War"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "C",
  /*  2. */  "G",
  /*  3. */  "H",
  /*  4. */  "E",
  /*  5. */  "A",
  /*  6. */  "J",
  /*  7. */  "I",
  /*  8. */  "D",
  /*  9. */  "B",
  /*  10. */ "F"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a collection of smaller regions in the northern portion of the map.",
  /* B. */ "B is a small region just west of the map's center.",
  /* C. */ "C is a large region in the northeast portion of the map.",
  /* D. */ "D is a region west of the map's center.",
  /* E. */ "E is a large region in the northeast corner of the map.",
  /* F. */ "F is an island region in the northwest portion of the map.",
  /* G. */ "G is a large region in the southwest portion of the map.",
  /* H. */ "H is a large region the is mostly in the southeast region, but it also spans to the southwest area.",
  /* I. */ "I is a region in the middle of the northern edge of the map.",
  /* J. */ "J is a region at the map's center."];
