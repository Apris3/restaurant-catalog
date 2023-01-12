import { createRestaurantItemTemplate } from '../template-creator';
import RestaurantApps from '../../data/restaurantApps-source';

const DaftarRestaurant = {
  async render() {
    return `
        <h2 tabindex="0" class="headerDaftarRestaurant">Daftar Restaurant</h2>
        <div id="restaurants" class="restaurants"></div>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApps.daftarRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default DaftarRestaurant;
