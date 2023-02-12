var len = document.querySelectorAll(".btn").length;
 for(var i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function (){
        var txt = this.innerHTML;
        document.querySelector("h1").innerHTML= txt + " is clicked !";
    });
 }
