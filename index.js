const express = require ('express');
const app = express();

let texto = "";

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

app.listen(3000, () => {
    console.log("Servidor furulando en el puerto 3000");
});