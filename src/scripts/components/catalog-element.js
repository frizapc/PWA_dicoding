import FetchAllData from "../data/fetchAll";
import FetchDetailData from "../data/fetchDetail";
import FetchFontAwesomeIcon from "../data/fetchFontAwesome";
import FetchImageData from "../data/fetchImage";

class CatalogElement extends HTMLElement {
  constructor() {
    super();

    this.buildHTML();
    this.buildCard();
  }

  buildHTML() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.setAttribute("id", "catalog");
    const content = `
        <div class="catalog_title">
          <h3>Our Resto</h3>
          <div></div>
        </div>
        <div class="catalog_container">
            <div id="container-loader">
              <h3>Loading ...</h3>
            </div>
        </div>`;
    section.innerHTML = content;
    main.append(section);
  }

  async buildCard() {
    const container = document.querySelector(".catalog_container");
    const fetchRestaurants = await FetchAllData();

    if (fetchRestaurants) {
      fetchRestaurants.forEach(async (restaurant) => {
        const card = this._buildDataCard(restaurant);
        const tempContainer = document.createElement("div");
        tempContainer.setAttribute("id", `${restaurant.id}`);
        tempContainer.classList.add("catalog_card");
        tempContainer.innerHTML = card;
        container.append(tempContainer);

        const imageUrl = await FetchImageData(restaurant.pictureId);
        const containerImg = document.querySelector(`#img-${restaurant.id}`);
        containerImg.src = imageUrl;

        await this._cacheDataDetail(restaurant.id);
        await this._cacheDataFontAwebsome();
      });
    } else {
      alert("Couldn't load sorry :( \nTry to refersh the page");
    }
  }

  _buildDataCard(restaurant) {
    return `<img id="img-${restaurant.id}" alt="${restaurant.name}">
                    <div> 
                        <h4><a href="/#detail/${restaurant.id}">${restaurant.name}</a></h4>
                        <p>📍${restaurant.city}</p>
                        <p>⭐${restaurant.rating}</p>
                        <a class="btn-detail" href="#detail/${restaurant.id}">View More</a>
                    </div>
                    `;
  }

  async _cacheDataDetail(id) {
    await FetchDetailData(id);
  }

  async _cacheDataFontAwebsome() {
    await FetchFontAwesomeIcon();
  }
}

export default CatalogElement;
