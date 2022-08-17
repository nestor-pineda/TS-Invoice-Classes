import { HasFormatter } from "./../interfaces/HasFormat.js";

export class ListTemplate {
  constructor(private ulContainer: HTMLUListElement) {}

  render(item: HasFormatter, heading: string) {
    const li = document.createElement("li");
    const h4 = document.createElement("h4");
    h4.innerText = heading;
    li.append(h4);

    const p = document.createElement("p");
    p.innerText = item.format();
    li.append(p);

    this.ulContainer.prepend(li);
  }
}
