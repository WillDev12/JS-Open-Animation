/////////////////////////////////////////////////////////
// Load animation by WillDevv12 // WillDev12.github.io //
/////////////////////////////////////////////////////////

var style=document.createElement('style');
style.type='text/css';
if(style.styleSheet){
    style.styleSheet.cssText='@keyframes fadeOutOnOpen { 0% { opacity: 1; } 40% { opacity: 1; } 100% { opacity: 0; } } ';
}else{
    style.appendChild(document.createTextNode('@keyframes fadeOutOnOpen { 0% { opacity: 1; } 40% { opacity: 1; } 100% { opacity: 0; } } '));
}
document.getElementsByTagName('head')[0].appendChild(style);

function openAnimation(imgUrl) {
  const newDiv = document.createElement("div");
  const newContent = document.createElement("img");
  newContent.src = `${imgUrl}`;
  newContent.style = "display: block; margin: auto;";
  newDiv.appendChild(newContent);
  newDiv.style = "background-color: black; z-index: 9999; position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center;";
  newDiv.style.animation="fadeOutOnOpen 2s linear forwards";

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  setTimeout(function() {
    newDiv.style.display = 'none';
  }, 2000);
}
