import FetchAllData from "../data/fetchAll";
import CONFIG from "../global/config";

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
            
        </div>`;
    section.innerHTML = content;
    main.append(section);
  }

  async buildCard() {
    const container = document.querySelector(".catalog_container");
    const fetchRestaurants = await FetchAllData();

    fetchRestaurants.forEach((restaurant) => {
      const card = this.buildDataCard(restaurant);
      const tempContainer = document.createElement("div");
      tempContainer.setAttribute("id", `${restaurant.id}`);
      tempContainer.classList.add("catalog_card");
      tempContainer.innerHTML = card;
      container.append(tempContainer);
    });
  }

  buildDataCard(restaurant) {
    return `<img src="${CONFIG.IMAGE_URL}${restaurant.pictureId}" alt="${restaurant.name}">
                    <div> 
                        <h4><a href="/#detail/${restaurant.id}">${restaurant.name}</a></h4>
                        <p>📍${restaurant.city}</p>
                        <p>⭐${restaurant.rating}</p>
                        <a class="btn-detail" href="#detail/${restaurant.id}">View More</a>
                    </div>
                    `;
  }
}

export default CatalogElement;
