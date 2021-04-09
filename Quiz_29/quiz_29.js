/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 29: World War II and Its Aftermath";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 29: Europe and North Africa";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [987, 614];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 855,   58,  891,   97",
  /* B */ " 745,  537,  782,  578",
  /* C */ " 512,   92,  551,  132",
  /* D */ " 333,  453,  420,  614",
  /* E */ " 270,  245,  306,  285",
  /* F */ " 744,  210,  779,  250",
  /* G */ " 207,  168,  243,  209",
  /* H */ " 265,  128,  304,  168",
  /* I */ " 401,  101,  429,  142",
  /* J */ " 423,  422,  488,  468"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Warsaw",
  /* 2. */  "Dunkirk",
  /* 3. */  "Sicily",
  /* 4. */  "Berlin",
  /* 5. */  "El Alamein",
  /* 6. */  "Tunisia, where a combined American and British force made Rommel surrender",
  /* 7. */  "Stalingrad, the location of a major turning point in the war",
  /* 8. */  "Normandy, site of the D-Day landing",
  /* 9. */  "Yalta, where the Big Three met to plan postwar Europe",
  /* 10. */ "Vichy, capital of the French puppet state controlled by Germany"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "C",
  /*  2. */  "H",
  /*  3. */  "J",
  /*  4. */  "I",
  /*  5. */  "B",
  /*  6. */  "D",
  /*  7. */  "A",
  /*  8. */  "G",
  /*  9. */  "F",
  /*  10. */ "E"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a city near the northeastern corner of the map.",
  /* B. */ "B is a city near the southeastern corner of the map.",
  /* C. */ "C is a city that is almost directly north of the map's center. It is east of city I.",
  /* D. */ "D is a region in the southwest that touches the southern edge.",
  /* E. */ "E is a city that is west of the map's center. It is southeast of city G and south of city H.",
  /* F. */ "F is a city in that map's eastern portion. It is southwest of city A.",
  /* G. */ "G is a city that is northwest of the map's center. It is northwest of city E and southwest of city H.",
  /* H. */ "H is a city that is northwest of the map's center. It is north of city E and northeast of city G.",
  /* I. */ "I is a city that is north of the map's center. It is west of city C.",
  /* J. */ "J is a region south of the map's center. It is northeast of region D."];
