import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Configurar la carpeta "public" como estática para servir el index.html
app.use(express.static(path.join(__dirname, '../../public')));

// Configurar la carpeta "dist" para servir los archivos compilados de TypeScript
app.use('/dist', express.static(path.join(__dirname, '../../dist')));

// Servir el archivo index.html en la ruta raíz
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
