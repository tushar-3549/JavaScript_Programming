
for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;
        audio_play(txt);
        playAnimation(txt);
    });
}
function audio_play(txt) 
for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;
        audio_play(txt);
        playAnimation(txt);
    });
}
function audio_play(txt) {
    switch (txt) {
        case "Button 1":
            var audio = new Audio("first.mp3");
            audio.play();
            break;
        case "Button 2":
            var audio = new Audio("second.mp3");
            audio.play();
            break;
    }
}
//       NOT   WORKING ........ ??
// function playAnimation(txt){         
//     var selected_button = document.querySelector("."+txt);
//     selected_button.classList.add("anima");
// }

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = event => {
        // event.currentTarget.classList.toggle("anima")   
        for (let x = 0; x < buttons.length; x++) {
            buttons[x].classList.remove("anima")
        }
        event.currentTarget.classList.add("anima")

    }
}

/*        NOTE : 
buttons[i].onclick = event => {}
Is basicle the same as
buttons[i].addEventListener("click", function(){

})

But i used ES6 arrow function. But its the same thing. You can write it how you want... i just prefer ES6 method.
event.currentTarget is the same as "this" in javascript. But "this" in javascript behaves not the same way when you use ES6. So you need to instead use event.currentTarget
so you could instead write
buttons[i].addEventListener("click", function(){
  this.classList.toggle("anima")
}) */
    switch (txt) {
        case "Button 1":
            var audio = new Audio("first.mp3");
            audio.play();
            break;
        case "Button 2":
            var audio = new Audio("second.mp3");
            audio.play();
            break;
    }
}
//       NOT   WORKING ........ ??
// function playAnimation(txt){         
//     var selected_button = document.querySelector("."+txt);
//     selected_button.classList.add("anima");
// }

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = event => {
        // event.currentTarget.classList.toggle("anima")   
        for (let x = 0; x < buttons.length; x++) {
            buttons[x].classList.remove("anima")
        }
        event.currentTarget.classList.add("anima")

    }
}
