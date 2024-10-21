import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Especifica el puerto aquí (puedes cambiar 3000 por el número de puerto que prefieras)
  },
  build: {
    outDir: 'dist', // Salida de la compilación
  },
});
