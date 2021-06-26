import React from 'react'
import './App.css';


const hola = (nombre) => {
  return <div>
    <p>Hola estoy escribiendo en la pagina y mi nombre es {nombre}.</p>
    <p>Podria tener mas TAGS aca, pero si no lo encierro todo en 1, me devuelve un error.</p>
  </div>
}

export default function App() {

  let nombre = "Christian"

  return (
    <div className="App">
      {hola(nombre)}
    </div>
  );
}

