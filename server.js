const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({
    dev
})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.get('/post/:id', (req, res) => {

            const actualPage = '/post'
            const queryParams = {
                title: req.params.id
            }
            app.render(req, res, actualPage, queryParams)
        })


        server.use('/upload', express.static('uploadImageFile'))

        // Server Routing
        require('./server/routes/fileUpload.route')(server)

        server.get('*', (req, res) => {
            handle(req, res)
        })

        server.listen(3000, (err) => {
            if (err) throw new Error(err)
            console.log('Server Started!!')
        })
    })
    .catch(err => {
        console.log(err.stack)
    })