const http = require('http')

const server = http.createServer((req, res) => {

    const { url } = req

    if (url === '/') {
        res.write(`<h1>¡Bienvenid@! Estás en inicio :3</h1>`)
    }
    else if (url === '/productos') {
        res.write(`<h1>Estos son nuestros productos :3</h1>`)
    }
    else if (url === '/contacto') {
        res.write(`<h1>Aquí puedes contactar con nosotr@s</h1>`)
    } else {
        res.statusCode = 404
        res.write('<h1>404: no se encontró la página</h1>')
    }

    res.end()
})

server.listen('3000', () => console.log('Servidor levantado en el puerto 3000'))