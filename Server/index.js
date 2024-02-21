const http = require('http')
const server = http.createServer((request, response) => {
    response.end("hellow from the other side ")
})
server.listen(3000, () => {
    console.log("listening")
})