// console.log("Tushar");

// alert("Alert")

// document.write("I Love Bangladesh");
// document.write("<h1>I Love Bangladesh</h1>");



// document.write("Name : Tushar Ahmed </br>");
// document.write("BSc in CSE");


// var name = "Tushar";
// document.write(name);
// name = "Maruf";
// document.write(name);


// var num = 20;
// num=toString(num)  
// console.log(typeof(num));


// var num = "20";
// num = parseInt(num);  
// console.log(typeof(num));


// var n = 20.345678
// console.log(n.toFixed())
// console.log(n.toFixed(3))
// console.log(n.toPrecision(4))


// console.log(Number("12"))
// console.log(typeof(Number("12")))
// console.log(Number(true))
// console.log(Number(false))


// console.log("Md " + "Maruf " + "Ahmed " + "Tushar");
// var firstName = "Tushar";
// var lastName = " Ahmed";
// var fullName = firstName + lastName;
// document.write("My name is "+ fullName);

// num1 = 10
// num2 = 20
// document.write("Num1 : " +num1, " Num2 : "+num2);


// var name = "Tushar";
// var l = name.length;
// document.write(l);


// var i = prompt("Enter your name : ");
// document.write("Number of Character : " + i.length);


// var text = "Tushar";
// document.write(text.charAt(2));


// var text = "Tushar Ahmed"
// text = text.toUpperCase();
// document.write(text);


// var tx1 = "My name is ";
// var tx2 = "Tushar Ahmed";
// var tx = tx1.concat(tx2);
// document.write(tx);


// var tx = "Bangladesh";
// var ans = tx.slice(2,5); // 2 index theke (5-2)=3 ta word dekhabe
// document.write(ans);


// console.log(2**3);
// var x = 3;
// x *= 5;
// console.log(x);


// var n1 = prompt("Enter first number : ");
// var n2 = prompt("Enter second number : ");
// n1 = parseInt(n1, 10);
// n2 = parseInt(n2, 10);
// var sum, sub;
// sum = n1 + n2;
// document.write("Summation : " + sum + "<br/>");
// sub = n1 - n2;
// document.write("Substraction : " + sub);



// var base = parseFloat(prompt("Enter base: "));
// var height = parseFloat(prompt("Enter height: "));
// var area = (base * height) / 2;
// document.write("Area of Traingle : " + area);



// var Fahrenheit, Celsius;
// Fahrenheit= parseFloat(prompt("Enter Fahrenheit :"));
// Celsius= (Fahrenheit-32)*(5/9);
// document.write("Celsius : ="+ Celsius);



// console.log(20 == "20") // check value 
// console.log(20 === "20") // check data type 
// console.log(25 != 20)
// var n1 = 20;
// var n2 = 15;
// var n3 = 12;
// console.log(n1 > n2 && n1 > n3);
// console.log(n1 > n2 || n1 > n3);
// console.log(!(22>20));



                //.......  if else condition 
// var marks = parseInt(prompt("please enter your marks: "));
// if(marks>=80){
// 	document.write("you got A+ ");
// }
// else if(marks>=75){
// 	document.write("you got A ");
// }
// else if(marks>=70){
// 	document.write("you got A- ");
// }
// else if(marks>=65){
// 	document.write("you got B+ ");
// }
// else if(marks>=60){
// 	document.write("you got B ");
// }
// else if(marks>=55){
// 	document.write("you got B- ");
// }
// else if(marks>=50){
// 	document.write("you got c+ ");
// }
// else if(marks>=45){
// 	document.write("you got c ");
// }
// else if(marks>=40){
// 	document.write("you got D ");
// }
// else if(marks>100){
// 	document.write("you input wrong data ");
// }
// else{
// 	document.write("you are failed");
// }



//     letter=prompt("Enter a letter: ");
//     if(letter=="a" || letter=="e" || letter=="i" ||letter=="o" ||letter=="u")
//       Console.log("Vowel");
//     else
//     console.log(" consonent");


                  //.............     switch case 
