import ex from 'express'
import path from 'path'
//import insert_record from '.db.js'

const app = ex()

app.use(ex.static("frontend"))
app.use(ex.json())
app.use(ex.urlencoded({}))

const local_path = path.resolve()

app.listen('5000', function(req, res){
    console.log("Servidor iniciado")
})

app.post('/clientes',(req, res) => {
    let {nombre, email, telefono, empresa} = req.body
    console.log(nombre + " " + email + " " + telefono + " " + empresa)
})

app.post('/register_user', (req, res) => {
    let {email, password} = req.body
    console.log(email + " " + password)
    res.sendFile(local_path + "/frontend/clientes.html")
})