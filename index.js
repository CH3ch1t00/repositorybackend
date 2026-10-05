require('dotenv').config()
const http = require('http')

function requestController(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Bienvenidos al curso</h1>')
}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function(){
    console.log("Aplicacion corriendo en: " + PORT)
})
