var modal = document.getElementById("modal");
var body = document.getElementById("body");
var btn = document.getElementById("modal_btn");
var span = document.getElementsByClassName("close")[0];
var first_row=document.getElementById("first_row");
var second_row=document.getElementById("second_row");


btn.onclick = function() { 
  modal.style.display = "flex";
  first_row.style.display= "none";
  second_row.style.display= "none";
}

span.onclick = function() {
  modal.style.display = "none";
  first_row.style.display= "flex";
  second_row.style.display= "flex";
}


