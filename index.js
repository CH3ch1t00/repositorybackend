require('dotenv').config()
const http = require('http')

function requestController(req, res) {
    // Indicamos que responderemos con contenido HTML en formato UTF-8
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    
    // Generamos la página con diseño CSS incorporado
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Despliegue Backend</title>
        <style>
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
                min-height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #ffffff;
            }
            .card {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
                padding: 40px;
                border-radius: 16px;
                box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
                text-align: center;
                max-width: 500px;
                width: 90%;
            }
            h1 {
                font-size: 2.5rem;
                margin-bottom: 15px;
                color: #00d2ff;
            }
            p {
                font-size: 1.2rem;
                margin-bottom: 25px;
                color: #e0e0e0;
            }
            .info {
                display: inline-block;
                background: #00d2ff;
                color: #0f172a;
                padding: 10px 20px;
                border-radius: 20px;
                font-weight: bold;
                font-size: 0.95rem;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Bienvenidos al curso</h1>
            <p>Servicio Web desplegado exitosamente en Render</p>
            <div class="info">Estudiante: Sergio Andre Ponce Moron</div>
        </div>
    </body>
    </html>
    `
    
    res.end(htmlContent)
}

const server = http.createServer(requestController)

const PORT = process.env.PORT || 4000

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})