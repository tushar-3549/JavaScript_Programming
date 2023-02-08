var link = document.getElementsByTagName("a")[0];
// console.log(link);
// document.write(link); --> console 
// window.alert(link); 
link.innerHTML="Tushar Ahmed";
link.style.textDecoration="none";
link.style.fontSize="1.5rem";
link.style.color="red";
// link.href;
link.href="https://tushar.com";


var f = document.getElementsByTagName("h1")[0];
f.innerHTML="My name is Tushar";


var h = document.createElement("h1");
var tx = document.createTextNode("Heading One");
h.appendChild(tx);

var myDiv = document.getElementById("second");
myDiv.appendChild(h);

var x = document.getElementsByTagName("h1")[3]; // delete bye h1 tag
myDiv.removeChild(x);
