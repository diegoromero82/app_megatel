// database.js

const sqlite3 = require('sqlite3').verbose();

// Conectar a la base de datos (si no existe, se creará automáticamente)
const db = new sqlite3.Database('./usuarios.db');

// Crear tabla de usuarios si no existe
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        contraseña TEXT NOT NULL
    )`);
});

module.exports = db;
