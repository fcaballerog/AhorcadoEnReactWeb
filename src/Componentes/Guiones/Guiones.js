import React, { Component } from 'react';
import './Guiones.css';

class Guiones extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <p id="guiones">{this.props.guiones}</p>
    );
  }
}

export default Guiones;