var count = 0;
document.querySelector("textarea").addEventListener("keypress", function(event){
    count++;
    var txt = event.key;
    document.querySelector("p").innerHTML="You have pressed "+count;
});


/* document.querySelector("textarea").addEventListener("keypress", function(event){
    var txt = event.key;
    document.querySelector("p").innerHTML="You have pressed "+txt;
}); */


/* document.addEventListener("keypress", function(event){
    var txt = event.key;
    document.querySelector("p").innerHTML="You have pressed "+txt;
}); */



/* 
for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;
        audio_play(txt);
        playAnimation(txt);
    });
}

document.addEventListener("keypress", function(event){
    var txt = event.key;
    audio_play(txt);
    playAnimation(txt);
});

function audio_play(txt) {
    switch (txt) {
        case "a":
            var audio = new Audio("first.mp3");
            audio.play();
            break;
        case "b":
            var audio = new Audio("second.mp3");
            audio.play();
            break;
    }
}

let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = event => { 
        for (let x = 0; x < buttons.length; x++) {
            buttons[x].classList.remove("anima")
        }
        event.currentTarget.classList.add("anima")

    }
}
 */
