//JAVASCRIPT is dynamically type gives greater flexibility in handling data.

//1. PRIMITIVE datatype

//7 types: String,Number,Boolean,null,undefined, symbol,BigInt

const score=100
const scoreVlue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123') // Symbol gives different values

console.log(id===anotherId);

//const bigNumber=345678954327686467n;


//2.Reference(Non-Primitive): Array,Objects,Functions gives returnType as datatype:OBJECT FUNCTION

const names=["kavya","silky","dog"];

let myObj={
    name:"kavya",
    age:22,
}

const myfunction=function(){
    console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);

//****************************MEMORY *****************

//STACK (Primitive) == by copy   and HEAP(Non Primitive)== by refernce

let myName="kavya"
let anotherName=myName
anotherName="silky"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"kavya@gmail.com",
    upi:"kavya123"
}
let userTwo=userOne  // same referece as userone

userTwo.email="silky@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





