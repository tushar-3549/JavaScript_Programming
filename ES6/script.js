/* let name = "Tushar";
console.log(`My name is ${name}. I am a student`); */

/* const sub = (x, y) => {
   let sub = x - y;
   console.log(sub);
}
sub(6,2); */


/* x = 20;
console.log(x);
var x; */

/* function msg(txt = "Default parameter"){
   console.log(`${txt}`);
}
msg();
msg("My name is Tushar"); */


//                       Rest Perameter
/* function numbers(x,y,...z){
   console.log(`x = ${x}, y = ${y}, z = ${z}`);
}
numbers(1,2,3,4,5); */


//                       spread operator 
/* function sum(x, y, z){
   return x+y+z;
}
let num = [1,2,3]
console.log(sum(...num));
let n1 = [4,...num,5]
console.log(n1);
let n2 = [7,8,9]
let concatation = [...n1, ...n2]
console.log(concatation) */

/* let s1 = {
   name : "Tushar",
   program : 'BSc in CSE'
}
let s2 = {
   name : "Maruf",
   nationality : 'Bangladesh'
}
let ans = {...s1, ...s2}
console.log(ans) */


//                     object literal

/* function info(name, age){
   return{
      // name:name,
      // age:age
      name,
      age
   }
}
console.log(info("Tushar", 21))

let msg = {
   func(){
      return `Hi, I'm object function`;
   }
}
console.log(msg.func()); */



//                      Arrow function

/* const print = () => {
   console.log("Hello I'm Arrow function");
}
print();
const print1 = () => console.log("Example 2"); // only works for one line 
print1();
function add(num1, num2){
   return num1+num2;
}
console.log(add(1,2));
const add1 = (num1,num2) =>{
   return num1+num2;
}
console.log(add1(4,2)); */



/* 
var students = [
   {
      id: 101,
      name: "Tushar",
      gpa: 4.00
   },

   {
      id: 104,
      name: "Maruf",
      gpa: 3.00
   },

   {
      id: 106,
      name: "Anik",
      gpa: 5.00
   },
]

//                 traditional function:
function studentsName1() {
   return students.filter(function (x) {
      return x.gpa > 3;
   }).map(function (y) {
      return y.name;
   })
}
console.log(studentsName1());
//arrow function:
const studentsName2 = () => students.filter((x) => x.gpa > 3).map((y) => y.name);
console.log(studentsName2()); */


//                 forEach() loop

/* var number = [20, 30, 40, 50, 60];
var square = [];
number.forEach(function (x) {
   square.push(x + 5);
});
console.log(square) */


//                 find() , findIndex() 

/* 
num = [1,2,3,4,5]
const oddNumber = (x) => {
   if(x % 2 == 1){
      return x;
   }
}
let firstOdd = num.find(oddNumber);
console.log(firstOdd);
let firstOddIndex = num.findIndex(oddNumber);
console.log(firstOddIndex); */


//                    string method


/* //startswith(searchstring,position) -> check a string starts 

const messaage1 = "Today is Friday"
console.log(messaage1.startsWith('Today'))

const messaage = "Today is Friday"
console.log(messaage.startsWith('Today', 1))

//endswith(searchstring,length) -> check a string ends 

const messaage2 = "Today is Friday"
console.log(messaage2.endsWith('Friday'))

//includes(searchstring,position) -> check if a string contains 

const messaage3 = "Today is Friday"
console.log(messaage3.includes('is'))  */


