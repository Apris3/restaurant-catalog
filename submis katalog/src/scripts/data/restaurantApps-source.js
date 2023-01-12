import API_ENDPOINTS from '../globals/api-endpoints';

class RestaurantApps {
  static async daftarRestaurant() {
    const response = await fetch(API_ENDPOINTS.DAFTAR_RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINTS.DETAIL(id));
    return response.json();
  }
}

export default RestaurantApps;
