for(let p=0; p<=5;p++)
{
    setTimeout(()=>{
    console.log(p)
},1000+p)
}

setTimeout(function() {
  console.log('setTimeout')
}, 0)

setImmediate(function() {
  console.log('setImmediate')
})