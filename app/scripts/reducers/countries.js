export default function ( state = [],action) {
  switch (action.type) {
    case 'COUNTRIES_LOADED':
      return action.data;
    default: return state;
  }
};
