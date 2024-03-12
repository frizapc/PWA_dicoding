import FavoriteRestaurantIdb from "../data/favoriteRestaurants";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../components/btn-favorite-element";

const LikeButtonInitiator = {
  async init({ restaurant }) {
    this._restaurant = restaurant;

    return this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      return this._renderLiked();
    }

    return this._renderLike();
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
      window.location.reload();
    });
    return createLikeButtonTemplate();
  },

  _renderLiked() {
    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
      window.location.reload();
    });

    return createLikedButtonTemplate();
  },
};

export default LikeButtonInitiator;
