const arr = [1,3,5,8,9,12,23,45,67,88,98,102]
function search(val){
    let l =0;
    let h= arr.length;
    if(val>=arr[l] || val <= arr[h])
    while (l<=h){
        let mid =  (Math.floor((h-l)/2)) + l;
        if(arr[mid] === val) return mid;
        if(arr[mid] > val){
            h=mid
        }else {
            l=mid
        }
        
    }
    return "not Found"
}
//console.log(Math.ceil(4.5))
 console.log(search(1))