//? classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
// export class Invoice implements HasFormatter {
//     client: string;
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
