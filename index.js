// Javascript prototypes


// function Person(first, last, age, eyecolor) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eyecolor;
//   }
  
//   Person.prototype.car="Audi"
//   const myFather = new Person("John", "Doe", 50, "blue");
//   const myMother = new Person("Sally", "Rally", 48, "green"); 
//   console.log(myFather.car)
//   console.log(myMother.car)
//   console.log(Person.car)

//myFather and myMother both inherits the  properties of Person prototypes


// callback function


// function fetchData(url,callback){
// setTimeout(()=>{
// const Data={message:'data fectch sucessfully'}

// callback(Data);

// },1000)



// }
// function processData(data){

// console.log(data);

// }


// fetchData("https://serpapi.com/search.json?q=Apple&engine=google_images&ijn=0",processData)


// Higher Order Function

// function HOF(callback) {
// const result=42

// callback(result)

// }

// function processData(x){
//  console.log(x)

// }



// HOF(processData)



// // Higher-order function that returns a function
// function multiplyBy(factor) {
//   // This function is returned by the higher-order function
//   return function (number) {
//     return (number +" " +factor);
//   };
// }

// // Using the higher-order function to create a new function
// const multiplyByTwo = multiplyBy(2);

// // Using the returned function
// const result = multiplyByTwo(5);
// console.log(result); // Output: 10

// Polyfills for map,filter,reduce
// if(!Array.prototype.customMap){
// Array.prototype.customMap=function(cb){
//   let temp=[]
//   for(let i=0;i<this.length;i++){
//   temp.push(cb(this[i],i,this))

//   }
//   return temp;

// }
// Array.prototype.customFilter=function(cb){
//   let temp=[]
//   for(let i=0;i<this.length;i++){
//   if(cb(this[i],i,this))
//   temp.push(this[i])

//   }
//   return temp;

// }
// Array.prototype.customReduce = function(callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];

//   for (let i = 0; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };


// }


// const nums=[2,4,5,7]
// const result1=nums.customMap((num)=>num*2);
// const result2=nums.customFilter((num)=>num>5);
// const result3=nums.customReduce((acc,num)=>acc+num,0);
// console.log(result1);
// console.log(result2);
// console.log(result3);


// Write Difference between map and forEach 


// const arr=[2,5,3,4,7]

// const mapResult=arr.map((num)=>num*2)

// const forEachResult=arr.forEach((num,i)=>arr[i]=num*2

// )

// console.log(mapResult+" "+forEachResult+" "+arr)
//print 4,10,6,8,14 undefined 4,10,6,8,14


// ****Hoisting in JavaScript
//Function Hoisting :- it gives reference error because of local scope

// sayHello()
// giveAnswer()

// function sayHello(){
                         // console.log('How Are You?');

// function giveAnswer(){
// console.log('I am fine,what is about you?');

// }


// }

//it gives proper result
// sayHello()


// function sayHello(){
// console.log('How Are You?');
// giveAnswer()

// function giveAnswer(){
// console.log('I am fine,what is about you?');

// }


// }

// Hoisting var variables



// console.log(name)
// // undefined

// var name = "Rup"
// //If the interpreter did not know, you would get name is not defined. 
// console.log(myname);
// //We get the name is not defined error when we try to access name. The interpreter "does not know" about this variable



// function isPrime(number) {
//     if (number < 2) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function printPrimesUpTo(limit) {
//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             console.log(i);
//         }
//     }
// }

// // Example: Print prime numbers up to 20
// printPrimesUpTo(20);
// Function to perform calculations
// const readline = require('readline');

// // Function to perform calculations
// function calculate(operator, num1, num2) {
//     switch (operator) {
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '*':
//             return num1 * num2;
//         case '/':
//             // Check if dividing by zero
//             if (num2 !== 0) {
//                 return num1 / num2;
//             } else {
//                 return "Cannot divide by zero";
//             }
//         default:
//             return "Invalid operator";
//     }
// }

// // Create an interface for reading input
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });


// rl.question("Enter operator (+, -, *, /): ", (operator) => {
//     rl.question("Enter first number: ", (num1) => {
//         rl.question("Enter second number: ", (num2) => {
//             // Convert input to numbers
//             num1 = parseFloat(num1);
//             num2 = parseFloat(num2);

