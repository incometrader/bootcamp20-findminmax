const findMinMax = (arr) => {
  if (Math.min(...arr) === Math.max(...arr)) {
    return [Math.min(...arr)];
  }
  return [Math.min(...arr), Math.max(...arr)];
};
module.exports = findMinMax;
