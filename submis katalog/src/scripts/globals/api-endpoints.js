import CONFIG from './config';

const API_ENDPOINTS = {
  DAFTAR_RESTAURANT: `${CONFIG.BASE_URL}list`,
  BASE_IMAGE: `${CONFIG.BASE_IMAGE_URL}`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
};

export default API_ENDPOINTS;
