import { HasFormatter } from '../interfaces/HasFormatter';


// Classes
export class invoice implements HasFormatter{
    client: string;
    details: string;
    amount: number;

    // constructor helps us to create properties and methods that we can use in our class
    constructor(c: string, d: string, a: number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format () {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}

