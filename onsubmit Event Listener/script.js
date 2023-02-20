const form = document.querySelector("form");
const name = document.querySelector("div .div1 #name");
// console.log(name);
const password = document.querySelector("div .div3 #password");
const email = document.querySelector("div .div2 #email");

form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
    // console.log("submit");
    /* console.log(name.value);
    console.log(password.value);
    console.log(email.value); */
    const userInfo={
        name:name.value,
        email:email.value,
        password:password.value,
    };
    console.log(userInfo);
    name.value="";
    email.value="";
    password.value="";
}
