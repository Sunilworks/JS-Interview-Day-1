// Q1. difference between '==' & '==='

// let a = "SHUBHAM";
// let b = "shubham";

// console.log(typeof(a));
// console.log(typeof(b));

// console.log(a == b); //
// console.log(a === b); // 

// Q2. What are the differences between var, let and const?

// Var
//  1. Redeclare and reinitilized

// var x = 10;
// var x = 20;  // Redeclare
x = 30;  // reinitilized

// Global scope and Function Scope

// var ABC = 10;
// let PQR = 20;
// const XYZ = 30;

// Function Scope
// function funcScope(){
//     var ABC = 100;
//     let PQR = 200;
//     const XYZ = 300;
//     console.log(ABC); // 100
//     console.log(PQR); // 200
//     console.log(XYZ); // 300
// }
// funcScope()

// console.log(ABC);
// console.log(PQR);
// console.log(XYZ);

// Block Scope if(){}, switch, loop

// {
//     var ABC = 100;
//     let PQR = 200;
//     const XYZ = 300;
//     console.log(ABC); // 100
//     console.log(PQR); // 200
//     console.log(XYZ); // 300
// }

// console.log(ABC);  // 100
// console.log(PQR); // not define - error
// console.log(XYZ); // not define - error


// console.log(a);
// var a = 10;

// // Abc();
// function Abc(){
//     console.log("Section!!!");
// }



// console.log(a);
// let a = 10;

// let P = function Sum(){
//     console.log("Hi");
//     return "Hello"
// }

// console.log(P());

function Sum(a, b){
    return a * b;
}

Sum(10, 20)
Sum(20, 20)
Sum(20, 30)