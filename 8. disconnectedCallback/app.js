class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hello from the constructor - Memory");
  }

  connectedCallback() {
    console.log("Hi from the DOM 😎");
  }

  disconnectedCallback() {
    console.log("Goodbye from the DOM 👋");
  }
}

customElements.define("my-custom-element", MyCustomElement);

document.querySelector("my-custom-element").remove();
