import { createRestaurantItemFavoriteTemplate } from '../../template-creator';

class favoriteRestaurantSearchView {
  getTemplate() {
    return `
      <div class="content">
        <input id="query" type="text">
        <h2 class="content_heading">Your Liked Restaurant</h2>
          <div id="restaurants" class="restaurants">
          </div>
      </div>
    `;
  }

  // getTemplate() {
  //   return `
  //       <div id="restaurant-search-container">
  //       <input id="query" type="text">
  //       <div class="restaurant-result-container">
  //       <ul class="restaurants">
  //       </ul>
  //       </div>
  //       </div>
  //     `;
  // }

  // getFavoriteRestaurantTemplate() {
  //   return `
  //       <div class="content">
  //           <h2 class="content_heading">Your Liked Restaurant</h2>
  //           <div id="restaurants" class="restaurants">
  //           </div>
  //       </div>
  //   `;
  // }

  runWhenUserIsSearching(callback) {
    document.getElementById('query').addEventListener('change', (event) => {
      callback(event.target.value);
    });
  }

  // showRestaurants(restaurants) {
  // this.showFavoriteRestaurants(restaurants)
  // let html;

  // if (restaurants.length > 0) {
  //   html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemFavoriteTemplate(restaurant)), '');
  //   // `<li class="restaurant">
  //   // <span class="nameRestaurant">${restaurant.name || '-'}</span>
  //   // </li>`),
  //   // '',
  //   // );
  // } else {
  //   html = this._getEmptyRestaurantTemplate();
  // }

  // document.querySelector('.restaurants').innerHTML = html;
  // //document.getElementById('restaurant-search-container')
  //   //.dispatchEvent(new Event('restaurants:searched:updated'));
  // document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'))
  // }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantItemFavoriteTemplate(restaurant)), '');
    } else {
      html = this._getEmptyRestaurantTemplate();
      // '<div class="restaurant-item_not_found restaurant_not_found">Restaurant tidak ditemukan</div>';
    }
    document.getElementById('restaurants').innerHTML = html;

    document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
  }

  _getEmptyRestaurantTemplate() {
    return `<div class="restaurant-item_not_found">Restaurant tidak ditemukan</div>`;
  }
}

export default favoriteRestaurantSearchView;
