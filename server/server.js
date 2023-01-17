const express = require('express')
const bodyParser = require('body-parser')
const pool = require("./db.conf");
const app = express()
const port = process.env.PORT;

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})