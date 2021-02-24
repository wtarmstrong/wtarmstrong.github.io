/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 20: Revolutions in Europe and Latin America";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 20: Revolutions in Europe, 1820s-1840s";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1149, 839];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 443,  195,  484,  238",
  /* B */ " 821,  648,  855,  688",
  /* C */ " 632,  240,  677,  282",
  /* D */ " 677,  299,  727,  339",
  /* E */ " 361,  371,  396,  410",
  /* F */ " 567,  502,  621,  544",
  /* G */ " 753,  323,  809,  364",
  /* H */ " 367,  260,  420,  304",
  /* I */ " 762,  441,  793,  483",
  /* J */ "  66,  486,  101,  534"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "France",
  /* 2. */  "Portugal",
  /* 3. */  "Rome",
  /* 4. */  "Budapest",
  /* 5. */  "Vienna",
  /* 6. */  "Prague, where Czechs demanded an independent government",
  /* 7. */  "Belgium, the only country to fain independence in the 1830 revolution",
  /* 8. */  "Greece, which gained independence by 1830",
  /* 9. */  "Serbia, site of a guerrilla war against the Ottoman empire",
  /* 10. */ "Paris, center of the revolutionary spirit"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "G",
  /*  2. */  "J",
  /*  3. */  "A",
  /*  4. */  "H",
  /*  5. */  "E",
  /*  6. */  "D",
  /*  7. */  "I",
  /*  8. */  "B",
  /*  9. */  "C",
  /*  10. */ "F"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a small region northwest of the map's center",
  /* B. */ "B is a small region that is made up of small islands, a large island, and a small piece of land. It is southeast of the map's center.",
  /* C. */ "C is a city that is northeast of the map's center. It is northwest of cities D and G.",
  /* D. */ "D is a city that is northeast of the map's center. It is between cities C and G.",
  /* E. */ "E is a region west of the map's center. It contains city H.",
  /* F. */ "F is a city south of the map's center.",
  /* G. */ "G is a city that is northeast of the map's center. It is southeast of cities C and D.",
  /* H. */ "H is a city that is northwest of the map's center. It is in region E.",
  /* I. */ "I is a region east of the map's center.",
  /* J. */ "J is a region west of the map's center."];
