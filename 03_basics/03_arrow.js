const user={
    username: "kavya",
    price: 999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
//user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
function chai(){
    console.log(this);//this ke andr kuch toh rkha hua h
}
chai()
// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


//arrow function
//const addTwo=(num1,num2)=>{
    //return num1+num2
   
const addTwo=(num1,num2)=>(num1 + num2)
console.log(addTwo(3,4))