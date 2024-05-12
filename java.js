// var j =3;
// console.log(j);

// try{
//     consolee.log(o);
//     alert("hello")
// }
// catch(err){
//     console.log(err.message)
// }
     
// let mul = (a,d) => a*d;
// console.log(mul(2,2));

// const student = {
//     name : "waleed",
//     age :23,
//     info : function(){
//         return (this.name + " is " + this.age + " years old. " );
//     }
// };
// console.log(student.info());
// try{
//     let name;
//     let age;
//     const person = {
//         name : "waleed",
//         age :20,
//         info : () => ` ${this.name} is ${this.age} years old. `
        
//     };
//     console.log(person.info());
// }
// catch(srr){
//     console.log(srr.message);
// }

// try {
//     const person = {
//         name: "waleed",
//         age: 20,
//         info: () => `${this.name} is ${this.age} years old.`
//     };
// } catch(err) {
//     console.log(err.message);
// }


// function greet(name, callback) {
//   console.log('Hello, ' + name + '!');
//   callback(); // Calling the callback function
// }

// function sayGoodbye() {
//   console.log('Goodbye!');
// }

// greet('Alice', sayGoodbye); // Passing sayGoodbye as a callback



// const a = [1,2,3,4,5];
// let sum = 0;
// for(let i =0;i < a.length   ;i++){
//     sum = a + sum;
// }
// console.log(sum);
// @param {string} val
//  @return {Object}

/**
 * @param {string} val
 * @return {Object}
 */

var expect = function(x) {
    let y;
    function toBe(y){
        if(x === y){
            return {"VALUE" : true};
        }
        else{
            return "Not Equal" 
        }
    }
    function notToBe(x){
        if(x !== y){    
            return {"VALUE" : true};
        } 
        else{
            return "Equal";
        }
    }
    return{ toBe ,notToBe};
};
expect().toBe(7);
console.log(expect().toBe(7));
expect(5).notToBe(5);
console.log(expect(5).notToBe(5));

// function makeAdder(x) {
//     return function (y) {
//       return x + y;
//     };
//   }
  
//   const add5 = makeAdder(5);
//   const add10 = makeAdder(10);
  
//   console.log(add5(2)); // 7
//   console.log(add10(2)); // 12