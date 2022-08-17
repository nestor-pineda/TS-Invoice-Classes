import { ListTemplate } from "./classes/ListTemplateClass.js";
import { Invoice } from "./classes/InvoiceClass.js";
import { Payments } from "./classes/PayementClass.js";
const form = document.querySelector(".new-item-form");
const inputType = document.querySelector("#type");
const inputToFrom = document.querySelector("#tofrom");
const inputDetails = document.querySelector("#details");
const inputAmount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (inputType.value === "invoice") {
        doc = new Invoice(inputToFrom.value, inputDetails.value, inputAmount.valueAsNumber);
    }
    else {
        doc = new Payments(inputToFrom.value, inputDetails.value, inputAmount.valueAsNumber);
    }
    list.render(doc, inputType.value);
});
