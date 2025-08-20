module.exports = function towelSort(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (typeof matrix[i] !== 'object') {
      newMatrix.push(matrix[i]);
    } else if (typeof matrix[i] === 'object') {
      for (let k = 0; k < matrix[i]; k += 1) {
        newMatrix.push(matrix[i][k]);
      }
    }
  }
  return newMatrix.sort((a, b) => a - b);
};
