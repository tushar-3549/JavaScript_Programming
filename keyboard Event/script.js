// keydown, keypress, keyup
const textarea = document.querySelector("textarea");
// textarea.addEventListener("keydown", function(){
//     console.log("keydown");
// });
// textarea.addEventListener("keypress", function(){
//     console.log("keypressed");
// });


// textarea.addEventListener("keyup", function(e){
//     // console.log("keyup");
//     // console.log(e.key);
//     // console.log(e.keyCode);
//     // console.log(e.shiftKey);
//     if(e.shiftKey){
//         console.log("Shift key pressed and value: "+e.key);
//     }
// });


textarea.addEventListener("keydown", function(e){
    if(e.repeat){
        alert("Do not repeat !");
    }
});
