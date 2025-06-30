# Theoritical

1. premitive vs reference types

- premitive types are types that are stored in stack memory and it is simple and fast and has fixed length also you can get copy from its value examples Numbers - Strings
- - reference types are types that is stored as a reference to a place in other place in memory and that doesn't have `fixed` length Examples Array - Object

2. Function Declaration vs Function expression

- Function Declaration
- - these function type gets hoisted in the beginning of the program and you can use it before the declaration place or after it syntax
    `js
  function greeting(){
    console.log("hello")
  }
`
- Function expression
  it is a function defining way that has two types anonymous function and named function
- - Hoisting ` it doesn't get hoisted in the beginning of the program meaning you can't use it before the position you declared it`
    Example
    `js
    // anonymous function
  const greeting  = function(){
    console.log("Hello")
  }
  // named function
  const greeting  = function hello(){
    console.log('hello')
  }
`
- Research the concept of "Pure Function" and then respond to the following: Under what conditions can a function be classified as a pure function?
- - deterministic meaning it returns the same output when the same input is given
- - No side effects meaning it shouldn't modify any external state which means no console.log in it or global variables etc
- - referential transparency if we could just replace the function in the code with the returned value from the function this is called referential transparency

4.

- - destructive
    push(), sort(), reverse(), splice(), pop(), shift(), unshift()

- - not destructive
    map(), filter(), slice(), reduce()
