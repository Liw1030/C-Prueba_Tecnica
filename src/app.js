//Con este archivo se ejecuatara el servidor

const express = require('express'); //Aqui lo requerimos
const path = require('path'); //para no llenarme de rutas
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

const app = express();//Incializamos con una constante 

//Configurar express
app.set('port', process.env.PORT || 3000)
//Configuramos el motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middlewares, funciones que se ejecutan antes de las peticiones de los usuariso
app.use(morgan('dev'));

//conectar a mysql
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'L1zeth.15*',
    port: 3306,
    database: 'CrudfinanzasPersonales'
}, 'single'));

//rutas

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
}); //Incializamos el servidor, cuando inicie el servidar mostrara 
//un mensaje que nos diga que el servidor esta funcionando 

//en la consola con node src/app.js verificamos el funcionamiento

