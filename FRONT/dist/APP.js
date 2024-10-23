import React from 'react';
import ReactDOM from 'react-dom';
const App = () => {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Hola desde React con TypeScript!"),
        React.createElement("p", null, "Esta es mi primera app usando React y TypeScript.")));
};
ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
