// here lies the helpers

const compare = (a, b) => {
  if (a.helpfulness < b.helpfulness) {
    return 1;
  }
  if (a.helpfulness > b.helpfulness) {
    return -1;
  }
  return 0;
};

export default { compare };
