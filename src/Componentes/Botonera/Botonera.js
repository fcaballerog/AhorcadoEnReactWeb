import React, { Component } from 'react';
import './Botonera.css';

class Botonera extends Component {
    letras = ["A", "B", "C", "D", "E", "F", "G",
              "H", "I", "J", "K", "L", "M", "N",
              "Ñ", "O", "P", "Q", "R", "S", "T",
              "U", "V", "W", "X", "Y", "Z", "*"
            ];

    constructor(props){
        super(props);
    }

  getBotones() {
    return (
      this.letras.map((letra) => (<button>{letra}</button>))
    );    
  }

  render() {
    return (
      <div id="botonera">
        {this.getBotones()}
      </div>
    );
  }
}

export default Botonera;