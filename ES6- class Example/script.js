class student{
  constructor(id, name){
    this.id = id;
    this.name = name;
  }
  set setName(name){
    this.name = name;
  }
  get studentInfo(){
    return this.id + " " + this.name;
  }
}
let s1 = new student(3549, "Tushar");
// console.log(s1)
console.log(s1.id)
console.log(s1.name)
s1.setName = "Maruf";
console.log(s1.name)
console.log(s1.studentInfo);
