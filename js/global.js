




// Lauch Link in Blank Window 
function externalLinks() {
 	if (!document.getElementsByTagName) return;
	var anchors = document.getElementsByTagName("a");
		for (var i=0; i<anchors.length; i++) {
		   var anchor = anchors[i];
		   if (anchor.getAttribute("href") && anchor.getAttribute("rel") == "external") { anchor.target = "_blank"; }
		} // End Loop
}


// Disclosure element control
function expandCollapseBoxes(){
    if(!document.getElementsByTagName){return;}
    
    var divs = document.getElementsByTagName("div");
    
	for (var i=0; i < divs.length; i++){
        if(divs[i].className == "expand"){
	    	divs[i].className ="collapse";
			
	        // Build close link
		    var closeLink = document.createElement("a");
		    closeLink.className = "close-box";
		    closeLink.href = "#";
			closeLink.innerHTML = "Expand";
		    divs[i].parentNode.insertBefore(closeLink,divs[i]);
			
		    // Create link behavior
		    closeLink.onclick = function(){
		        var displayBox = this.parentNode.getElementsByTagName("div")[0];
				if(this.innerHTML == "Expand"){
				    this.innerHTML = "Collapse";
				    displayBox.className ="expand";
				}else{
				    this.innerHTML = "Expand";
				    displayBox.className ="collapse";
				}
		    };
		}
	}
};


// Event Handling
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


addLoadEvent(externalLinks);