const input = document.querySelector("input");

input.addEventListener("blur", function () {
    // console.log("blur occured here");
      console.log(e.target.value);
    // input.value = e.target.value.toUpperCase();
});
input.addEventListener("focus", function () {
    console.log("focus occured here");
    //   console.log("focus is occured");
    //   input.style.backgroundColor = "yellow";
    //   input.style.padding = "3rem";
    //   input.style.font-weight = "bolder";
});


// input.addEventListener("focusin", function(){
//     console.log("focusin occured here");
// });
// input.addEventListener("focusout", function(){
//     console.log("focusout occured here");
// });
