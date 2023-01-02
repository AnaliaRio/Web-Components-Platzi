const template = document.createElement("div");
template.innerHTML = `
<style>
p {
    color: blue;
}
.txt {
    color: red;
}
</style>
<p class='txt'>Hello! 🥳</p>
<p>Third thing! 😄</p>
`;

class myElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hi");

    this.p = document.createElement("p");
  }

  connectedCallback() {
    this.p.textContent = "Hi! 😃";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}

customElements.define("my-element", myElement);
