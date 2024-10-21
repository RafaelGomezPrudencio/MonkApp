import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Configurar la carpeta "dist" de Vite para servir los archivos estáticos
app.use(express.static(path.join(__dirname, '../../dist')));

// Para cualquier otra ruta, devolver el index.html de Vite
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
