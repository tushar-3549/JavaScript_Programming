const allElements = document.querySelectorAll('.element');
let count = 0;

setInterval(() => {
    allElements[count].classList.remove('present');

    if (count == allElements.length - 1) {
        count = 0;
    } else {
        count++;
    }

    allElements[count].classList.add('present');
}, 2000);



                   // wrong - Firstly tried this way
/* const AllElement = document.querySelectorAll(".element");
let count = 1;
setInterval(() =>{
    count++;
    let presentElement = document.querySelector(".present");
    presentElement.classList.remove("present");

    if(count > AllElement.length){
        AllElement[0].classList.add("present");
        count=1;
    }
    else{
        presentElement.nextElementSibling.classList.add("present");
    }
},2000); */
