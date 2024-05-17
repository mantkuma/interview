/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
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

    if(!isValid){
        return isValid
    }
   //all column
   //iterate each column
   hash = {};
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

     if(!isValid){
        return isValid
    }
    let istart=0;
    let jstart=0;
   //3x3  
   //SC = 012/ 345 / 678 
   //RC = 012/ 345 / 678
   let start = 0;
   [0,3,6].forEach((ele, i)=>{
   for(let i=istart;i<istart+3;i++){
    for(let j=jstart;j<jstart+3;j++){
        console.log(board[i][j] + "   " + i + "  " + j);
        if(board[i][j] !== "."){
        if(hash[board[i][j]]){
            return false;
        }else{
            hash[board[i][j]] =1
        }
    }
    }
    hash={}
   }
   console.log("iiiiiiiiiiiiiiiiiiiii")
   istart = istart+3;
   console.log("**************************")
//    jstart=jstart+3
   })
   return true
};  
let board = 
[[".",".",".",".","5",".",".","1","."]
,[".","4",".","3",".",".",".",".","."]
,[".",".",".",".",".","3",".",".","1"]
,["8",".",".",".",".",".",".","2","."]
,[".",".","2",".","7",".",".",".","."]
,[".","1","5",".",".",".",".",".","."]
,[".",".",".",".",".","2",".",".","."]
,[".","2",".","9",".",".",".",".","."]
,[".",".","4",".",".",".",".",".","."]]

// let board = 
// [[".",".",".",".","5",".",".","1","."]
// ,[".","4",".","3",".",".",".",".","."]
// ,[".",".",".",".",".","3",".",".","1"]
// ,["8",".",".",".",".",".",".","2","."]
// ,[".",".","2",".","7",".",".",".","."]
// ,[".","1","5",".",".",".",".",".","."]
// ,[".",".",".",".",".","2",".",".","."]
// ,[".","2",".","9",".",".",".",".","."]
// ,[".",".","4",".",".",".",".",".","."]]
console.log(isValidSudoku(board));