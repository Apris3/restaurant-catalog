/* eslint-disable max-len */
import UrlParser from '../../routers/url-parser';
import RestaurantApps from '../../data/restaurantApps-source';
import {
  createDetailRestaurantTemplate, customerReviews, createTemplateMenusDrinks, createTemplateMenusFoods,
} from '../template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurants-idb';

const Detail = {
  async render() {
    return `
        <div class="detailRestaurant">
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
        <div id="menus" class="menus">
            <div class="containerDrinks">
            <h5 tabindex="0" class="headerFoods">Drinks :</h5>
            <div id="drinks" class="drinks"></div>
            </div>
            <div class="containerFoods">
            <h5 tabindex="0" class="headerDrinks">Foods :</h5>
            <div id="foods" class="foods"></div>
            </div>  
        </div>
        <div class="reviews">
        <h5 tabindex="0" class="headerReviews">Reviews</h5>
        <div id="costumerReview" class="costumerReview">
        </div>
        </div>
        </div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const respon = await RestaurantApps.detailRestaurant(url.id);
    const { restaurant } = respon;

    console.log(restaurant);

    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createDetailRestaurantTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        address: restaurant.address,
        city: restaurant.city,
        picture: restaurant.pictureId,
        rating: restaurant.rating,
        description: restaurant.description,

      },
    });

    const { drinks } = restaurant.menus;
    const drinksContainer = document.querySelector('#drinks');
    drinks.forEach((drink) => {
      drinksContainer.innerHTML += createTemplateMenusDrinks(drink);
    });

    const { foods } = restaurant.menus;
    const foodsContainer = document.querySelector('#foods');
    foods.forEach((food) => {
      foodsContainer.innerHTML += createTemplateMenusFoods(food);
    });

    const reviews = restaurant.customerReviews;
    const costumerReviewContainer = document.querySelector('#costumerReview');
    reviews.forEach((costumer) => {
      costumerReviewContainer.innerHTML += customerReviews(costumer);
    });
  },
};

export default Detail;
