import { HasFormatter } from '../interfaces/HasFormatter';

// Classes
export class payment implements HasFormatter{
    recipient: string;
    details: string;
    amount: number;

    // constructor helps us to create properties and methods that we can use in our class
    constructor(c: string, d: string, a: number){
        this.recipient = c;
        this.details = d;
        this.amount = a;
    }

    format () {
        return `${this.recipient} is owed ${this.amount} for ${this.details}`;
    }
}