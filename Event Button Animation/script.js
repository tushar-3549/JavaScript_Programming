
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
