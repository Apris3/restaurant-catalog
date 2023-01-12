import DaftarRestaurant from '../views/pages/daftar-restaurant';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': DaftarRestaurant,
  '/daftar-restaurant': DaftarRestaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
