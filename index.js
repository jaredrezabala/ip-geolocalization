const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
//usamos JSON para el cuerpo de las solicitudes
app.use(express.json())

//Definimos ruta para obtenes datos
app.get('/', (req , res) => {
    res.json({ message: "Bienvenidos a mi API"})
})

app.get('/api', (req , res) => {
    res.json({ message: "Datos Obtenidos correctamente"})
})

//Definimos ruta POST para recibir datos
app.post('/api/data', (req, res) => {
    const data = req.body
    res.json({
        message: "Datos Recibidos Correctamente",
        data: data
    })
})

//Definimos un puerto donde el servidor escuchara
/*
Cada API necesita 3 cosas
1. Un servidor (Express)
2. Rutas
3. UN puerto donde se pueda conectar al servidor
*/

const PORT = process.env.PORT || 3000
app.listen(PORT, () =>{
    console.log(`Server up and running on http://localhost:${PORT}`)
})


