// server.js

const express = require('express');
const db = require('./database.js');

const app = express();
const port = 3000;

app.use(express.json());

// Ruta para registrar un nuevo usuario
app.post('/registro', (req, res) => {
    const { nombre, email, contraseña } = req.body;

    // Insertar usuario en la base de datos
    db.run('INSERT INTO usuarios (nombre, email, contraseña) VALUES (?, ?, ?)', [nombre, email, contraseña], function (err) {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: 'Usuario registrado con éxito', userId: this.lastID });
    });
});

// Sirve archivos estáticos desde el directorio actual
app.use(express.static(__dirname));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
