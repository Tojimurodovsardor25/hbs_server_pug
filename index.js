const express = require("express")
const app = express()
// const path = require('path')
const exphbs = require('express-hadlebars')

const hbs = exphbs.create()

app.engine('hbs',exphbs())

// app.use(express.static(path.join(__dirname, 'public')))


//pug ulash
// app.set('views engine', 'pug')
// app.set('views', path.join(__dirname, 'views'))

// app.set('views engine', 'pug')

// app.get('/', (req, res) => {
//     res.render('index.pug',{
//         title:'home page'
//     })
// })
// app.get('/contact', (req, res) => {
//     res.render('contact.pug',{
//         title:'contact page'
//     })
// })

const port = 3000

app.listen(port, () => {
    console.log(`Express working on 3000 port`);
})