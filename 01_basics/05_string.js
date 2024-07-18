const name="kavya"
const repoCount=50

// outdated syntax :console.log(name+repoCount+"Value");
//modern way  syntax
console.log(`My name is  ${name} and my repoCount is ${repoCount}`);

//another way to define string
const gameName= new String('kavyak')

console.log(gameName[0]);
console.log(gameName.toUpperCase);
//console.log(gameName._proto._);
console.log(gameName.charAt('3'));
console.log(gameName.indexOf('v'));

const newString= gameName.substring(0,3);
console.log(newString);

const anotherString= gameName.slice(-3,2);
console.log(anotherString);

//trim
//replace
//include
//split