//             let result = calculate(operator, num1, num2);
//             console.log(`Result: ${result}`);

//             // Close the interface
//             rl.close();
//         });
//     });
// });

//**** */ this Keyword

//valure of this keyword in javaScript in a globalscope and localscopewith non strict mode window object or in non strict modev it will be undefined when in local scope

 //Global Context:

   // If this is used in a regular function that is not a method of an object, and it's not inside another function (like a callback), it refers to the global object (in a browser environment, it's usually window).


// function add() {
//     console.log(this);
// }


// add();

// Method Context:

//     When a function is a method of an object, this refers to the object that the method is called on.

// const obj={
//     a:10,
//     add: function () {
//         console.log(this);
//     }

// }


// obj.add()



// Constructor Context:

//     When a function is used as a constructor with the new keyword, this refers to the newly created instance


// function student(name,roll) {
//     this.name=name
//     this.roll=roll
    
// }

// const newStudent=new student('rup',24);
// console.log(newStudent.name +" "+newStudent.roll);
// Arrow Functions:

//     Arrow functions do not have their own this context. They inherit this from the enclosing scope (lexical scoping).

// const arrowFunction = () => {
//     console.log(this);
//   };
  
//   arrowFunction(); // 'this' refers to the enclosing scope (e.g., the global object)
  

// ***Promise

// let promise=new Promise((resolve,reject)=>{
// reject("I am resolved ")

// }).then((x)=>{
// console.log(x)
// console.log("resolve")

// }).catch((error)=>{
//     console.log(error);
//     console.log("reject")
// })




// const promise1=new Promise((resolve,reject)=>
// {
// //async task
// //DB calls,network

// setTimeout(() => {
//    resolve("Async task is complete");
// }, 10000);


// }
// ).then((res)=>console.log(res))



// const promise2=new Promise((resolve,reject)=>{
//    setTimeout(() => {
//     throw new Error("Please check ")
//    }, 10000);

// }).then((res)=>console.log(res)).catch((error)=>console.log(error))

// const delay = (milliseconds) => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(`Delayed for ${milliseconds} ms`);
//       }, milliseconds);
//     });
//   };
  
//   delay(2000)
//     .then((message) => {
//       console.log(message);
//       return delay(1500);
//     })
//     .then((message) => {
//       console.log(message);
//       throw new Error('An error occurred');
//     })
//     .catch((error) => {
//       console.error(error.message);
//     });




// fetch('https://dummyjson.com/products/1')
// .then(res => res.json())
// .then(json => console.log(json))

// fetch("https://api.github.com/users/octocat")
//   .then((response) => response.json())
//   .then((data) => {
//     try {
//       //processing received data
//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   })
//   .catch((error) => console.log(error));


// ***lexical scoping and closure in javaScript

//lexical
// const myFunction = () => {
//   let myValue = 2;
//   console.log(myValue);

//   const childFunction = () => {
//        console.log(myValue += 1);
//   }

//   childFunction();
// }

// myFunction();




// //closure

// function outer(){
// let name="rup"
//  function inner(){

//   console.log(name);
//  }
//   return inner;
// }

// const x=outer();
// x();

// call appluy bind 

// const name1 = {
//   firstname: "rup",
//   title: 'sarkar',
//   printFullname: function() {
//     console.log(this.firstname + " " + this.title);
//   }
// };

// const name2 = {
//   firstname: "dip",
//   middlename:"kumar"
//   ,
//   title: 'sarkar'
// };

//name1.printFullname.call(name2);

// const name1 = {
//   firstname: "rup",
//   title: 'sarkar',

// };

// const name2 = {
//   firstname: "dip",

//   title: 'sarkar'
// };
//  const  printFullname= function(middlename) {
//   console.log(this.firstname + " " + middlename+" "+this.title);
// }
// printFullname.apply(name1,["kumar"]);
// printFullname.apply(name2,["kumar"]);

// printFullname.call(name1,"kumar");
// printFullname.call(name2,"kumar");

