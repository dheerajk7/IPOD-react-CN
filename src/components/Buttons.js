import React, { Component } from 'react';
import '../assets/css/buttons.css';

class Buttons extends Component {
  render() {
    return (
      <div className="button-container">
        <div className="button-region-container">
          <div className="inner-button-container">
            <div className="up-button-container"></div>
            <div className="center-button-container"></div>
            <div className="down-button-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Buttons;
