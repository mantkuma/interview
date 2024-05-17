const url = "https://jsonplaceholder.typicode.com/users"
function myAxios(method, url, body = null){
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url,{
        headers : headers,
        method : method,
        body: JSON.stringify(body)
    }).then((res)=>{
        return res.json()
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

