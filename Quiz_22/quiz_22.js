/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 22: Nationalism Triumphs in Europe";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 22: Important Locations in the Balkans, Late 1800s";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1204, 910];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 771,  233,  809,  270",
  /* B */ " 542,  806,  585,  846",
  /* C */ "1019,  214, 1061,  256",
  /* D */ " 471,  320,  505,  358",
  /* E */ " 935,  508,  981,  545",
  /* F */ " 300,  292,  331,  333",
  /* G */ " 927,   43,  963,   80",
  /* H */ " 742,  352,  778,  389",
  /* I */ " 459,  127,  491,  165",
  /* J */ " 356,  404,  390,  449"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Bulgaria",
  /* 2. */  "Russia",
  /* 3. */  "Bosnia-Herzegovina",
  /* 4. */  "Montenegro",
  /* 5. */  "Romania",
  /* 6. */  "The Crimean peninsula juts into this body of water.",
  /* 7. */  "This nation won autonomy from Ottoman rule in 1830.",
  /* 8. */  "This city was the capital of the Ottoman empire.",
  /* 9. */  "This empire controlled much of the Balkans.",
  /* 10. */ "The southern part of this nation gained independence during the 1830s."];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "H",
  /*  2. */  "G",
  /*  3. */  "F",
  /*  4. */  "J",
  /*  5. */  "A",
  /*  6. */  "C",
  /*  7. */  "D",
  /*  8. */  "E",
  /*  9. */  "I",
  /*  10. */ "B"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a region that is northeast of the map's center. It is surrounded by locations C, D, G, H, and I.",
  /* B. */ "B is a small region south of the map's center.",
  /* C. */ "C is a body of water that is northeast of the map's center.",
  /* D. */ "D is a region that is northwest of the map's center. It is surrounded by locations A, F, H, I, and J.",
  /* E. */ "E is a city that is east of the map's center.",
  /* F. */ "F is a region that is west of the map's center. It is south of region I and west of regions D and J.",
  /* G. */ "G is a region that is northeast of the map's center. It is northeast of locations A and C.",
  /* H. */ "H is a region that is mostly northeast of the map's center. It is south of region A.",
  /* I. */ "I is a large region that take up most of the land northwest of the map's center.",
  /* J. */ "J is a small region west of the map's center. It is southeast of region F."];
