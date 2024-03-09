class ContanctElement extends HTMLElement {
  constructor() {
    super();

    this._buildHTML();
  }

  async _buildHTML() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.setAttribute("id", "header");
    const content = `<section id="jumbotron">
        <div class="hero_content">
          <h2>Find Deliciousness You Want</h2>
          <p>Main Course, Desserts & Fresh Drink</p>
          <div class="hero_button">
            <a href="#catalog">Restaurant</a>
            <a href="#contact">Contact Us</a>
          </div>
        </div>
      </section>`;
    section.innerHTML = content;
    main.append(section);
  }
}

export default ContanctElement;
