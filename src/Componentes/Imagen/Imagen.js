import React, { Component } from 'react';
import './Imagen.css';

class Imagen extends Component {
    constructor(props){
        super(props);

        this.getNombreFichero = this.getNombreFichero.bind(this);
    }

    getNombreFichero(){
      return "img/" + this.props.numFallos + ".png";
    }

  render() {
    return (
      <img src ={this.getNombreFichero()} alt="imagen" />
    );
  }
}

export default Imagen;