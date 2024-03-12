import NavbarElement from "../components/navbar-element";
import HeroElement from "../components/hero-element";
import FooterElement from "../components/footer-element";
import DrawerInitiator from "../utils/drawer-initiator";
import UrlParser from "../routes/url-parser";
import routes from "../routes/routes";

class App {
  render() {
    if (!customElements.get("custom-navbar")) {
      customElements.define("custom-navbar", NavbarElement);
    }
    if (!customElements.get("custom-hero")) {
      customElements.define("custom-hero", HeroElement);
    }

    if (!customElements.get("custom-footer")) {
      customElements.define("custom-footer", FooterElement);
    }

    this._determinePageByRoute();
  }

  initialAppShell({ button, drawer, content }) {
    DrawerInitiator.init({
      button,
      drawer,
      content,
    });
  }

  _determinePageByRoute() {
    const url = UrlParser.urlParserCombiner();

    const skipLinkElem = document.querySelector(".skip_link");
    skipLinkElem.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector("#mainContent").focus();
    });

    if (!customElements.get("custom-content")) {
      const page = routes[url];
      customElements.define("custom-content", page);
      return;
    }
    window.location.reload();
  }
}

export default App;
