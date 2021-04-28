/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 31: New Nations Emerge";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 31: Independence in Africa";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [768, 878];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 605,  426,  633,  460",
  /* B */ " 443,  786,  467,  819",
  /* C */ " 170,  351,  196,  382",
  /* D */ " 581,  504,  607,  535",
  /* E */ " 210,  415,  234,  448",
  /* F */ " 519,  129,  539,  163",
  /* G */ " 453,  459,  480,  491",
  /* H */ " 270,  327,  294,  359",
  /* I */ "  57,  420,   78,  457",
  /* J */ " 211,  112,  237,  159"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Tanzania",
  /* 2. */  "Egypt",
  /* 3. */  "Liberia",
  /* 4. */  "Benin",
  /* 5. */  "South Africa",
  /* 6. */  "Algeria, a French colony where a bitter civil war was waged",
  /* 7. */  "Nigeria, Africa's most populous country and an oil producer",
  /* 8. */  "Kenya, where Europeans took over the most fertile land",
  /* 9. */  "Ghana, the first African nation south of the Sahara to win its independence",
  /* 10. */ "Democratic Republic of the Congo, a former colony of Belgium, rich in natural resources"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "D",
  /*  2. */  "F",
  /*  3. */  "I",
  /*  4. */  "E",
  /*  5. */  "B",
  /*  6. */  "J",
  /*  7. */  "H",
  /*  8. */  "A",
  /*  9. */  "C",
  /*  10. */ "G"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a small region on Africa's east coast. It is north of location D.",
  /* B. */ "B is a region on the southern coast of Africa.",
  /* C. */ "C is a small region in the western portion of the map. It is west of locations E and H and east of location I.",
  /* D. */ "D is a region in the map's eastern portion. It is south of location A.",
  /* E. */ "E is a very small region in the map's western portion. It is east of locations C and I and west of location H.",
  /* F. */ "F is a region in the northeast portion of the map.",
  /* G. */ "G is a large region near the map's center. It is west of location A and D, and it is southeast of location H.",
  /* H. */ "H is a region in the map's western portion. It is east of locations C, E, and I.",
  /* I. */ "I is a very small region in the map's western portion. It is west of locations C and E.",
  /* J. */ "J is a very large region in the northwest portion of the map. It is north of locations C, E, and H."];