// var letter = prompt('Enter any digit :');
// letter = letter.toLowerCase();
// switch(letter){
//     case 'a':
//     case 'e':
//     case 'i':
//     case 'o':
//     case 'u':
//     console.log('vawel');
//     break;
//     default:
//         console.log('consonant')
// }


              //.............. for loop
// var input = prompt("Enter anything : ")
// for (var k = 10 ; k >= 1 ; k = k-1){
//     // document.write(input + "<br>")
//     console.log(input)
// }
// document.write("<h1>End</h1>");


              //............ while() loop
// var i = 1;
// var sum = 0;
// while (i <= 100) {
//     if (i % 3 == 0 && i % 5 ==0) {
//         sum = sum + i;
//     }
//     i++;
// }
// document.write(sum);


        //...........  do...while() loop
// var i = 1;
// do{
//   document.write(" "+i);
//   i++;
// }
// while(i<=10)



           //............. continue
// for (var i = 1; i <= 100; i++) {
//   if (i % 2 != 0) {
//     continue; // skip 
//   }
//   document.write("  " + i)

// }
           //............. break
// for (var i = 1; i <= 100; i++) {
//   document.write(" " + i)
//   if (i == 8) {
//     break;
//   }
// }


            //................. ternary operator 
// var number = Number(prompt('Enter a number'));
// var result = number>0? 'positive' : number < 0? 'Negative'  : 'Zero';
// console.log(result);


          //....................... function
// function addition(x, y) {
//     var add = x + y;
//     document.write("The addition value is : " + add +"<br/>");
// }
// function subtraction(x, y) {
//     var sub = x - y;
//     document.write("The subtraction value is : " + sub +"<br/>");
// }
// function multiplication(x, y) {
//     var mul = x * y;
//     document.write("The multiplication value is : " + mul +"<br/>");
// }
// function division(x, y) {
//     var div = x / y;
//     document.write("The division value is : " + div +"<br/>");
// }
// function modulus(x, y) {
//     var mod = x % y;
//     document.write("The modulus value is : " + mod);
// }
// addition(10, 20);
// subtraction(10, 20);
// multiplication(10, 20);
// division(10, 20);
// modulus(10, 20);


        //.................. IIFEs method 
// (function sum(a,b){
//     var sum= a+b;
//     document.write("Sum of your value="+ sum);
// })(3, 5);
//         // function expression
// var display = function(msg){
//   console.log(msg);
// }
// display("I am Tushar");


           //................. Array 
/* var names  = new Array(5);
names[0] = "Tushar";
names[1] = "Maruf";
names[2] = "Sakib";
names[3] =  "Tamim";
names[4] = "King Khan";
console.log(names); */

/*  var names = ["Tushar", "MAruf", "Sakib", "Emon", "Akter","Abdulla","Milon"];
 console.log(names);
 console.log(names.length);
 names.push("Masrafi");
 console.log(names.length);
 console.log(names);
 names.pop(); */
 
/*  var counrry1 = ["Bangladesh", "india","pakistan"];
 var counrry2 = ["arab", "egypt","malay"];
 console.log(counrry1.length);
 var country = counrry1.concat(counrry2);
 console.log(country); */


/*var num, sum = 0;
num = new Array(5);
for (var i = 0; i < 3; i++) {
  num[i]=parseInt(prompt("Enter value:"));
  console.log(num[i]);
  sum = sum + num[i];
}
console.log("Summation: " + sum);*/



