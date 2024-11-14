{/*
    ############  JavaScript's execution context  ############
    
    There are two phase - 
    1. Memory Creation Phase (Hoisting)
    2. Behavior of Variables vs Functions


    In JavaScript, when the code is executed, it goes through two main phases:
    1.Memory Creation Phase (also known as Hoisting Phase): 
        ->  During this phase, the JavaScript engine allocates memory for variables and functions. 
            1.Variables declared with var are initialized to undefined, 
            2.function declarations are fully created in memory (not just hoisted, but the whole function is available).

    2.Execution Phase: 
        ->In this phase, the JavaScript engine starts executing the code line by line.
         At this point, the values assigned to variables are actually used, and the functions are called.

    When we create function and assign any value to it -> it will create its execution context i.e it will follow the above method
*/}

{/*
    In JavaScript, hosting (often called hoisting) refers to a behavior in which variable and
    function declarations are moved (or "hoisted") to the top of their containing scope during the compilation phase, before the code has actually been executed.    
*/}

/* global scope - has two parts - 1. windows Object
                                2. script scope
script m -> let aur const store hota 
windows m function and var store hote 

we can acces the windows function and var by using [windows.]
Jab local scope ata h to hume this milta h 
*/