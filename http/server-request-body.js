const http = require('http')
const port = 3000 

http.createServer((req, res) => {
    console.log(req.headers)
    console.log(req.method)
    console.log(req.url)
    console.log(req.statusCode)

    res.writeHead(200, {'Content-Type':'text/plain'})
    
    if(req.method == 'POST') {
        let buff = ''
        req.on('data', (chuck) => {
            buff += chuck
        } )

        req.on('end', () => {
            console.log(`BODY: ${buff}`)
            res.end(`\nAccepted body\n\n`)
        })
    }else {
        res.writeHead(200, {'Content-Type':'text/plain'})
        res.end('Hello world\n')
    }
}).listen(port)