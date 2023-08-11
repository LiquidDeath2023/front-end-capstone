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
const expand = (getter, setter) => {
  setter([getter[0] + 2, getter[1]]);
  return getter[0] + 2 >= getter[1];
};

const collapse = (setter, reset) => {
  setter((state) => [reset, state[1]]);
  return true;
};

export default { compare, expand, collapse };
