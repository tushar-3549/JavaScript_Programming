/* setTimeout(() => {
   console.log("Tushar");
}, 2000) */

/* setTimeout(output(), 3000);
function output(){
   console.log("Tushar Ahmed");
} */

let button = document.querySelector("#btn");
let message = document.querySelector(".msg");

            // setTimeout

/* button.addEventListener('click', func);
function func(){
   message.textContent = "Successful Done ! Congratulation.";

   setTimeout(() => {
      message.textContent = "";
   },3000)
} */

            // setInterval

/* button.addEventListener('click', countDegit);
function countDegit(){
   let count = 1;
   message.textContent = count;

   setInterval(() => {
      count++;
      message.textContent = count;
   }, 1000)
} */

              // Make a  Clock

button.addEventListener('click', startClock);
function startClock(){
   var date = new Date();
   var hours = date.getHours();
   var minutes = date.getMinutes();
   var seconds = date.getSeconds();

   hours = FormatTime(hours);
   minutes = FormatTime(minutes);
   seconds = FormatTime(seconds);


   var time = hours + ":" + minutes + ":" + seconds;
   // console.log(time);
   message.textContent = time;

   setInterval(startClock, 1000);

}
function FormatTime(value){
   if(value < 10){
      value = "0" + value;
   }
   return value;
}
