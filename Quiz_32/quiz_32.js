/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 32: Regional Conflicts";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 32: Israel and the Occupied Territories";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [729, 862];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 493,   29,  523,   57",
  /* B */ " 537,  122,  562,  152",
  /* C */ " 383,  524,  408,  553",
  /* D */ " 562,  249,  593,  281",
  /* E */ " 522,  594,  544,  622",
  /* F */ " 459,  364,  484,  396",
  /* G */ " 229,  600,  259,  633",
  /* H */ " 257,  412,  291,  448",
  /* I */ " 457,  286,  473,  318",
  /* J */ " 606,   45,  627,   83"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Jordan",
  /* 2. */  "Syria",
  /* 3. */  "the Golan Heights",
  /* 4. */  "Egypt",
  /* 5. */  "Israel",
  /* 6. */  "the Jordan River, a major waterway in the region",
  /* 7. */  "Lebanon, a multiethnic country torn by civil war",
  /* 8. */  "the West Bank, a disputed area",
  /* 9. */  "the Gaza Strip, one of the regions discussed in the Oslo Accord",
  /* 10. */ "Jerusalem, holy city to Jews, Christians, and Muslims"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "E",
  /*  2. */  "J",
  /*  3. */  "B",
  /*  4. */  "G",
  /*  5. */  "C",
  /*  6. */  "D",
  /*  7. */  "A",
  /*  8. */  "I",
  /*  9. */  "H",
  /*  10. */ "F"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a small region along the coastline that touches the northern edge of the map.",
  /* B. */ "B is a small region in the northeast. It is between regions A, C, E, and J.",
  /* C. */ "C is a large region in the middle of the map.",
  /* D. */ "D is a river in the northeastern portion of the map.",
  /* E. */ "E is a very large region in the southeast portion of the map.",
  /* F. */ "F is a city near the middle of the map. It touches regions C and I.",
  /* G. */ "G is a very large region in the southwest.",
  /* H. */ "H is a very small region that is slightly west of the map's middle. It touches regions C and G.",
  /* I. */ "I is a region near the middle of the map. It is between regions C and E.",
  /* J. */ "J is a region in the northeast corner of the map."];
