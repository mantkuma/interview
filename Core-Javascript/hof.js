(function(){
    function area(radius){
        return Math.PI*radius*radius
    }

    function circumference(radius){
        return 2*Math.PI*radius
    }

    let radius = [1,2,3,4,5];
   const res =  radius.reduce((acc, ele)=>{
        acc.push(area(ele));
        return acc;
    },[])
    console.log(res);
    console.log(radius.map(area));
    console.log(radius.map(circumference));



})();