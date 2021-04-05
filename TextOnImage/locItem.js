class locItem {
  constructor (pElement) {
    this.p = pElement;
    this.p.style.left = "0px";
    this.p.style.top = "0px";
    this.p.style.fontSize = "16px";
    this.p.style.transform = "rotate(0deg)";
    this.p.style.letterSpacing = "0px";
    this.p.style.wordSpacing = "0px";
    this.p.style.width = "";
    this.p.style.lineHeight = "";
    this.p.style.textAlign = "";
    
    this.rotateDeg = 0; // Accessing the rotation value through getComputedStyle returns a transformation matrix. It's easier to just keep a var that holds the value.
  }
  
  // Creates <ul> with <li> elements for each style property of the item
  prepListItem () {
    var liTxt = "<ul>";
    for (var i = 0; i < this.p.style.length; i++) {
      // Removing typical information from output
      if (["letter-spacing", "word-spacing"].indexOf(this.p.style[i]) >= 0 && this.p.style[this.p.style[i]] == "0px")  { continue; }
      else if (this.p.style[i] == "transform" && this.p.style[this.p.style[i]] == "rotate(0deg)") { continue; }
      liTxt += "<li>" + this.p.style[i] + ": " + this.p.style[this.p.style[i]] + ";</li>";
    }
    if (this.p.classList.contains("italic")) { liTxt += "<li>font-style: italic;</li>"; }
    if (this.p.classList.contains("bolded")) { liTxt += "<li>font-weight: bold;</li>"; }
    if (this.p.classList.contains("blurred")) { 
      liTxt += "<li>backdrop-filter: blur(1.5px);</li>";
      liTxt += "<li>-webkit-backdrop-filter: blur(1.5px);</li>";
     }
    liTxt += "</ul>";
    return liTxt;
  }
  
  setRotate (newDeg) {
    this.rotateDeg = newDeg;
    this.p.style.transform = "rotate(" + this.rotateDeg + "deg)";
  }
  
  incRotate (incDeg) {
    this.rotateDeg += incDeg;
    this.rotateDeg %= 360;
    this.p.style.transform = "rotate(" + this.rotateDeg + "deg)";
    return;
  }
  
  setFontSize (newSize) {
    this.p.style.fontSize = newSize + "px";
  }
  
  incFontSize (incSize) {
    var oldSize = parseInt(this.p.style.fontSize);
    this.p.style.fontSize = (oldSize + incSize) + "px";
  }
  
  incWordSpacing (incSize) {
    var oldSize = parseFloat(this.p.style.wordSpacing);
    this.p.style.wordSpacing = (oldSize + incSize) + "px";
  }
  
  incLetterSpacing (incSize) {
    var oldSize = parseFloat(this.p.style.letterSpacing);
    this.p.style.letterSpacing = (oldSize + incSize) + "px";
  }
  
  setWidth (newWidth) {
    this.p.style.width = newWidth + "px";
  }
  
  delWidth () {
    this.p.style.width = "";
  }
  
  incWidth (incAmount) {
    var oldSize = parseInt(this.p.style.width);
    if (isNaN(oldSize) || oldSize <= 0) { this.p.style.width = "50px"; }
    else { this.p.style.width = (oldSize + incAmount) + "px"; }
  }
  
  setLineHeight (newLineHeight) {
    this.p.style.lineHeight = newLineHeight;
  }
  
  delLineHeight () {
    this.p.style.lineHeight = "";
  }
  
  incLineHeight (incAmount) {
    var oldSize = parseFloat(this.p.style.lineHeight);
    if (isNaN(oldSize)) { this.p.style.lineHeight = 1.2 * parseFloat(this.p.style.fontSize) + "px"; }
    else { this.p.style.lineHeight = (oldSize + incAmount) + "px"; }
  }
  
  textAlignLeft () {
    this.p.style.textAlign = "left";
  }
  
  textAlignCenter () {
    this.p.style.textAlign = "center";
  }
  
  textAlignRight () {
    this.p.style.textAlign = "right";
  }
  
  delTextAlign () {
    this.p.style.textAlign = "";
  }
  
  toggleItalic () {
    if (this.p.classList.contains("italic")) { this.p.classList.remove("italic"); }
    else { this.p.classList.add("italic"); }
  }
  
  toggleBold () {
    if (this.p.classList.contains("bolded")) { this.p.classList.remove("bolded"); }
    else { this.p.classList.add("bolded"); }
  }
  
  toggleBlur () {
    if (this.p.classList.contains("blurred")) { this.p.classList.remove("blurred"); }
    else { this.p.classList.add("blurred"); }
  }
}
