module.exports = function towelSort(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (typeof matrix[i] !== 'object') {
      newMatrix.push(matrix[i]);
    } else if (typeof matrix[i] === 'object') {
      if (i % 2 === 0) {
        for (let k = 0; k < matrix[i].length; k += 1) {
          newMatrix.push(matrix[i][k]);
        }
      } else if (i % 2 !== 0) {
        for (let k = matrix[i].length - 1; k >= 0; k -= 1) {
          newMatrix.push(matrix[i][k]);
        }
      }
    }
  }
  return newMatrix;
};
