export function closeInfo() {
  return {
    type: 'CLOSE_INFO',
    show: false
  };
};

export function openInfo() {
  return {
    type: 'OPEN_INFO',
    show: true
  };
};
