import "regenerator-runtime";
import "../scss/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";

const app = new App();

window.addEventListener("hashchange", () => {
  app.render();
});

window.addEventListener("load", async () => {
  app.render();
  app.initialAppShell({
    button: document.querySelector(".hamburger button"),
    drawer: document.querySelector(".drawer"),
    content: document.querySelector("main"),
  });
  await swRegister();
});
