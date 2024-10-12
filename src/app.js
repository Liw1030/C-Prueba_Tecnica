//Con este archivo se ejecuatara el servidor

const express = require('express'); //Aqui lo requerimos
const app = express();//Incializamos con una constante 

//Configurar express
app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('server on port 3000')
}); //Incializamos el servidor, cuando inicie el servidar mostrara 
//un mensaje que nos diga que el servidor esta funcionando 

//en la consola con node src/app.js verificamos el funcionamiento

