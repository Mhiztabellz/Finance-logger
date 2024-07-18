"use strict";
// const character = 'Wisdom';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// console.log(inputs); 
// inputs.forEach(input => {
//     console.log(input);
// })
//? Function
// const circ = (diameter : number) => {
//     return diameter * Math.PI;
// }
// console.log(circ(4.56));
//! arrays
// let names = ['Abel', 'wisdom', 'pazy'];
// names.push('kayode');
// names.push(7);
// names[0] = 3;
// let mixed = ['bellz', 3, 'mary', 4,7,'jude'];
// mixed.push('boy');
// mixed.push(10);
//* objects
// let ninja = {
//     name: 'Abel',  //? these are the properties of the object
//     belt: 'black',
//     age: 30
// }; 
// ninja.age = 40;  //* correct because they are numbers
// ninja.name = 'Jude';  //? correct because they are both strings
// ninja.age = '30';  //! incorrect because they dont have the same type
//! explicit types
// let character: string;
// let age: number;
// let isLoggedIn: boolean;
//  age = 'hfyru';
// age = 12;
// isLoggedIn = 23;
// isLoggedIn = true;
//? arrays
// let ninjas: string[] = [];
// ninjas.push('abel');
//! union types
// let mixed: (string|number|boolean)[] = [];
// mixed.push('Wisdom');
// mixed.push(23);
// mixed.push(true);
// console.log(mixed);
// let uid: string|number;
// uid = '123';
// uid = 123;
// console.log(uid);
//* objects
// let ninjaOne: object;
// ninjaOne = {
//     name: 'Abel',  //? these are the properties of the object
//     belt: 'black',
//     age: 30
// }; 
// let ninjaTwo: {
//     name: string,
//     age: number,
//     beltColour: string,
// }
// ninjaTwo = {
//     name: 'Joe',
//     age: 19,
//     beltColour: 'black'
// }
//! Any type
// let age: any = 25;
// age = true;
// console.log(age);
// age = 'hello';
// console.log(age);
// age = {name: 'wisdom'};
// console.log(age);
// let mixed: any[] = [];
// mixed.push(8);
// mixed.push('mario')
// mixed.push(false);
// let ninja: {name: any, age: any};
// ninja = {name: 'Abel', age: 23}
// console.log(ninja);
// // it can also be put in this way because it type is any
// ninja = {name: 23, age: 'Abel'}
// console.log(ninja);
