// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let result=[];
        for(let i=0; i<n;i++ ){
            result.push([]);
        }
    console.log(result);
    let counter =1;
    let startColumn = 0;
    let endColumn = n-1;
    let startRow = 0;
    let endRow = n-1;
    while(startRow <=endRow && startRow <= endColumn ){
        //left
        for(i=startRow; i<=endRow; i++){
            result[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
        //bottom
        for(let i= startColumn; i<= endColumn; i++){
            result[endRow][i] = counter
            counter++;
        }
        endRow--;

        //right
        for(let i=endRow; i>=startRow; i--){
            result[i][endColumn] =  counter;
            counter++;
        }
        endColumn--;
        //top
        for(let i=endColumn; i>=startColumn; i--){
            result[startRow][i] = counter
            counter++
        }
        startRow++;
    }
    console.log(result);
}

matrix(4);