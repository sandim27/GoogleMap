import {getCountries} from '../api';
import * as types from '../constants/ActionTypes';

export default function loadCountries() {
  return {
    type: 'PROMISE',
    actions: [types.COUNTRIES_LOADING, types.COUNTRIES_LOADED, types.COUNTRIES_LOAD_FAILURE],
    promise: getCountries()
  };
};
