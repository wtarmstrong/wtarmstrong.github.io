/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 15: The Beginnings of Our Global Age: Europe and the Americas";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 15: Claims in the Americas, 1700s";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [750, 881];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 468,  138,  511,  179",
  /* B */ " 277,  349,  313,  394",
  /* C */ " 697,  549,  732,  594",
  /* D */ " 542,  478,  577,  516",
  /* E */ " 500,  632,  534,  673",
  /* F */ " 420,  247,  449,  283",
  /* G */ " 420,  299,  489,  327",
  /* H */ " 348,  319,  387,  356",
  /* I */ " 397,  365,  431,  400",
  /* J */ "  94,  326,  137,  371"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Spanish Florida",
  /* 2. */  "Pacific Ocean",
  /* 3. */  "Cuba",
  /* 4. */  "Gulf of Mexico",
  /* 5. */  "Guiana",
  /* 6. */  "New France, also known as Canada",
  /* 7. */  "Brazil, Portugal's largest colony",
  /* 8. */  "the English colonies of North America",
  /* 9. */  "the Viceroyalty of Peru, including much of the old Inca empire",
  /* 10. */ "the Viceroyalty of New Spain, which included Mexico"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "G",
  /*  2. */  "J",
  /*  3. */  "I",
  /*  4. */  "H",
  /*  5. */  "D",
  /*  6. */  "A",
  /*  7. */  "C",
  /*  8. */  "F",
  /*  9. */  "E",
  /*  10. */ "B"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a region near the northern edge of the map.",
  /* B. */ "B is a region just north of the map's center.",
  /* C. */ "C is a region near the map's lower eastern edge.",
  /* D. */ "D is a very small region east of the map's center.",
  /* E. */ "E is a region south of the map's center.",
  /* F. */ "F is a small region north of the map's center; it is between A and G.",
  /* G. */ "G is a small region north of the map's center; it is between F and H.",
  /* H. */ "H is a body of water north of the map's center.",
  /* I. */ "I is an island north of the map's center; it is south of G.",
  /* J. */ "J is a very large body of water taking up most of the map's western portion."];
