
// let num1= '942'
// let num2 = '9465'
// num1 = parseInt(num1)+parseInt(num2);
// num1 =  num1.toString().split('').reverse();
// console.log(num1.length);



 function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
 }


var addTwoNumbers = function(l1, l2) {
    let num1='';
    let num2=''; 
    while (l1.next != null && l2.next != null){
        num1= num1+(l1.val).toString()
        num2= num2+(l2.val).toString()
        l1= l1.next;
        l2=l2.next;
    }
    num1= num1+(l1.val).toString()
    num2= num2+(l2.val).toString()

    if(l1.next == null){
        while(l2.next != null){
            l2= l2.next;
            num2= num2+(l2.val).toString()     
        }
        num2= num2+(l2.val).toString() 
    } else {
         while(l1.next != null){
        num1= num1+(l1.val).toString()
        l1 = l1.next;
         }
         num1= num1+(l1.val).toString()
    }
    
    
    num1=num1.split('').reverse().join('');
    num2=num2.split('').reverse().join('');
    num1 = BigInt(num1)+BigInt(num2);
    num1 =  num1.toString().split('').reverse();
    //return new ListNode(parseInt(num1));
    let l3 = new ListNode(num1[0]);
    let rl3 = l3
    for (let i = 1 ; i<num1.length;i++){
        let temp = new ListNode(num1[i])
        l3.next = temp
        l3 = l3.next
    }
    return rl3
};
let data1 = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
let data2 = [5,6,4]
let l1 =  new ListNode(data1[0])
let _l1 = l1;
for(let i =1 ; i< data1.length; i++){
    l1.next = new ListNode(data1[i])
    l1 = l1.next;
}

let l2 =  new ListNode(data2[0])
let _l2 = l2;
for(let i =1 ; i< data2.length; i++){
    l2.next = new ListNode(data2[i])
    l2 = l2.next;
}



console.log(JSON.stringify(addTwoNumbers(_l1, _l2)));