export default function(state = 0,action) {
  switch (action.type) {
    case 'INCREASE_REPO':
      return state +1;
    case 'RESET_REPO':
      return 0;
    default:
      return state;
  }
};
