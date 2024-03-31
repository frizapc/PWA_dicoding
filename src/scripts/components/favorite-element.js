import FetchImageData from "../data/fetchImage";
import FavoriteRestaurantIdb from "../data/favoriteRestaurants";

class FavoriteElement extends HTMLElement {
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
          <h3>Your Favorite Resto</h3>
          <div></div>
        </div>
        <div class="catalog_container">
            
        </div>`;
    section.innerHTML = content;
    main.append(section);
  }

  async buildCard() {
    const container = document.querySelector(".catalog_container");
    const fetchRestaurants = await FavoriteRestaurantIdb.getAllRestaurants();

    fetchRestaurants.forEach(async (restaurant) => {
      const card = this.buildDataCard(restaurant);
      const tempContainer = document.createElement("div");
      tempContainer.setAttribute("id", `${restaurant.id}`);
      tempContainer.classList.add("catalog_card");
      tempContainer.innerHTML = card;
      container.append(tempContainer);

      const imageUrl = await FetchImageData(restaurant.pictureId);
      const containerImg = document.querySelector(`#img-${restaurant.id}`);
      containerImg.src = imageUrl;
    });
  }

  buildDataCard(restaurant) {
    return `<img id="img-${restaurant.id}" alt="${restaurant.name}">
                    <div> 
                        <h4><a class="link-detail" href="/#detail/${restaurant.id}">${restaurant.name}</a></h4>
                        <p>📍${restaurant.city}</p>
                        <p>⭐${restaurant.rating}</p>
                        <a class="btn-detail" href="#detail/${restaurant.id}">View More</a>
                    </div>
                    `;
  }
}

export default FavoriteElement;
