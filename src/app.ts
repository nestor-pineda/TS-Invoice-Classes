import { ListTemplate } from "./classes/ListTemplateClass.js";
import { Invoice } from "./classes/InvoiceClass.js";
import { Payments } from "./classes/PayementClass.js";
import { HasFormatter } from "./interfaces/HasFormat";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const inputType = document.querySelector("#type") as HTMLSelectElement;
const inputToFrom = document.querySelector("#tofrom") as HTMLInputElement;
const inputDetails = document.querySelector("#details") as HTMLInputElement;
const inputAmount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (inputType.value === "invoice") {
    doc = new Invoice(inputToFrom.value, inputDetails.value, inputAmount.valueAsNumber);
  } else {
    doc = new Payments(inputToFrom.value, inputDetails.value, inputAmount.valueAsNumber);
  }

  list.render(doc, inputType.value);
});
