let colors = ["red","green", "blue"];
let tracking = new Set([1234,5678,9012]);
let data = new Map();

data.set("title", "Understading ECMAScript 6")
data.set("format", "ebook")


for (let entry of colors.entries()){
    
    console.log(entry,entry["0"],entry["1"])
}

for (let entry of tracking.entries()){
    console.log(entry)
}

for (let entry of data.entries()){
    console.log(entry)
}
for (let [i,k] of data.entries()){
    console.log(i,k)
}


for(let key of colors.keys()){
    console.log(key);
}

for(let key of tracking.keys()){
    console.log(key);
}

for(let key of data.keys()){
    console.log(key);
}

for(let v in colors){
    console.log(v)
}