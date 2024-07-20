//object literals
const mySym = Symbol("key1")


const jsUser ={
    name:"kavya",
    "full name": "kumari kavya",
    [mySym]: "mykey1",
    class:"final yr",
    isLoggedIn:false,
    email:"kavya@gmail.com",
    age:22,
    location:"nagpur",
    lastLoggedIn:["monday","friday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());