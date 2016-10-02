import * as types from '../constants/ActionTypes';

export function closeInfo() {
  return {
    type: types.CLOSE_INFO,
    show: false
  };
};

export function openInfo() {
  return {
    type: types.OPEN_INFO,
    show: true
  };
};
