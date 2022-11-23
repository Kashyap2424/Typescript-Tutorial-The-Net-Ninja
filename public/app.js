"use strict";
// classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes RS ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on the mario website", 25000);
const invTwo = new Invoice("mario-007", "work on the mario website", 30000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
