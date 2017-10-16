import React, { Component } from 'react';
import Imagen from './Componentes/Imagen/Imagen';
import Guiones from './Componentes/Guiones/Guiones';
import Botonera from './Componentes/Botonera/Botonera';
import './App.css';

class App extends Component {
  constructor (props){
    super (props);

    this.state = {
      numFallos: 0,
      palabraAdivinadaHastaElMomento: "-------"
    };
  }
  render() {
    return (
      <div>
        <Imagen numFallos={this.state.numFallos}/>
        <Guiones guiones={this.state.palabraAdivinadaHastaElMomento}/>
        <Botonera />
      </div>
    );
  }
}

export default App;
