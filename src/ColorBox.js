import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {

    let opacityValue

    if (this.props.opacity >= 0.2) {
      opacityValue = <ColorBox opacity={this.props.opacity - 0.1} />
      } else {
        opacityValue = null
      }

    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {opacityValue}
      </div>
    )
    
  }

}

