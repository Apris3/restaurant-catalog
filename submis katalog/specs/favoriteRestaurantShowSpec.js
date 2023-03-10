import favoriteRestaurantSearchView from '../src/scripts/views/pages/liked-restaurants/favorite-restaurants-search-view';
import FavoriteRestaurantShowPresenter from '../src/scripts/views/pages/liked-restaurants/favorite-restaurant-show-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-restaurants-idb';

describe('showing all favorite restaurants', () => {
  let view;

  const renderTemplate = () => {
    view = new favoriteRestaurantSearchView();
    document.body.innerHTML = view.getTemplate();
  };

  beforeEach(() => {
    renderTemplate();
  });

  describe('when no restaurants have been liked', () => {
    it('should ask for the favorite restaurants', () => {
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });

      expect(favoriteRestaurants.getAllRestaurants).toHaveBeenCalledTimes(1);
    });

    it('should show the information that no restaurants have been liked', (done) => {
      document.getElementById('restaurants')
        .addEventListener('restaurants:updated', () => {
          expect(document.querySelectorAll('.restaurant-item_not_found').length).toEqual(1);
          done();
        });

      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb);
      favoriteRestaurants.getAllRestaurants.and.returnValues([]);

      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });

  describe('When favorite restaurant exist', () => {
    it('should show the restaurants', (done) => {
      document.getElementById('restaurants').addEventListener('restaurants:updated', () => {
        expect(document.querySelectorAll('.restaurantInfo').length).toEqual(2);
        done();
      });
      const favoriteRestaurants = spyOnAllFunctions(FavoriteRestaurantIdb, false);
      favoriteRestaurants.getAllRestaurants.and.returnValues([
        {
          id: 11,
          title: 'A',
          vote_average: 3,
          overview: 'Sebuah restaurant A',
        },
        {
          id: 22,
          title: 'B',
          vote_average: 4,
          overview: 'Sebuah restaurant B',
        },
      ]);
      new FavoriteRestaurantShowPresenter({
        view,
        favoriteRestaurants,
      });
    });
  });
});
