const http = require('http')
const port = 3000
http.createServer((request, response) => {
    response.statusCode = 200
    response.write('Hello')
    response.end(' World\n')
    response.writeHead(404, {
                // 'Content-Length': response,
                'Content-Type': 'text/plain' 
            })
}).listen(port)

console.log(`Server running at http://localhost:${port}/`)