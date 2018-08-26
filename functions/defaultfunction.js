function makeRequest(url, timeout=2000, callback= function(){}){
    console.log(`url ${url}`)
    console.log(`timeout ${timeout}`)
    console.log(`callback ${callback}`)
}


makeRequest("/foo")
makeRequest("/foo", 500)
makeRequest("/foo", 500, function(boxy){
    console.log("call function")
})

makeRequest("/foo",undefined)
makeRequest("/foo",null)