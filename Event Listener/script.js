// document.querySelector("button").addEventListener("click", func);
// function func(){
//     alert("Hello Guys !");
// }

document.querySelector("button").addEventListener("click", function func(){
    alert("Hello Guys !");
});

var myVar = document.querySelector("h1");
myVar.addEventListener("mouseover", function(){
    myVar.classList.add("head_style");
});
myVar.addEventListener("mouseout", function(){
    myVar.classList.remove("head_style");
});
