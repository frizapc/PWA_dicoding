import UrlParser from "../routes/url-parser";
import FetchDetailData from "../data/fetchDetail";
import CONFIG from "../global/config";

class ReviewElement extends HTMLElement {
  constructor() {
    super();

    this._buildHTML();
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
        <form method="POST" action="${CONFIG.POST_REVIEW}">
          
          <input type="hidden" name="id" id="id" value="${restaurant.id}"/>
          <div>
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label for="review">Comment</label>
            <textarea
              name="review"
              id="review"
              rows="10"
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>`;
    section.innerHTML = content;
    main.append(section);
  }

  async _getDataRestaurant() {
    const url = UrlParser.urlParserNonCombiner();
    const restaurant = await FetchDetailData(url.id);
    return restaurant;
  }
}

export default ReviewElement;
