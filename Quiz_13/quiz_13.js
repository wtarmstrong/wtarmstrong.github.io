/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 13: The Renaissance and Reformation";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 13: Europe About 1600";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1213, 780];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 583,  418,  631,  449",
  /* B */ " 652,  110,  737,  181",
  /* C */ " 516,  486,  589,  524",
  /* D */ " 673,  603,  725,  635",
  /* E */ " 451,  219,  487,  257",
  /* F */ " 680,  360,  722,  403",
  /* G */ " 465,  315,  498,  349",
  /* H */ " 603,  357,  651,  390",
  /* I */ " 640,  479,  674,  531",
  /* J */ " 378,  608,  407,  652"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Rome",
  /* 2. */  "Spain",
  /* 3. */  "England",
  /* 4. */  "Scotland",
  /* 5. */  "Norway and Sweden",
  /* 6. */  "Geneva, from where reformer John Calvin led the Protestant community",
  /* 7. */  "Munster, where radical Anabaptists seized control",
  /* 8. */  "Wittenberg, where the Reformation began with Martin Luther",
  /* 9. */  "Trent, where traditional Catholic beliefs were reaffirmed",
  /* 10. */ "Worms, where Catholic leaders confronted Luther"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "D",
  /*  2. */  "J",
  /*  3. */  "G",
  /*  4. */  "E",
  /*  5. */  "B",
  /*  6. */  "C",
  /*  7. */  "H",
  /*  8. */  "F",
  /*  9. */  "I",
  /*  10. */ "A"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a city near the center of the map. It is south of city H, and it is north of cities C and I.",
  /* B. */ "B is a large region in the northeastern portion of the map.",
  /* C. */ "C is a city slightly south of the center of the map. It is south of city A, and it is west of city I.",
  /* D. */ "D is a city in the middle of the southern portion of the map. It is south of city I.",
  /* E. */ "E is a small region in the northwest portion of the map.",
  /* F. */ "F is a city slightly east of the center of the map. It is east of city H.",
  /* G. */ "G is a region slightly northwest of the map's center.",
  /* H. */ "H is a city near the map's center. It is north of city A, and west of city F.",
  /* I. */ "I is a city slightly south of the map's center. It is southeast of city A, and it is east of city C.",
  /* J. */ "J is a region in the southwest portion of the map."];
