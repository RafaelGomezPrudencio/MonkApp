import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import exampleRoutes from './routes/routes';

// Cargar las variables de entorno
dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/api', exampleRoutes);

// Rutas (Ejemplo básico)
app.get('/', (req, res) => {
    res.send('Hello, world!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
