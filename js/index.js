window.onload = function(){
  var firstPic = document.querySelector("#list li:first-of-type");
  var lastPic = document.querySelector("#list li:last-of-type");
  var list = document.getElementById('list');

  list.appendChild(firstPic.cloneNode(true));
  list.insertBefore(lastPic.cloneNode(true),firstPic);

  var picWidth = lastPic.offsetWidth;
  list.style.left = -picWidth + "px";

var index = 1;
  setInterval(function(){
    index++;
    list.style.transition = "left .5s ease"
    list.style.left = -index * picWidth + "px";
    if(index > 8){
      index = 0;
      list.style.transition = "none";
      list.style.left = -picWidth + "px";
    }
  },1000);

}
