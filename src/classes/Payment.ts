import { HasFormatter } from "../interfaces/HasFormatter";

//? classes

export class Payments implements HasFormatter {
  constructor(
    readonly recipient: string,
    private details: string,
    public amount: number
  ) {}
  format() {
    return `${this.recipient} is owed £${this.amount} for ${this.details}`;
  }
}

// export class Invoice implements HasFormatter {
//     recipient: string;
//     details: string;
//     amount: number;

//     constructor(c: string, d:string, a:number){
//         this.client = c,
//         this.details = d,
//         this.amount = a
//     }
//     format(){
//         return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
// }
