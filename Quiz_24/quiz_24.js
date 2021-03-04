/* Change these items for each quiz
 * Other than the items in this file, the only things that will need to be changed for each quiz are the images in the Images folder and the reference to this document in the HTML file.
 * The part to change in the HTML file is near the bottom. 
 * It looks like this: <script src="quiz_#.js"></script> 
 * Just change the # to the number of the quiz. */

// This text is what is displayed on the tab of the web page.
var tabTitle = "Map 24: The New Imperialism";

// This text is what is displayed at the top of the web page
var quizHeader = "Geography Quiz 24: Imperialism in India";

// This is used to change the size of the div that has the map images. The first value is the map's width; the second is its height.
var imgDimension = [1399, 885];

// This is used to change the areas used in the image map "imgClick"
// For each item, "x1, y1, x2, y2" is used to create the rect areas of the image map.
var mapDimension = [
  /* A */ " 853,  382,  885,  422",
  /* B */ " 441,  575,  479,  625",
  /* C */ " 405,   80,  443,  124",
  /* D */ " 495,  231,  543,  270",
  /* E */ " 586,  651,  631,  691",
  /* F */ " 409,  496,  455,  549",
  /* G */ " 555,  506,  594,  551",
  /* H */ " 795,  405,  844,  439",
  /* I */ " 579,  695,  619,  733",
  /* J */ " 609,  808,  649,  856"];

// This text is displayed next to "Selected Question: " when the associated question is selected. The text comes from the original quiz.
var qTextArray = [
  /* 1. */  "Goa",
  /* 2. */  "Hyderabad",
  /* 3. */  "Punjab",
  /* 4. */  "Bengal",
  /* 5. */  "Madras",
  /* 6. */  "Delhi, the old Mughal capital of India",
  /* 7. */  "Pondicherry, a French possession",
  /* 8. */  "Calcutta, site of Ram Mohun Roy's Hindu College",
  /* 9. */  "Bombay, one of India's major cities",
  /* 10. */ "Ceylon, an island nation"];

// At this time, this array is not used for anything other than supplying the value for qArray[i].answer. No function currently exists to grade the quiz as to avoid giving the answers to the student.
// Enter the letter representing the correct location for each question.
var qAnsArray = [
  /*  1. */  "B",
  /*  2. */  "G",
  /*  3. */  "C",
  /*  4. */  "A",
  /*  5. */  "E",
  /*  6. */  "D",
  /*  7. */  "I",
  /*  8. */  "H",
  /*  9. */  "F",
  /*  10. */ "J"
]

// This text is displayed next to "Selected Location: " when the associated location is selected. The intention is to assist the student in finding the location on the map.
var lTextArray = [
  /* A. */ "A is a region in the eastern portion of India. It contains city H.",
  /* B. */ "B is a city on India's western coast. It is south of city F.",
  /* C. */ "C is a region in India's northern portion.",
  /* D. */ "D is a northern city.",
  /* E. */ "E is a city on India's eastern coast. It is north of city I.",
  /* F. */ "F is a city on India's western coast. It is north of city B.",
  /* G. */ "G is a region in the center of India.",
  /* H. */ "H is a coastal city in the eastern portion of India. It is in region A.",
  /* I. */ "I is a city on India's eastern coast. It is south of city E.",
  /* J. */ "J is an island south of India's mainland."];
