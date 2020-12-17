/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 14: The Beginnings of Our Global Age: Europe, Africa, and Asia";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 14: Global Explorations";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1236, 730];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ "1033,  423, 1064,  451",
  /* B */ " 807,  376,  831,  413",
  /* C */ " 338,  275,  370,  311",
  /* D */ " 412,  182,  444,  213",
  /* E */ " 592,  619,  620,  648",
  /* F */ "  97,  560,  119,  592",
  /* G */ " 771,  443,  802,  473",
  /* H */ " 210,  384,  240,  412",
  /* I */ " 966,  386,  997,  416",
  /* J */ " 418,  402,  507,  436"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "the Cape of Good Hope",
  /* 2. */  "the route of Dias",
  /* 3. */  "the Philippines",
  /* 4. */  "the route of da Gama",
  /* 5. */  "the route of Columbus",
  /* 6. */  "the West Indies, where Christopher Columbus landed",
  /* 7. */  "the Line of Demarcation, a border set by the Treaty of Tordesillas",
  /* 8. */  "the route of Magellan, the first to circumnavigate the globe",
  /* 9. */  "the Moluccas, also known as the Spice Islands",
  /* 10. */ "Calicut, where Portugal's Indian trading empire began"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "E",
  /*  2. */  "J",
  /*  3. */  "I",
  /*  4. */  "G",
  /*  5. */  "C",
  /*  6. */  "H",
  /*  7. */  "D",
  /*  8. */  "F",
  /*  9. */  "A",
  /*  10. */ "B"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a small group of islands close to the eastern edge of the map. It is southeast of F.",
  /* B. */ "B is a city in the middle of the eastern portion of the map. It is one endpoint of the route G.",
  /* C. */ "C is a route that is in the middle of the western portion of the map, and turns back after reaching H.",
  /* D. */ "D is a vertical line (north-south) that is slightly west of the map's center.",
  /* E. */ "E is a small region in the middle of the map's southern portion.",
  /* F. */ "F is a route that spans from the eastern edge of the map to the western edge. It is mostly in the map's southern portion.",
  /* G. */ "G is a route that mostly south of the map's center. The route turns back after reaching B.",
  /* H. */ "H is a group of islands in the western portion of the map. It is one end point of route C.",
  /* I. */ "I is a larger group of islands close to the map's eastern edge. It is northwest of A.",
  /* J. */ "J is a route that is mostly south of the map's center. It turns back shortly after reaching E."];
