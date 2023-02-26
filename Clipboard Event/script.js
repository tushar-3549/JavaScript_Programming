var input = document.querySelector("input");
var p = document.querySelector("p");
input.addEventListener("copy", function(){
  console.log("You have copied");
});
input.addEventListener("cut", function () {
  p.innerText = "You have cut";
});
input.addEventListener("paste", function () {
  p.innerText = "You have pasted";
});
