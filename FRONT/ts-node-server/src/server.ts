import express from 'express';
import path from 'path';

// Inicializamos la aplicación Express
const app = express();
const port = 3000;

// Configuramos el servidor para que sirva el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// Iniciamos el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
