let transpose = function(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Create a new matrix with swapped dimensions
    const transposedMatrix = new Array(cols);
    for (let i = 0; i < cols; i++) {
      transposedMatrix[i] = new Array(rows);
    }
  
    // Fill the transposed matrix with values from the original matrix
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transposedMatrix[j][i] = matrix[i][j];
      }
    }
  
    return transposedMatrix;
  
  };

  