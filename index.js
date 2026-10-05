require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    console.log('Bienvenidos al curso')
    res.end('Bienvenidos al curso')
}

const server = http.createServer(requestController)

// Toma el puerto desde el archivo .env o usa el 4000 por defecto
const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})