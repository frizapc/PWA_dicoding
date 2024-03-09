import FetchDetailData from "../data/fetchDetail";
import UrlParser from "../routes/url-parser";
import CONFIG from "../global/config";

class DetailElement extends HTMLElement {
  constructor() {
    super();

    this._buildContainer();
    this._titlePart();
    this._descriptionPart();
    this._titlePart("Menus");
    this._menuPart();
    this._titlePart("Customer Reviews");
    this._reviewsPart();
  }

  async _buildContainer() {
    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.setAttribute("id", "detail");
    main.append(section);
  }

  async _getDataRestaurant() {
    const url = UrlParser.urlParserNonCombiner();
    const restaurant = await FetchDetailData(url.id);
    return restaurant;
  }

  async _titlePart(titleText) {
    const restaurant = await this._getDataRestaurant();

    const detailTitle = document.createElement("div");
    detailTitle.setAttribute("class", "detail_title");
    detailTitle.innerHTML = `
    <h3>${titleText ? titleText : restaurant.name}</h3>
    <div></div>
    `;

    const section = document.querySelector("#detail");
    section.append(detailTitle);
  }

  async _descriptionPart() {
    const restaurant = await this._getDataRestaurant();

    const detailDescription = document.createElement("div");
    detailDescription.setAttribute("class", "detail_description");
    detailDescription.innerHTML = `
    <div class="detail_image" style="background-image: url('${CONFIG.IMAGE_URL}${restaurant.pictureId}');">
        <p>⭐${restaurant.rating}</p>
    </div>
    <div> 
        <h4>📍${restaurant.address}. ${restaurant.city}</h4>
        <p>${restaurant.description}</p>
    </div>
    `;

    const section = document.querySelector("#detail");
    section.append(detailDescription);
  }

  async _menuPart() {
    const { menus } = await this._getDataRestaurant();
    const { foods, drinks } = menus;

    const detailFoods = document.createElement("section");
    detailFoods.setAttribute("class", "detail_foods");
    foods.forEach((food) => {
      const list = document.createElement("li");
      list.innerText = `🔸 ${food.name}`;
      detailFoods.appendChild(list);
    });

    const detailDrinks = document.createElement("section");
    detailDrinks.setAttribute("class", "detail_drinks");
    drinks.forEach((drink) => {
      const list = document.createElement("li");
      list.innerText = `🔸 ${drink.name}`;
      detailDrinks.appendChild(list);
    });

    const detailMenu = document.createElement("div");
    detailMenu.setAttribute("class", "detail_menus");
    detailMenu.appendChild(detailFoods);
    detailMenu.appendChild(detailDrinks);

    const section = document.querySelector("#detail");
    section.append(detailMenu);
  }

  async _reviewsPart() {
    const { customerReviews, id } = await this._getDataRestaurant();

    const detailReviews = document.createElement("div");
    detailReviews.setAttribute("class", "detail_reviews");

    const btnDetailContainer = document.createElement("div");
    btnDetailContainer.setAttribute("class", "btn_give_review");
    btnDetailContainer.innerHTML = `
    <a href="/#review/${id}">Give Review</a>
    `;
    detailReviews.appendChild(btnDetailContainer);

    customerReviews.forEach((review) => {
      const container = document.createElement("section");
      container.innerHTML = `
      <h4 class="user">💭${review.name}</h4>
      <p class="comment">${review.review}</p>
      <p class="date">${review.date}</p>
      `;

      detailReviews.appendChild(container);
    });

    const section = document.querySelector("#detail");
    section.append(detailReviews);
  }
}

export default DetailElement;
