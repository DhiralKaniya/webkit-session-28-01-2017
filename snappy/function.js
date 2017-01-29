/* common function for click event */
function click(elementId, callFunction){
  var element = document.getElementById(elementId);
  /* it is check that element is exsist or not */
  if(element){
    var elementId = element.id;
    element.addEventListener("click",callFunction);
  }
}

/* login google with fire base */
function logInUser(){
  /*
    firebase implementation will be here
  */
  window.location.href="chat.html";
}

/*logout users */
function logOutUser(){
  window.location="index.html";
}
