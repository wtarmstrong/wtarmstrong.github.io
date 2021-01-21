/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 18: The French Revolution and Napoleon";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 18: Europe in the Age of Napoleon";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1117, 825];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 334,  431,  374,  468",
  /* B */ "  98,  685,  136,  732",
  /* C */ " 750,  364,  802,  397",
  /* D */ " 476,  503,  523,  539",
  /* E */ " 260,  392,  293,  437",
  /* F */ " 548,  498,  580,  536",
  /* G */ " 254,  353,  291,  385",
  /* H */ " 269,  471,  320,  514",
  /* I */ " 784,  404,  810,  441",
  /* J */ " 249,  546,  279,  589"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Paris",
  /* 2. */  "Vienna",
  /* 3. */  "Russia",
  /* 4. */  "London",
  /* 5. */  "Moscow",
  /* 6. */  "Cape Trafalgar, site of Britain's great naval victory over the French",
  /* 7. */  "Austria, ruled by the Hapsburg family",
  /* 8. */  "France, nation ruled by Napoleon",
  /* 9. */  "Waterloo, the battle that ended Napoleon's conquests",
  /* 10. */ "Great Britain, Napoleon's most hallenging enemy"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "H",
  /*  2. */  "D",
  /*  3. */  "I",
  /*  4. */  "E",
  /*  5. */  "C",
  /*  6. */  "B",
  /*  7. */  "F",
  /*  8. */  "J",
  /*  9. */  "A",
  /*  10. */ "G"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a city west of the map's center. It is to the east of E and H.",
  /* B. */ "B is a city near the southwest corner of the map.",
  /* C. */ "C is a city east of the map's center.",
  /* D. */ "D is a city slightly southwest of the map's center.",
  /* E. */ "E is a city west of the map's center. It is northwest of A nd H.",
  /* F. */ "F is a region slightly south of the map's center.",
  /* G. */ "G is a region west and slightly north of the map's center.",
  /* H. */ "H is a city west of the map's center. It is south of E.",
  /* I. */ "I is a large region in the northeast portion of the map.",
  /* J. */ "J is a region west and slightly south of the map's center."];
