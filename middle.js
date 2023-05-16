const middle = (arr) => {
  const newArrayLength = arr.length;
  if (newArrayLength <= 2) {
    return [];
  }
  if (newArrayLength % 2 === 0) {
    return [arr[newArrayLength / 2 - 1], arr[newArrayLength / 2]];
  } else {
    return [arr[Math.floor(newArrayLength / 2)]];
  }
};

module.exports = middle;