btn = document.getElementById("btn");
btn.addEventListener("click", (e)=>{
    var checkbox = document.querySelectorAll("input[name='gender']:checked");
    var values = [];
    checkbox.forEach((checkbox)=>{
        values.push(checkbox.value);
    })
    console.log(values);
})
