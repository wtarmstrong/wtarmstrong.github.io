/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 19: The Industrial Revolution Begins";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 19: Industrial Cities in Great Britain and Ireland, 1800-1850";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1248, 894];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 752,  620,  801,  656",
  /* B */ " 600,  268,  644,  308",
  /* C */ " 473,  378,  520,  419",
  /* D */ " 829,  725,  877,  761",
  /* E */ " 726,  363,  770,  402",
  /* F */ " 715,  503,  748,  547",
  /* G */ " 633,  700,  676,  748",
  /* H */ " 705,  705,  753,  741",
  /* I */ " 642,  265,  676,  306",
  /* J */ " 681,  506,  715,  552"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Belfast",
  /* 2. */  "Edinburgh",
  /* 3. */  "Glasgow",
  /* 4. */  "Bristol",
  /* 5. */  "Newcastle",
  /* 6. */  "Liverpool, port city and site of the world's first major railroad",
  /* 7. */  "Cardiff, a coal-mining center",
  /* 8. */  "Manchester, a fast-growing center of textile manufacturing",
  /* 9. */  "Birmingham, site of James Watt's steam engine factory",
  /* 10. */ "London, capital of Great Britain, which experienced big population growth due to the number of new factories"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "C",
  /*  2. */  "I",
  /*  3. */  "B",
  /*  4. */  "H",
  /*  5. */  "E",
  /*  6. */  "J",
  /*  7. */  "G",
  /*  8. */  "F",
  /*  9. */  "A",
  /*  10. */ "D"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a city southeast of the map's center. It is north of the cities D, G, and H, and it is south of the cities F and J.",
  /* B. */ "B is a city north of the map's center. It is west of city I.",
  /* C. */ "C is a city west of the map's center.",
  /* D. */ "D is the city furthest to the southeast.",
  /* E. */ "E is a city east of the map's center. It is south east of cities B and I, and it is north of the cities F and J.",
  /* F. */ "F is a city slightly southeast of the map's center. It is east of city J.",
  /* G. */ "G is a city south of the map's center. It is west of city H.",
  /* H. */ "H is a city that is south and slightly east of the map's center. It is east of city G, south of city A, and west of city D.",
  /* I. */ "I is a city north of the map's center. It is east of city B.",
  /* J. */ "J is a city slightly southeast of the map's center. It is west of city F."];
