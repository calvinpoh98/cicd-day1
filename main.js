const express = require('express');
const {engine} = require('express-handlebars');

const PORT = parseInt(process.env.PORT) || 3000

const app = express();

app.get('/time',(req,resp) => {
    resp.send({time: (new Date()).toISOString()})
})

app.use(express.static(__dirname + "/static"));

app.listen(PORT,() => {
    console.info(`Application started on ${PORT} at ${new Date()}`);
})