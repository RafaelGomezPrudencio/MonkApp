import { useState } from 'react'
import './App.css'

function App() {
  const [nombre, setNombre] = useState<string>(''); 
  
  const entregar = () => {
    alert(`Nombre entregado: ${nombre}`);
  };

  return (
    <div className="center-box">
        <input 
            type="text" 
            placeholder="Introduce tu nombre" 
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            id="nombre"
        />
        <button onClick={entregar}>Entregar</button>
    </div>
);
}

export default App
