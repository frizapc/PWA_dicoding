import UrlParser from "../routes/url-parser";
import FetchDetailData from "../data/fetchDetail";
import CONFIG from "../global/config";

class ReviewElement extends HTMLElement {
  constructor() {
    super();

    this._generateElement();
  }

  async _generateElement() {
    await this._buildHTML();
    await this._eventForm();
  }

  async _buildHTML() {
    const restaurant = await this._getDataRestaurant();

    const main = document.querySelector("main");
    const section = document.createElement("section");
    section.setAttribute("id", "review");
    const content = `<div class="review_title">
          <h3>Review to <span>${restaurant.name}</span> Resto</h3>
          <div></div>
        </div>
        <form id="postForm" >
          
          <input type="hidden" name="id" id="id" value="${restaurant.id}"/>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label for="reviewField">Comment</label>
            <textarea
              name="reviewField"
              id="reviewField"
              rows="10"
            ></textarea>
            </div>
            <div>
              <button class="postBtn">Submit</button>
            </div>
        </form>
        `;
    section.innerHTML = content;
    main.append(section);
  }

  async _eventForm() {
    const restaurant = await this._getDataRestaurant();
    document
      .querySelector(".postBtn")
      .addEventListener("click", async (event) => {
        const id = document.getElementById("id").value;
        const name = document.getElementById("name").value;
        const review = document.getElementById("reviewField").value;
        const requestBody = { id, name, review };
        fetch(CONFIG.POST_REVIEW, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        });
      });
  }

  async _getDataRestaurant() {
    const url = UrlParser.urlParserNonCombiner();
    const restaurant = await FetchDetailData(url.id);
    return restaurant;
  }
}

export default ReviewElement;
