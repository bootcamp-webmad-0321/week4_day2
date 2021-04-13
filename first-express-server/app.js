// 1 - Require express
const express = require('express')

// 2 - Instance app
const app = express()

// 3 - Set static files and dynamic views configs
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')

// 4 - Routing
app.get('/', (req, res) => res.render(`index-page`))

app.get('/popino-el-perro', (req, res) => res.render(`popino-page`))

app.get('/reserva', (req, res) => {

    const bookingInfo = {
        bootcamp: '<em>Web Dev</em> Bootcamp',
        studentName: 'Mario',
        campus: 'Madrid',
        date: '17 de enero',
        confirmed: true,
        subjects: ['HTML & CSS', 'MERN', 'Backend', 'SPA'],
        cost: '7000',
        pending: 3000,
        address: {
            street: 'Matadero',
            number: 14
        }
    }

    res.render('booking-page', bookingInfo)
})

// 5 - Listen
app.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))