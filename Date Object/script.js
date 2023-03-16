function demo(){
  var id = document.getElementById("result");
  var dateTime = new Date();
  var hours = dateTime.getHours();
  var minutes = dateTime.getMinutes();
  var seconds = dateTime.getSeconds();

  var watch = hours % 12 + ":" + minutes + ":" + seconds;
  var ampm = hours >= 12 ? 'PM' : 'AM';
  watch += ' ' + ampm;

  id.innerHTML = watch;
}
setInterval(demo,1000);
