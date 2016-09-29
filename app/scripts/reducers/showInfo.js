export default function(state = [],action) {
  switch (action.type) {
    case 'CLOSE_INFO':
      return action.show;
    case 'OPEN_INFO':
      return action.show;
    default:
      return state;
  }
};
