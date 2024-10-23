"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const port = 3000;
// Configurar la carpeta "public" como estática para servir el index.html
app.use(express_1.default.static(path_1.default.join(__dirname, '../../public')));
// Configurar la carpeta "dist" para servir los archivos compilados de TypeScript
app.use('/dist', express_1.default.static(path_1.default.join(__dirname, '../../dist')));
// Servir el archivo index.html en la ruta raíz
app.get('/', (req, res) => {
    res.sendFile(path_1.default.join(__dirname, '../../public/index.html'));
});
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
