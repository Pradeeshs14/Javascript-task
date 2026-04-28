//Task 1: Student Form Function

function studentForm(name, age, course){
console.log("Name:",name);
console.log("Age:",age);
console.log("Course:",course);
}

studentForm("Naveen",22,"MERN");

//output:
// Name: Naveen
// Age: 22
// Course: MERN

//================Task 2: Calculator Function======================

function calc(a,b){
console.log("Addition:",a+b);
console.log("Subtraction:",a-b);
console.log("Multiplication:",a*b);
}

calc(10,5);

//output:
// Addition: 15
// Subtraction: 5
// Multiplication: 50

//================Task 3: Reusable Greeting======================

function greet(name){
console.log("Hello",name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");

//output:
// Hello Kamal
// Hello Praveen
// Hello Sai

//================Task 4: Return Value======================

function square(num){
return num*num;
}

console.log(square(5));

//output:
// 25

//================Task 5: Scope Check======================

function test(){
let secret="javascript";
console.log(secret);
}

test();
// console.log(secret);  //error statement so commented out


//output:
// javascript
// ReferenceError: secret is not defined
//secret is only exists inside the function block

//================Task 6:Merge Arrays======================
let boys=["car","bike"];
let girls=["doll","teddy"];

let items=[...boys,...girls];

console.log(items);

//output:
// ["car","bike","doll","teddy"]

//================Task 7: Rest Parameter======================

function sumAll(...nums){

let total=0;

for(let num of nums){
total+=num;
}

console.log(total);
}

sumAll(10,20,30,40);
//output:
// 100  

//=================Task 8: Array Destructuring======================

let colors=["red","green","blue"];

let [c1,c2,c3]=colors;

console.log(c1);
console.log(c2);
console.log(c3);
//output:
// red
// green
// blue

//=================Task 9: Object Destructuring======================
let emp={
name:"Naveen",
role:"Developer",
salary:"5LPA"
};

let {name,role}=emp;

console.log(name,role);
//output:
// Naveen Developer 

//=================Task 10:Generator Function======================
function* offerGen(){
yield "10% cashback";
yield "20% cashback";
yield "50% cashback";
yield "Try again";
}

let offer=offerGen();

console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);

let result=offer.next();

if(result.done){
console.log("No more offers");
}

//output:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// No more offers

//=================Task 11 : Curry Function=========================

function add(a){
return function(b){
return function(c){
return a+b+c;
}
}
}

console.log(add(10)(20)(30));
//output:
// 60   

//=================Task 12: Marks Analyzer=========================

function marks(...nums){

let total=0;

for(let n of nums){
total+=n;
}

let avg=total/nums.length;

console.log("Total =",total);
console.log("Average =",avg);

}

marks(80,90,70,60);

//output:
// Total = 300
// Average = 75 

//=================Employee Registration System=========================

function register(name,role,...skills){

console.log("Name:",name);
console.log("Role:",role);
console.log("Skills:",skills.join(" "));

}

register(
"Naveen",
"Frontend",
"HTML",
"CSS",
"JS",
"React"
);

//output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React    
