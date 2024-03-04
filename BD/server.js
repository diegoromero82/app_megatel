const express = require('express');
const db = require('./database.js');

const app = express();
const port = 3000;

app.use(express.json());

app.post("/register_user", (req, res) => {
    console.log("verificar")
})


// Ruta para registrar un nuevo usuario
app.post('/app_megatel/public/html/registro.html', (req, res) => {
    const { nombre, email, contraseña } = req.body;
    console.log("probando")
    console.log(nombre + email + contraseña)


    // Insertar usuario en la base de datos
    db.run('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, contraseña], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Usuario registrado con éxito', userId: this.lastID });
    });
});

// Sirve archivos estáticos desde un directorio específico
app.use(express.static('public/html'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});