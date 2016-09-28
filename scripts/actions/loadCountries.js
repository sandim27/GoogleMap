import {getCountries} from '../api';

export default function loadCountries() {
  return {
    type: 'PROMISE',
    actions: ['COUNTRIES_LOADING', 'COUNTRIES_LOADED', 'COUNTRIES_LOAD_FAILURE'],
    promise: getCountries()
  };
};
