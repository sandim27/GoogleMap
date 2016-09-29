export default function(state = [],action) {
  switch (action.type) {
    case 'GET_DETAILS':
      return action.data;
    default:
      return state;
  }
};
