/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 23: Growth of Western Democracies";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 23: Expansion of the United States";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1431, 892];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ "1032,  317, 1067,  352",
  /* B */ " 917,  275,  950,  313",
  /* C */ " 698,  299,  732,  340",
  /* D */ " 683,  109,  722,  151",
  /* E */ "1002,  551, 1035,  592",
  /* F */ "1124,   61, 1154,  100",
  /* G */ " 636,  496,  675,  538",
  /* H */ " 341,  125,  377,  160",
  /* I */ " 389,  319,  420,  367",
  /* J */ " 426,  460,  458,  506"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Texas Annexation",
  /* 2. */  "Region disputed with Great Britain until 1842",
  /* 3. */  "Florida Cession",
  /* 4. */  "Area ceded by Great Britain in 1818",
  /* 5. */  "Oregon County",
  /* 6. */  "Louisiana Purchase, which doubled the size of the country",
  /* 7. */  "Mexican Cession, gained after the Mexican War",
  /* 8. */  "United States in 1783, at the end of the American Revolution",
  /* 9. */  "Gadsden Purchase, bought from Mexico in 1853",
  /* 10. */ "Original thirteen colonies in 1776"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "G",
  /*  2. */  "F",
  /*  3. */  "E",
  /*  4. */  "D",
  /*  5. */  "H",
  /*  6. */  "C",
  /*  7. */  "I",
  /*  8. */  "B",
  /*  9. */  "J",
  /*  10. */ "A"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a long region on the east coast.",
  /* B. */ "B is a large region that encompasses region A.",
  /* C. */ "C is a large region in the middle of the map.",
  /* D. */ "D is a small region in the middle of the map's northern portion.",
  /* E. */ "E is a a region in the southeast portion of the map.",
  /* F. */ "F is a very small region in the northeast portion of the map.",
  /* G. */ "G is a region that is slightly southwest of the map's enter.",
  /* H. */ "H is the region that is furthest northwest.",
  /* I. */ "I is a is a large region in the west that touches the coast.",
  /* J. */ "J is a small region that is south of regioin I and west of region G."];
