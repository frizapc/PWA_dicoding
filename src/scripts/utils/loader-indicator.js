const LoaderIndicator = {
  loaded() {
    const containerLoader = document.querySelector("#container-loader");
    containerLoader.classList.add("loaded");
  },
  loading() {
    const containerLoader = document.querySelector("#container-loader");
    containerLoader.classList.remove("loaded");
  },
};

export default LoaderIndicator;
