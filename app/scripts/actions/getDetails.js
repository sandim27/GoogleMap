import * as types from '../constants/ActionTypes';

export default function getDetails(details) {
  return {
    type: types.GET_DETAILS,
    data: details
  };
};
