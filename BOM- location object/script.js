var location_div = document.querySelector(".location-div");
var p1 = location_div.children[0];
p1.textContent = location.href;

var p2 = location_div.children[1];
p2.textContent = location.protocol;

var p3 = location_div.children[2];
p3.textContent = location.hostname;

var p4 = location_div.children[3];
p4.textContent = location.port;

var p5 = location_div.children[4];
p5.textContent = location.pathname;

let button = document.getElementById("btn");
button.addEventListener("click", function(){
   // location.assign("https://linktr.ee/tushar3549");
   window.open("https://linktr.ee/tushar3549", "_blank");
})
