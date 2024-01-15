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




