import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
import { Payments } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;
//? console.log(form.children);

//!inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details  = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//* list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);


form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber];

    let doc: HasFormatter;
    if (type.value === "invoice"){
        doc = new Invoice(...values);
    }else{
        doc = new Payments(...values);
    }

    list.render(doc, type.value, 'end');
});



// //* Interfaces
// interface isPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me:isPerson = {
//     name: 'Bellz',
//     age: 25,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log(amount);
//         return amount;
//     }
// };

// const greetPerson = (person: isPerson) => {
//     console.log('Hello', person.name)
// }
// greetPerson(me);


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("Wisdom", "Web work", 250);
// docTwo = new Payments("Pascal", "Plumbing work", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs);

// const invOne = new Invoice('mario', 'work on the mario website', 250);
// const invTwo = new Invoice('bellz', 'work on the bellz website', 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo); 

// invoices.forEach(inv =>{
//     console.log(inv.client, inv.amount, inv.format());
// }); 
