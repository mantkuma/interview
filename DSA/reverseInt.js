
function reverseInt(num) {
    num = num+'';
    num= num.split('');
    if(num[0] == '-'){
        num.splice(0,1)
        num = parseInt(num.reverse().join(''))
        return num*-1
    } else{
        num = parseInt(num.reverse().join(''))
        return num
    }

    }



console.log(reverseInt(-30000));