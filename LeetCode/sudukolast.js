/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let hash = {};
    let isValid = true;
    [0,3,6].forEach((jstart)=>{
         [0,3,6].forEach((istart)=>{
            for(let i=istart;i<istart+3;i++){
                for(let j=jstart;j<jstart+3;j++){
                     if(board[i][j] !== "."){
                    if(hash[board[i][j]]){
                        hash[board[i][j]] = hash[board[i][j]] +1;
                        isValid = false
                    }else{
                        hash[board[i][j]] = 1
                    }
                }
                }
             }
             //console.log(hash);
             hash={};
        })
    })
   return isValid
};  
let board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
console.log(isValidSudoku(board));
