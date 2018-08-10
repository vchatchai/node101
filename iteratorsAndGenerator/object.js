var o = {
    createIerator:function *(items) {
        for (let i=0; i< items.length; i++){
            yield items[i]
        }
    }


};

let o2 = {
    *createIterator2(items) { 
        for(let i=0; i< items.length; i++){
            yield items[i]
        }
    }
};


let iterator = o.createIerator([1,2,3])

let iterator2 = o2.createIterator2([1,2,3])
