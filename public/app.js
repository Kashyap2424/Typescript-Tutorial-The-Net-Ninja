const me = {
    name: "kashyap",
    age: 20,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
console.log(me);
const greetingPerson = (person) => {
    console.log("Hello", person.name);
};
greetingPerson(me);
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("mario", "work on the mario website", 25000);
const invTwo = new Invoice("mario-007", "work on the mario website", 30000);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
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
