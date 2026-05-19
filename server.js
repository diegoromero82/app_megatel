import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Para obtener __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir contenido estático
app.use(express.static(path.join(__dirname, 'frontend')));
app.use(express.static(path.join(__dirname, 'public')));

// Parseo de body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas principales
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

app.post('/clientes', (req, res) => {
    const { nombre, email, telefono, empresa } = req.body;
    console.log('POST /clientes ->', nombre, email, telefono, empresa);
    res.status(200).send('OK');
});

app.post('/proveedores', (req, res) => {
    const { nit, email, telefono, empresa } = req.body;
    console.log('POST /proveedores ->', nit, email, telefono, empresa);
    res.status(200).send('OK');
});

app.post('/register_user', (req, res) => {
    const { email, password } = req.body;
    console.log('POST /register_user ->', email);
    res.sendFile(path.join(__dirname, 'frontend', 'clientes.html'));
});

// Solo escuchar en local, Vercel maneja el listen
if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Servidor iniciado en http://localhost:${PORT}`);
    });
}

export default app;