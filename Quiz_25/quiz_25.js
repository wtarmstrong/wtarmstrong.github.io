/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 25: New Global Patterns";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 25: Imperialism in Latin America";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1372, 892];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 826,  666,  860,  702",
  /* B */ " 144,  188,  174,  228",
  /* C */ " 517,  433,  547,  469",
  /* D */ " 732,  607,  767,  647",
  /* E */ " 936,  215,  965,  249",
  /* F */ " 560,  478,  589,  515",
  /* G */ "1125,  288, 1160,  327",
  /* H */ " 647,  440,  681,  480",
  /* I */ " 703,  495,  729,  532",
  /* J */ "1167,  289, 1194,  333"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Costa Rica",
  /* 2. */  "Honduras",
  /* 3. */  "El Salvador",
  /* 4. */  "Guatemala",
  /* 5. */  "Haiti",
  /* 6. */  "Panama, which won independence from Colombia in 1903",
  /* 7. */  "Cuba, which gained independence from Spain at the end of the Spanish-American War",
  /* 8. */  "Dominican Republic, which failed to pay its foreign debts in the early 1900s",
  /* 9. */  "Nicaragua, one of many Central American countries to which the United States sent troops",
  /* 10. */ "Mexico, which fought a war with the United States in 1848"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "D",
  /*  2. */  "H",
  /*  3. */  "F",
  /*  4. */  "C",
  /*  5. */  "G",
  /*  6. */  "A",
  /*  7. */  "E",
  /*  8. */  "J",
  /*  9. */  "I",
  /*  10. */ "B"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a small, skinny region southeast of the map's center. It is also southeast of regions D and I.",
  /* B. */ "B is a large region northwest of the map's center.",
  /* C. */ "C is a region west of the map's center. It is southeast of region B and northwest of regions F and H.",
  /* D. */ "D is a small region south of the map's center. It is northwest of region A and southeast of region I.",
  /* E. */ "E is a skinny island region that is northeast of the map's center. It is west of regions G and J.",
  /* F. */ "F is a small region that is slightly southwest of the map's center. It is southeast of region C and southwest of region H.",
  /* G. */ "G is a small part of an island that is east of the map's center. It is west of region J.",
  /* H. */ "H is a region that is at the map's center. It is east of region C and northwest of region I.",
  /* I. */ "I is a region that is south of the map's center. It is north of region D and south of region H.",
  /* J. */ "J is a part of an island that is east of the map's center. It is east of region G."];
