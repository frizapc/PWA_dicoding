class FooterElement extends HTMLElement {
  constructor() {
    super();

    this.buildHTML();
  }

  buildHTML() {
    const main = document.querySelector("footer");
    const section = document.createElement("section");
    const content = `<p>Muhammad Friza copyright &copy;2024 Catalog App</p>`;
    section.innerHTML = content;
    main.append(section);
  }
}

export default FooterElement;
