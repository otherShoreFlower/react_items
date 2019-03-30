// import qs from "querystring"

export function httpGet(url){
    const result = fetch(url)
    return result;
}
export function httpPost(url,data){
    console.log(data);
    const result = fetch(url,{
            method: "POST",
            header: {
                'content-type': 'application/x-www-form-urlencoded'
            },
            body:setParams(data)
    })
    return result;
}

function setParams(data){
    
    
    var result = ""
    // for...in
    for(var key in data){
        result = data[key];
        // result = &name=iwen&age=20
        console.log(data[key]);
    }
    if(result){
        return result;
    }
    
}