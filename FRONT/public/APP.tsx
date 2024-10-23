import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <h1>Hola desde React con TypeScript!</h1>
      <p>Esta es mi primera app usando React y TypeScript.</p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));