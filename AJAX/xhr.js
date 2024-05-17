//AJAX is asynchronous
//Once Data Recieved it will call callback function
const url = "https://jsonplaceholder.typicode.com/users"
function myAxios(method, url, body = null){
return new Promise((resolve, reject)=>{
const xhr = new XMLHttpRequest();
xhr.open(method, url)
xhr.responseType='json'
xhr.setRequestHeader('Content-Type','application/json')
xhr.onload = ()=>{
    if(xhr.status>=400){
        reject({error: "Something went wrong"})
    }else{
    resolve(xhr.response)
    }
}
xhr.onerror=()=>{
    reject({error: "Something went wrong"})
}
xhr.send(JSON.stringify(body));
})
}


myAxios('GET', url).then((data)=>{
    console.log(data)
})

myAxios('POST', url, {
    name: 'Mantosh Kumar',
    job : 'TechLead'
}).then((data)=>{
    console.log(data)
})