/* var names = ["Sakib", "Tamim", "Masrafi", "Musfiq", "Mahmudullah"];
console.log(names);

//shift opposite of pop
names.shift();
console.log(names);

//unshift opposite of push
names.unshift("Corona Virus");
console.log(names);

//Adding elements using splice
names.splice(2, 1, "Tushar", "Maruf");
console.log(names);

//removing elements using splice
names.splice(1, 2);
console.log(names);

//slice method
var newArray = names.slice(1);
console.log(newArray);

//sort method
var sortedNames = names.sort();
names.reverse();
console.log(sortedNames);

var numbers = [60, 50, 40, 30, 20, 1];
numbers.sort(function (a, b) {
  return a - b;  // reverse sort korte gele: b-a hobe 
})

console.log(numbers);
 // sort reverse 
var num = [50, 10, 30, 40, 20];
var sortedName = num.sort();
num.reverse();
document.write(sortedName + "<br>"); */


    //...................... 1 D Array

/* let scores = [10, 30, 40, 50, 80]
function minimumScores() {
  var min = scores[0]
  for (var x = 1; x < scores.length; x++) {
    if (min > scores[x]) {
      min = scores[x];
    }
  }
  return min;
}
var minScores = minimumScores();
console.log(minScores); */


          // ...................... 2D Array
// function highScoreRun(playerInfo) {
//   let highScorer = playerInfo[0][0];
//   let highScore = playerInfo[0][1];

//   for (var x = 0; x < playerInfo.length; x++) {
//     if (highScore < playerInfo[x][1]) {
//       highScore = playerInfo[x][1];
//       highScorer = playerInfo[x][0];

//     }
//   }

//   return highScorer

// }

// let playerInfo = [['Sakib', 88], ['Mahmudullah', 77], ['Mustafizur', 62], ['Mushfiqur', 60], ['Tamim', 92]];

// names = highScoreRun(playerInfo);
// console.log(names);



         // ...................... Object

/* function Student(name, age, cgpa, lang) {
  this.name = name;
  this.age = age;
  this.cgpa = cgpa;
  this.lang = lang;

  this.display = function () {
    console.log(this.name);
    console.log(this.age);
    console.log(this.cgpa);
    console.log(this.lang);
  }
}
var student1 = new Student("Maruf", 25, 4.00, ["bengli", "chines", "english"]);
var student2 = new Student("Tushar", 22, 3.00, ["bengli", "hindi", "english"]);
var student3 = new Student("Anik", 23, 2.50, ["bengli", "potuguse", "english"]);

student1.display();
student2.display();
student3.display();
 */

     //...................... Math 

// console.log(Math.floor(2.3))
// console.log(Math.ceil(2.3))
// console.log(Math.sqrt(25))
// console.log(Math.sin(45))
// console.log(Math.max(2,3,9))


   // ........................Guessing Game 


// var winningNumber = 0;
// var lostNumber = 0;
// for (i = 1; i <= 5; i++) {
//   var gassNum = parseFloat(prompt("Enter number bitween 1-5: "));
//   var randomNum = Math.floor(Math.random() * 5) + 1;
//   if (gassNum == randomNum) {
//     document.write("You won" + "<br>");
//     winningNumber++;
//   }
//   else {
//     document.write("You lost. The rendom number was:" + randomNum + "<br>");
//     lostNumber++
//   }
// }
// document.write("You total win for " + winningNumber + " times" + "<br>");
// document.write("You total lost for " + lostNumber + " times" + "<br>");


          //.................... Date object

// var date = new Date();
// document.write(date);

// var year = date.getFullYear();
// console.log(year);

// var month = date.getMonth();
// console.log(month);



     // .......................forEach() loop

// var num = [2,4,7,1,5];
// num.forEach(func);
// function func(x){
//   console.log(x);
// }

// var num = [2,1,3,4,7];
// num.forEach(function(x){
//    console.log(x);
// })

// var num = [2,1,3,4,7];
// var ans = [];
// num.forEach(function(x){
//    ans.push(x*x);
// })
// console.log(ans);

var num = [2,1,3,4,7];
num.forEach(function(x, index, arr){
   arr[index] = x+3;
})
console.log(num);

