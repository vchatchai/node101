const promise = new Promise( (resolve, reject)=> {
    resolve()
    // reject()
})

promise.then( function(){
 console.log('props', arguments);
})

promise.catch(() => { 
    console.log('this.props')
})