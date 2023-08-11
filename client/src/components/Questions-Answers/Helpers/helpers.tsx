// here lies the helpers

const compare = (identifier) => {
  return (a, b) => {
    if (a[identifier] < b[identifier]) {
      return 1;
    }
    if (a[identifier] > b[identifier]) {
      return -1;
    }
    return 0;
  };
};
export default { compare };
