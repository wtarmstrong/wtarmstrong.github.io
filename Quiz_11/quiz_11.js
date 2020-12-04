/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 11: Kingdoms and Trading States of Africa";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 11: African Geography and Trade";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1082, 697];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 475,  215,  500,  240",
  /* B */ " 405,  165,  445,  195",
  /* C */ " 455,   60,  485,   90",
  /* D */ " 310,  175,  355,  205",
  /* E */ " 600,  570,  615,  595",
  /* F */ " 680,   85,  700,  115",
  /* G */ " 360,    5,  380,   35",
  /* H */ " 762,  341,  782,  366",
  /* I */ " 370,  155,  393,  185",
  /* J */ " 610,  370,  630,  400"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "the Nile River",
  /* 2. */  "Gao",
  /* 3. */  "the Atlas Mountains",
  /* 4. */  "the Kalahari Desert",
  /* 5. */  "the Niger River",
  /* 6. */  "the Great Rift Valley, a highway for migration",
  /* 7. */  "Timbuktu, site of an Islamic university",
  /* 8. */  "the Sahara, the world's largest desert",
  /* 9. */  "the Congo River, one of the Africa's major rivers",
  /* 10. */ "Kumbi Saleh, city of splendor and capital of Ghana"];

// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "F",
  /*  2. */  "B",
  /*  3. */  "G",
  /*  4. */  "E",
  /*  5. */  "A",
  /*  6. */  "H",
  /*  7. */  "I",
  /*  8. */  "C",
  /*  9. */  "J",
  /*  10. */ "D"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a river in the western portion of the map near the cities B, D, and I.",
  /* B. */ "B is a city in the western portion of the map. It is east of the cities D and I.",
  /* C. */ "C is a large region near the top of the map.",
  /* D. */ "D is a city in the western portion of the map. It is west of  the cities I and B.",
  /* E. */ "E is a region near the bottom of the map.",
  /* F. */ "F is a river in the north-eastern portion of the map.",
  /* G. */ "G is a region in the north-western portion of the map, along the top edge.",
  /* H. */ "H is a region in the eastern portion of the map.",
  /* I. */ "I is a city in the western portion of the map. It is in between D and B.",
  /* J. */ "J is a river just south of the middle of the map."];
