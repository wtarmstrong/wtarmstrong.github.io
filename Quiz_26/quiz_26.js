/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 26: World War I and the Russian Revolution";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 26: Major Locations of World War I";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1240, 832];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 831,   73,  876,  109",
  /* B */ " 423,  291,  465,  324",
  /* C */ " 381,  350,  425,  382",
  /* D */ " 780,  535,  823,  568",
  /* E */ "1066,  618, 1098,  667",
  /* F */ " 415,  220,  440,  255",
  /* G */ " 496,  320,  590,  355",
  /* H */ " 676,  443,  722,  476",
  /* I */ " 804,  173,  825,  210",
  /* J */ " 867,  529,  892,  572"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "The Marne",
  /* 2. */  "Verdun",
  /* 3. */  "Tannenberg",
  /* 4. */  "Caparetto",
  /* 5. */  "Gallipoli",
  /* 6. */  "Belgium, the nation Germany invaded under the Schlieffen Plan",
  /* 7. */  "Yugoslavia, a new South Slav state created after World War I",
  /* 8. */  "Sarajevo, the site of the assassination of Archduke Ferdinand of Austria-Hungary, which set off World War I",
  /* 9. */  "Poland, which regained independence following World War I",
  /* 10. */ "Alsace and Lorraine, a region returned to France after World War I"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "C",
  /*  2. */  "B",
  /*  3. */  "A",
  /*  4. */  "H",
  /*  5. */  "E",
  /*  6. */  "F",
  /*  7. */  "J",
  /*  8. */  "D",
  /*  9. */  "I",
  /*  10. */ "G"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a city in the northeast portion of the map.",
  /* B. */ "B is a city in the northwest portion of the map.",
  /* C. */ "C is a \"French Department\" (similar to a county) in the western portion of the map.",
  /* D. */ "D is a city in the southeast portion of the map. It is southeast of city H and in region J.",
  /* E. */ "E is a city near the southeast corner of the map. It is the location that is furthest southeast.",
  /* F. */ "F is a region in the northwest portion of the map. It is north of city B.",
  /* G. */ "G is a region in the northwest portion of the map. It is east of city B.",
  /* H. */ "H is a city that is slightly southeast of the map's center. It is in region J.",
  /* I. */ "I is a region in the northeast portion of the map. It is south of city A.",
  /* J. */ "J is a region in the southeast portion of the map. It contains cities D and H."];
