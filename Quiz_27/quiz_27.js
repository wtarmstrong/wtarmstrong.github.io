/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 27: Nationalism and Revolution Around the World";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 27: Major Locations in the Middle East After World War I";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1087, 811];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 371,  192,  404,  228",
  /* B */ " 605,  662,  632,  697",
  /* C */ " 399,  489,  426,  521",
  /* D */ " 173,  659,  197,  689",
  /* E */ " 363,  490,  386,  520",
  /* F */ " 395,  388,  416,  421",
  /* G */ " 650,  436,  678,  470",
  /* H */ " 478,  357,  504,  389",
  /* I */ " 936,  411,  962,  449",
  /* J */ " 672,   99,  701,  139"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Iraq",
  /* 2. */  "Soviet Union",
  /* 3. */  "Syria",
  /* 4. */  "Lebanon",
  /* 5. */  "Hejaz and Nejd",
  /* 6. */  "Egypt, which gained its independence from Britain in 1922",
  /* 7. */  "Turkey, born out of the collapse of the Ottoman empire",
  /* 8. */  "Persia, which became Iran",
  /* 9. */  "Trans-Jordan, the last country to become a British mandate",
  /* 10. */ "Palestine, a British mandate Jewish nationalists wanted as their homeland"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "G",
  /*  2. */  "J",
  /*  3. */  "H",
  /*  4. */  "F",
  /*  5. */  "B",
  /*  6. */  "D",
  /*  7. */  "A",
  /*  8. */  "I",
  /*  9. */  "C",
  /*  10. */ "E"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a large region in the northwest portion of the map.",
  /* B. */ "B is a large region in the southeast portion of the map.",
  /* C. */ "C is a region slightly southwest of the map's center. It is east of region E, south of region H, and west of region G.",
  /* D. */ "D is a large region in the southwest portion of the map.",
  /* E. */ "E is a small region southwest of the map's center. It is west of region C and south of region F.",
  /* F. */ "F is a very small region west of the map's center. It is north of region E and west of region H.",
  /* G. */ "G is a large region that is slightly east of the map's center.",
  /* H. */ "H is a region that is slightly northwest of the map's center.",
  /* I. */ "I is a large region that touches the eastern edge of the map.",
  /* J. */ "J is a large region that touches the northern edge of the map."];