// const myName1=printFullname.bind(name1,"kumar");
// const myName2=printFullname.bind(name2,"kumar");
// myName1();
// myName2();

//**** Debouncing in javaScript

// const input=document.getElementById('input');
// input.addEventListener('input',async (e)=>{
// const response=await fetch(`https://dummyjson.com/products/search?q=phone`);
// const data=await response.json();
// console.log(e.target.value)

// })


// const input=document.getElementById('input');
// console.log(input);
// input.addEventListener('input', (e)=>{
// console.log(e.target.value)
// })



// const debounce=(fn,delay=1000)=>{
//   let timer;
  
//   return (...args)=>{
//   clearTimeout(timer)
//    timer=setTimeout(()=>{
//   fn(...args)
  
//   },delay)
  
  
//   }
  
//   }
//   const handler=async (e)=>{
//       const response=await fetch(`https://dummyjson.com/products/search?q=phone`);
//       const data=await response.json();
//       console.log(data.products);
//   }
  
//   const processChange=debounce(handler,1000);
//   const input=document.getElementById('input');
//   input.addEventListener('input',processChange)
// spreadoperator


// const arr1=[1,2,3,4,5]
// console.log(...arr1,7,6);

// //remove repetation
// const arr2=[5,5,6,6,8,8,8,8]
// console.log(...new Set(arr2));

// const name="rupkumar"
// console.log(...name);

  //rest operator in javascript

// const multiplyByArgs=(x,y,...data)=>{

// return data.map((num)=>{
// return num*x+y;

// })

// }

// console.log(multiplyByArgs(2,3,6,9));

// alert("some code");
// // "use strict" below is ignored--it must be at the top

// function Area(res,...args){
//   let prod=1;
//   for( let i of x ) prod*=i
//   return prod===res
// }




// let x = Area(15,3,5)
// console.log(x)


//**make string to titlCas
// const x="hi, rupkumar sarkar"


// const makeCapital=(val)=>{
  
// return val.split(' ').map((y)=>{

// return y.charAt(0).toUpperCase()+y.substr(1).toLowerCase();

// })

// }

// console.log(makeCapital(x).join(' ')
// );

//*****implement deeep clone
// function deepClone(obj){
// return JSON.parse(JSON.stringify(obj))

// }

// const obj={
// name:'rup'

// }

// console.log(deepClone(obj));  

//******implement merge sort

// const arr1=[3,6,8,7]
// const arr2=[9,5,6,10]

// function mergeArray(arr1,arr2) {
//   return [...arr1,...arr2].sort((a,b)=>{
// return a-b

//   })
// }




// console.log(mergeArray(arr1,arr2));

// *******Anamgram check

// function Anagram(str1,str2){
//  const x=str1.replace(/\s/g,'').split('').sort().join('')
//  const y=str2.replace(/\s/g,'').split('').sort().join('')
// return x===y

// }
//  console.log(Anagram("cat","act"));






// Array.prototype.customreduce=function (cb,intialValue) {
//  let acc=intialValue!==undefined?intialValue:this[0];

   
// for(let i=0;i<this.length;i++)
//   acc=cb(acc,this[i],i,this)
//   return acc;
  
// }

// const num=[2,4,6,8,4,5]
// const val=num.customreduce((acc,curr)=>{

// return acc+curr;

// },0)

// console.log(val);
// const replacer = (key,val) => typeof val === 'undefined' ? null : val;
// const undefinedToNull = (arg) => JSON.parse(JSON.stringify(arg,replacer));


// undefinedToNull({a: undefined, b: 'BFE.dev'})
// // {a: null, b: 'BFE.dev'}

// undefinedToNull({a: ['BFE.dev', undefined, 'bigfrontend.dev']})
// console.log(undefinedToNull({a: undefined, b: 'BFE.dev'}));



// function myObjectCreate(proto) {
//   // your code here
// if(proto===null && typeof proto!==Object)
// {
//   throw new Error("enpty object")
// }
// function Fn(){
// }
// Fn.prototype=proto

// console.log(Fn.prototype.name);

//  return new Fn();
// }

// console.log(myObjectCreate({name:'rup'}))


// ********************Polyfill










