/**
 * @param {character[][]} board
 * @return {boolean}
 */
var checkRow = function(board){
    let hash = {};
    let isValid = true;
    board.forEach((ele)=>{
        ele.forEach(item =>{
            if(item !== "."){
            if(hash[item]){
                isValid = false
            } else{
                hash[item] = 1
            }
        }
        })
        hash={};
    })
    return isValid
}
var checkCloumn = function(board){
    let hash = {};
    let isValid = true;
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
         if(board[j][i] !== "."){
            if(hash[board[j][i]]){
                isValid=false
            }else{
            hash[board[j][i]] =1
             }
        }

      }
    hash={}
    }
    return isValid
}
var checkSquare = function(board){
    let hash = {};
    let isValid = true;
        [0,3,6].forEach((jstart)=>{
         [0,3,6].forEach((istart)=>{
            for(let i=istart;i<istart+3;i++){
                for(let j=jstart;j<jstart+3;j++){
                    if(board[i][j] !=="."){
                    if(hash[board[i][j]]){
                        hash[board[i][j]] = hash[board[i][j]] +1;
                        isValid = false;
                    }else{
                        hash[board[i][j]] = 1
                    }
                }
                }
             }
            // console.log(hash);
             hash={};
        })
    })
    return isValid
}
var isValidSudoku = function(board) {
    return checkRow(board) && checkCloumn(board) && checkSquare(board)
};  
let boardTrue = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]


let boardFalse = [["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

let boardFalse2 = [[".",".","4",".",".",".","6","3","."],[".",".",".",".",".",".",".",".","."],["5",".",".",".",".",".",".","9","."],[".",".",".","5","6",".",".",".","."],["4",".","3",".",".",".",".",".","1"],[".",".",".","7",".",".",".",".","."],[".",".",".","5",".",".",".",".","."],[".",".",".",".",".",".",".",".","."],[".",".",".",".",".",".",".",".","."]]

//console.log(isValidSudoku(boardTrue));
console.log(isValidSudoku(boardFalse2));