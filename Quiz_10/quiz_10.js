/* Change these items for each quiz
 * Other than these items, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. It looks like this: <script src="quiz_#.js"></script>
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 10: Muslim Civilizations";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 10: The Spread of Islam";

// This is used to change the size of the div that houses the map. The first value is the image's width; the second is its height.
var imgDimension = [1096, 822];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */ "Cairo",
  /* 2. */ "Egypt",
  /* 3. */ "Córdoba",
  /* 4. */ "Persian Empire",
  /* 5. */ "Spain",
  /* 6. */ "Mecca, birthplace of Muhammad and holiest city of Islam",
  /* 7. */ "the former Byzantine empire, which fell to Muslim armies",
  /* 8. */ "Damascus, capital of the Umayyad caliphate",
  /* 9. */ "Arabia, first region conquered by Muslims",
  /* 10. */ "Baghdad, the splendid Abbasid capital"];

// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */ "B",
  /*  2. */ "J",
  /*  3. */ "F",
  /*  4. */ "A",
  /*  5. */ "C",
  /*  6. */ "I",
  /*  7. */ "H",
  /*  8. */ "D",
  /*  9. */ "E",
  /*  10. */ "G"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a large region in the middle of the map's right edge.",
  /* B. */ "B is a city near the center of the map.",
  /* C. */ "C is a region near the left edge of the map.",
  /* D. */ "D is a city just to the right of the map's center point.",
  /* E. */ "E is a large region in the southeast portion of the map.",
  /* F. */ "F is a city near the left edge of the map. It is within the regioin C.",
  /* G. */ "G is a city in the middle-right portion of the map. It is further east than D.",
  /* H. */ "H is a large region surrounding the Mediterranean Sea in the map's left portion.",
  /* I. */ "I is a city in the map's southeast area.",
  /* J. */ "J is a region in the middle-bottom area of the map."];
