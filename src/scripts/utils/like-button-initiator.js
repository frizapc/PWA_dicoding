import FavoriteRestaurantIdb from "../data/favoriteRestaurants";
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from "../components/btn-favorite-element";

const LikeButtonInitiator = {
  async init({ likeButton, restaurant }) {
    this._likeButton = likeButton;
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

  async _renderLike() {
    this._likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
    this._likeButton.innerHTML = createLikeButtonTemplate();
    return this._likeButton.innerHTML;
  },

  _renderLiked() {
    this._likeButton.addEventListener("click", async () => {
      await FavoriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
    this._likeButton.innerHTML = createLikedButtonTemplate();
    return this._likeButton.innerHTML;
  },
};

export default LikeButtonInitiator;
