
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let resultMatrix = [];

    if(matrix === undefined){
        return [];
    }

    if(!matrix.length) {
        return [];
    }

    for(let i = 0; i < matrix.length; i++){
        if(i%2 !== 0){
            let reverseArr = matrix[i].reverse();
            for (let k = 0; k < reverseArr.length; k++ ){
                resultMatrix.push(reverseArr[k])
            }
        }
        else{
            for (let k = 0; k < matrix[i].length; k++ ){
                resultMatrix.push(matrix[i][k])
            }
        }
    }

    return resultMatrix;
};
