/* var variable = document.querySelector("#department");
variable.addEventListener('change', handleDept);
function handleDept(e){
    console.log(e);
    console.log(e.target.value);
} */


const programs = document.querySelectorAll("input[name=program]");
//console.log(programs);

Array.from(programs).map((program) => {
    program.addEventListener("change", programHandler);
});

function programHandler(e) {
    if (e.target.checked) {
        console.log(e.target.value);
    }
}
