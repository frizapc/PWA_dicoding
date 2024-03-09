class NavbarElement extends HTMLElement {
  constructor() {
    super();

    this.buildHTML();
  }

  buildHTML() {
    const header = document.querySelector('header');
    const content = `<nav>
        <div class="title">
          <h1>Food Hunter</h1>
        </div>
        <div class="drawer">
          <a href="#">Home</a>
          <a href="#">Favorite</a>
          <a href="https://www.instagram.com/pipsqueek_0">About Us</a>
        </div>
        <div class="penawaran"><a href="#">Offers</a></div>
        <div class="hamburger">
          <button class="hamburger-btn" type="button">☰</button>
        </div>
      </nav>`;

    header.innerHTML = content;
  }
}

export default NavbarElement;
