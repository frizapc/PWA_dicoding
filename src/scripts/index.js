import "regenerator-runtime";
import "../scss/main.scss";
import App from "./views/app";
import swRegister from "./utils/sw-register";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";

const START = 3;
const NUMBER_OF_IMAGES = 20;

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
