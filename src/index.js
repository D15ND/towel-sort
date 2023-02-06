
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let midl=[];
    if (matrix===undefined) {
      return midl;
    }
    for (let i=0; i<matrix.length; i++) {
        if (i%2===0) {
            midl.push(...matrix[i]);
            } else {
              midl.push(...matrix[i].reverse());
        }
    }
    console.log(midl)
    return (midl);
}