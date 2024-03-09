class ContanctElement extends HTMLElement {
  constructor() {
    super();

    this._buildHTML();
  }

  async _buildHTML() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.setAttribute("id", "contact");
    const content = `<div class="contact_title">
          <h3>Contact Us</h3>
          <div></div>
        </div>
        <form method="POST" action="">          
          <div>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              name="message"
              id="message"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>`;
    section.innerHTML = content;
    main.append(section);
  }
}

export default ContanctElement;
