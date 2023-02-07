const express = require('express')
const app = express()
const port = 5000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')

app.get('/', (req, res) => {
    const connection = mysql.createConnection(config)

    connection.query(`INSERT INTO people(name) values('Filipe')`)

    connection.query("SELECT * FROM people ORDER BY id DESC", (err, results) =>  {
        if (err) throw err;
        const objects = Object.values(JSON.parse(JSON.stringify(results)))
        const header = '<h1>Full Cycle Rocks!</h1>'
        const data = objects.reduce((acc, cur) => acc + '<p>' + cur.id + ' ' + cur.name + '</p>', header);
        res.send(data)
    });

    connection.end()
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})