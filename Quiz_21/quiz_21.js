/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 21: Life in the Industrial Age";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 21: Europe During the Industrial Age";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1242, 754];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 688,  474,  724,  512",
  /* B */ " 371,  346,  412,  381",
  /* C */ " 547,  371,  582,  407",
  /* D */ " 427,  418,  470,  455",
  /* E */ " 405,  490,  440,  530",
  /* F */ " 568,  118,  596,  158",
  /* G */ " 377,  297,  411,  335",
  /* H */ " 601,  350,  647,  387",
  /* I */ " 463,  379,  488,  417",
  /* J */ " 271,  592,  301,  639"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Great Britain",
  /* 2. */  "Spain",
  /* 3. */  "Austria-Hungary",
  /* 4. */  "Berlin",
  /* 5. */  "France",
  /* 6. */  "Paris, where extensive urban renewal took place",
  /* 7. */  "Belgium, the first European country after Britain to industrialize",
  /* 8. */  "London, setting of Charles Dickens's novel <em>Oliver Twist</em>",
  /* 9. */  "Germany, by the end of the century, Europe's leading industrial power",
  /* 10. */ "Norway, home of writer Henrik Ibsen"];

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
  /* A. */ "A is a large region that is just southeast of the map's center.",
  /* B. */ "B is a city in the region G. It is northwest of the map's center.",
  /* C. */ "C is a large region that includes the map's center.",
  /* D. */ "D is a city in the region E. It is southwest of location I.",
  /* E. */ "E is a region that is southwest of the map's center.",
  /* F. */ "F is a region that is north of the map's center.",
  /* G. */ "G is an island region that is northwest of the map's center.",
  /* H. */ "H is a city in the region C. It is almost exactly at the map's center.",
  /* I. */ "I is a small region that is between regions C and E. It is west of the map's center.",
  /* J. */ "J is the region that is furthest to the southwest."];
