/***********
 * Classes *
 ***********/
 


/*********
 * Input *
 *********/
 
var locArray = [];
// Variable holds the <p> element that is being focused on
var selLocIndex = 0;

// Take text in the input field and create a new <p> element
function newPElmnt () {
  var userInput = document.getElementById("userInput").value;
  if (userInput == "") { return; }
  var newPElement = document.createElement("p");
  newPElement.innerHTML = userInput;
  newPElement.id = "p" + document.getElementById("workspace").getElementsByTagName("p").length;
  newPElement.classList.add("overlayText");
  newPElement.onclick = function () {
    var firstThis = this;
    changePSelect(locArray.findIndex(function (element) {
      return (element.p == firstThis);
    }));
  };
  locArray.push(new locItem(newPElement));
  
  document.getElementById("workspace").appendChild(locArray[locArray.length - 1].p);
  document.getElementById("userInput").value = "";
}

// Allow pressing enter instead of clicking button
document.getElementById("userInput").addEventListener("keyup", function(event){
  if (event.keyCode == 13) {
    document.getElementById("inputSubmit").click();
  }
});

/********************
 * Selected Control *
 ********************/
 
// Ensures that the text after "Selected: " represents the <p> that is locArray[selLocIndex].p;
function updateSelText () {
  if (selLocIndex == -1) { document.getElementById("selText").innerHTML = ""; }
  else {document.getElementById("selText").innerHTML = locArray[selLocIndex].p.innerHTML; }
}

// Makes it so that there is not an active text item
function unSelLoc () {
  selLocIndex = -1;
}

// Changing the active text item
function changePSelect (newLocIndex) {
  selLocIndex = newLocIndex;
  updateSelText();
  dragSelLoc();
}

// Updates the IDs of items in the locArray to match their position in the index
function updateLocPIds () {
  for (var i = 0; i < locArray.length; i++) {
    locArray[i].p.id = "p" + i;
  }
  return;
}

// Removes the text item from the image and removes traces of it
function delSelected () {
  if (selLocIndex == -1) { return; }
  document.getElementById("workspace").removeChild(locArray[selLocIndex].p);
  locArray.splice(selLocIndex, 1);
  unSelLoc();
  updateSelText();
  updateLocPIds();
}



/*********************
 * Draggable Element *
 *********************/

// Calls dragElement on the active text item
function dragSelLoc () {
  dragElement(locArray[selLocIndex].p);
}

// Slightly edited from https://www.w3schools.com/howto/howto_js_draggable.asp
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/***********************************
 * Functions for elementInfo <div> *
 ***********************************/

// Inserts an li element in the elementList ol at the specified index
function insertToElementList (index, locObj) {
  var liHTML = "<li id=\"l" + locObj.p.id + "\">" + locObj.p.innerHTML + locObj.prepListItem() + "</li>";
  if (index == 0) {
    document.getElementById("elementList").insertAdjacentHTML("afterbegin", liHTML);
  }
  else {
    document.getElementById("elementList").childNodes[index - 1].insertAdjacentHTML("afterend", liHTML);
  }
}

// index is where to start removing li elements; it's an inclusive removal
function clearListToEnd (index) {
  var liList = document.getElementById("elementList").childNodes;
  
  var listCount = liList.length;
  
  for (var i = index; i < listCount; i++) {
    document.getElementById("elementList").removeChild(liList[index]);
  }
}

// Ensures that the li elements in the elementInfo <div> match the p elements in the "workspace" <div>
function updateList () {
  var liArray = document.getElementById("elementList").childNodes;
  // Iterates through elementList and ensures that the first n elements of elementList match the first n elements of the div workspace.
  var j = 0;
  for (var i = 0; i < locArray.length; i++) {
    // If there are more p elements than li elements
    if (i >= liArray.length) {
      insertToElementList(j, locArray[i]);
      liArray = document.getElementById("elementList").childNodes;
    }
    else if (locArray[i].p.innerHTML != liArray[j].innerHTML) {
      insertToElementList(j, locArray[i]);
      liArray = document.getElementById("elementList").childNodes;
    }
    j++;
  }
  
  // Removes trailing elements in elementList
  if (j < liArray.length) { clearListToEnd(j); }
}