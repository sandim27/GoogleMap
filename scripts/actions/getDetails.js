export function getDetails(details =[]) {
  return {
    type: 'GET_DETAILS',
    data: details
  };
};
