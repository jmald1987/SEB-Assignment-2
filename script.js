var modal = document.getElementById("modal");
var body = document.getElementById("body");
var btn = document.getElementById("modal_btn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() { 
modal.style.display = "block";
body.style.zIndex = "-1";
modal.style.zIndex = "1";
}

span.onclick = function() {
  modal.style.display = "none";
  body.style.zIndex = "1";
  modal.style.zIndex = "-1";
}


