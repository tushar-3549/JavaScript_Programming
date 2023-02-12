
for (var i = 0; i < 2; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var txt = this.innerHTML;
        audio_play(txt);
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
