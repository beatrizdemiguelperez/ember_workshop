import Ember from 'ember';

export function restaurantImg(params) {
  return `assets/img/restaurants/${params}.jpg`;
}

export default Ember.Helper.helper(restaurantImg);
