import React from 'react';
import './App.css';
import ImagenFondo from './static/img/pantalla.svg';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello World</h1>
            </header>
            <div>
                <section class="nav-image-container">{<img src={ImagenFondo} alt="screen" />}</section>
            </div>
        </div>
    );
}

export default App;
