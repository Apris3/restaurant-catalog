import API_ENDPOINTS from '../globals/api-endpoints';
import CONFIG from '../globals/config';

const createDetailRestaurantTemplate = (restaurant) => `
    <h2 tabindex="0">${restaurant.name}</h2>
    <h4 tabindex="0" class="rating">Rating : ${restaurant.rating}<h4>
    <h5 tabindex="0" class="cityRestaurantDetail">Kota : ${restaurant.city}</h5>
    <p tabindex="0" class="address">Alamat : ${restaurant.address}</p>
    <img tabindex="0" class="pictureRestaurant" src="${API_ENDPOINTS.BASE_IMAGE}${restaurant.pictureId}" alt="gambar restaurant"/>
    <p tabindex="0" class="descriptionRestaurant">${restaurant.description}</p>
`;
const createTemplateMenusDrinks = (menu) => `
        <p tabindex="0">${menu.name}</p>
        
`;

const createTemplateMenusFoods = (menu) => `
        <p tabindex="0">${menu.name}</p>
        
`;

const customerReviews = (customer) => `
    <div class="review">
        <p tabindex="0">Nama : ${customer.name}</p>
        <p tabindex="0">Tanggal : ${customer.date}</p>
        <p tabindex="0">Review : ${customer.review}</p>
    </div>
   
`;

const createRestaurantItemTemplate = (restaurant) => `
    <div class='restaurantInfo'>
    <img tabindex="0" class="pictureRestaurant" src= "${API_ENDPOINTS.BASE_IMAGE}${restaurant.pictureId}" alt="gambar restaurant">
    <h3 tabindex="0" class="cityRestaurant">Kota. ${restaurant.city}</h3>
    <div class="content">
    
    <h5 tabindex="0" class="nameRestaurant"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h5>
    <p tabindex="0" class="descriptionRestaurant">${restaurant.description} </p>
    </div>
`;

const createRestaurantItemFavoriteTemplate = (restaurant) => `
     <div class='restaurantInfo'>
     <img tabindex="0" class="pictureRestaurant" src= "${CONFIG.BASE_IMAGE_URL}${restaurant.picture}" alt=${restaurant.name || '-'}>
    <h3 tabindex="0" class="cityRestaurant">Kota. ${restaurant.city}</h3>
    <div class="content">
    
     <h5 tabindex="0" class="nameRestaurant"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h5>
     <p tabindex="0" class="descriptionRestaurant">${restaurant.description || '-'} </p>
     </div>
 `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" area-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" area-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createDetailRestaurantTemplate,
  createRestaurantItemFavoriteTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createTemplateMenusDrinks,
  createTemplateMenusFoods,
  customerReviews,
};
