
# JS Interview Day 1

## Q1. What are the differences between “ == “ and “ === “ operators?
1. Both are comparison operators and they      return boolean values always. The difference between both the operators is that “==” is used to compare values whereas “ === “ is used to compare both value and datatype.

2. ```js
    var x="2";  
    var y=2;
   ```

3. console.log(x==y); It returns true because it only check values not data types. It is able to check the values because in == it will do type coercion to change the data type so that the value can be compared.

4. console.log(x===y); It returns false because you can see that values are same but x is of String type and y is of Number type. You can find the type of any value by using typeof operator.

5. So in strict equal comparison operator both value and data types should be same like x=2 and y=2 otherwise it returns false.

## Q2. What are the differences between var, let and const?

### var:
    1. Redeclare and reinitilized
    2. Global scope and Function Scope
    3. Hoisting
    4. Used before introduce ES6
### let:
    1. not Redeclare and reinitilized
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6
### const:
    1. not Redeclare and Not reinitilized 
    2. no Hoisting
    3. Block scope, Global Scope
    4. TDZ
    5. introduce in ES6

## Q3. What is hoisting?

- Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. Remember that JavaScript only hoists declarations,not initialisation. Let's take a simple example of variable hoisting. Let and const keywords are not hoisted so when you try to access them before initialization they start giving you Reference error. 
    ```js
        console.log(message); //output : undefined
        var message = 'The variable Has been
                       hoisted';
    ```  
 - The above code looks like as below to the interpreter that is why it gives us undefined.
    ```js   
        var message;
        console.log(message);
        message = 'The variable Has been hoisted';
    ```
## Q4. What is a Temporal Dead Zone?
- The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone.

- Let's see this behavior with an example,

    ```js
        function somemethod() {
        console.log(counter1); // undefined
        console.log(counter2); // ReferenceError
        var counter1 = 1;
        let counter2 = 2;
        }
    ```
## Q5. What is execution context?
- Each and every browser is having a JavaScript Engine, example Google is having V8 engine, Internet Explorer is having Chakra and Mozilla Firefox is having Spider Monkey. JS engine uses a Call stack and also creates a special environment to handle the execution of the JavaScript code. This environment is known as the Execution Context. The Execution Context contains the code that's currently running, and everything that aids in its execution.

- During the Execution Context run-time, the specific code gets parsed by a parser, the variables and functions are stored in memory, executable byte-code gets generated, and the code gets executed.
- There are two kinds of Execution Context in JavaScript:

        a. Global Execution Context (GEC)

        b. Function Execution Context (FEC)

## Q6. What is an event loop and call stack?
- A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser)to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. or we can say that it stores global execution context and function execution context.

- The event loop is a constantly running process that monitors both the callback queue and the call stack. All the web apis functions like setTimeout, setInterval, fetch calls etc. will not be directly executed inside the execution context, firstly they will be moved to callback queue and then the moment call stack gets empty these functions will be pushed to call stack from callback queue by event loop.

- If the call stack is not empty, the event loop waits until it is empty and places the next function from the callback queue to the call stack. If the callback queue is empty, nothing will happen.

## Q7. What is creation phase and execution phase?
 - Compiler runs through the entire code for 2 time before actually executing the code, and generates a Global Execution context , inside this we have two phases creation phase and execution phase.

 #### Creation Phase:  
     1. In the first run, It picks all function declarations and stores them in memory with their reference. 

     2. In the second run, It picks all variables and assign undefined to them. In the event of a conflict between variable and function declaration name then that variable is ignored.

#### Execution Phase:
    1. Variables assigned with values given in code at the time of initialization.

    2. Functions executed

## Q8. What is the spread operator?
- The JavaScript spread operator (...) allows us to destructure the non-primitive data types like arrays and objects to access the elements individually.

    ```js
        const numbersOne = [1, 2, 3];
        const numbersTwo = [4, 5, 6];
        const numbersCombined = [...numbersOne, ...numbersTwo];
        console.log(numbersCombined);
    ```
    Output:
    ```js
        [1,2,3,4,5,6]
    ```
## Q9. What is meant by first class functions?
- A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed asan argument to other functions, can be returned by another function and can be assigned as a value to a variable.

    ```js
        1. Example | Assign a function to a variable
            const temp = function() {
            console.log("Hello World !!");
            }
            temp();
    
        Output: Hello World !!
    ```
- We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

    ```js
        2. Example | Pass a function as an Argument
            function sayHello() {
            return "Hello, ";
            }
            function greeting(helloMessage, name) {
            console.log(helloMessage() + name);
            }  // Pass “sayHello” function as an argument to “greeting” function
            greeting(sayHello, "JavaScript!");

        Output: Hello, JavaScript!
    ```
    ```js
        3. Example | Return a function function sayHello() {
            return function add() {
            console.log("Hello!");
           }
            }
    ```
- In this example; We need to return “add” function from another function so add function will be first class function. We can return a function because we treated function in JavaScript as a value.

## Q10. What are pure functions?
- Pure Function is a function (a block of code ) that always returns the same result if the same arguments are passed. It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.

    ```js
        Let’s see the below JavaScript Function:
            function calculateGST( productPrice ) {
            return productPrice * 0.05;
            }
    ```
- The above function will always return the same result, if we pass the same productPrice. In other words, it’s output doesn’t get effected by any other values / state changes. So we can call “calculateGST” function as a Pure function.