/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 28: The Rise of Totalitarianism";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 28: Important Places in the Soviet Union in the 1930s";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1081, 671];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas (click-able spots)  of the image map.
// (x1, y1) can be any corner of the rectangular area, but (x2, y2) must be the opposite corner.
var mapDimension = [
  /* A */ " 439,  388,  468,  412",
  /* B */ " 410,  255,  435,  289",
  /* C */ " 242,  263,  266,  293",
  /* D */ " 253,  212,  283,  247",
  /* E */ " 351,  470,  373,  503",
  /* F */ " 386,  184,  416,  222",
  /* G */ " 282,  326,  315,  369",
  /* H */ " 892,  361,  924,  408",
  /* I */ " 309,  179,  334,  223",
  /* J */ " 312,  256,  342,  299"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Belorussian Soviet Socialist Republic",
  /* 2. */  "Vladivostok",
  /* 3. */  "Stalingrad",
  /* 4. */  "Kazakh Soviet Socialist Republic",
  /* 5. */  "Leningrad",
  /* 6. */  "Archangel, site of many Gulag labor camps",
  /* 7. */  "Ukrainian Soviet Socialist Republic, where 5 to 8 million people died of starvation during the Terror Famine",
  /* 8. */  "Moscow, where Red Square is located",
  /* 9. */  "Turkmen, one of the 11 Soviet Socialist Republics",
  /* 10. */ "Russia, most powerful republic republic in the Soviet Union"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "D",
  /*  2. */  "H",
  /*  3. */  "G",
  /*  4. */  "A",
  /*  5. */  "I",
  /*  6. */  "F",
  /*  7. */  "C",
  /*  8. */  "J",
  /*  9. */  "E",
  /*  10. */ "B"];

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a large region that is slightly southwest of the map's center. It is northeast of region E.",
  /* B. */ "B is a very large area that takes up most of the area in the map's northern portion.",
  /* C. */ "C is a small region in the western area of the map. It is south of region D.",
  /* D. */ "D is a very small region that is in the northwestern portion of the map1. It is north of region C.",
  /* E. */ "E is a small region that is in the southwestern portion of the map. It is southwest of region A.",
  /* F. */ "F is a city in the northwestern portion of the map. It is east of city I and northeast of city J.",
  /* G. */ "G is a city in the western portion of the map. It is south of city J.",
  /* H. */ "H is a city in the eastern portion of the map.",
  /* I. */ "I is a city in the northwestern portion of the map. It is west of city F and north of city J.",
  /* J. */ "J is a city in the western portion of the map. It is southwest of city F, north of city G, and south of city I."];
