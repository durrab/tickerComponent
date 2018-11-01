
import './css/flexbox.css';
import React from 'react';
import { VelocityComponent, velocityHelpers } from 'velocity-react';
import { Box } from '../demo/components/Box';
import Marquee from "react-smooth-marquee"


class Demo extends React.Component {
  render() {
    var boxStyle = {
      backgroundColor: '#efefef',
      margin: 10,
      padding: '0 0 10px 0',
      width: 200,
      height: 300,
    };

    var headingStyle = {
      margin: '10px 0',
      padding: '0 0 10px 0',
      width: '100%',
      textAlign: 'center',
      fontWeight: 200,
      fontSize: 14,
      borderBottom: '1px solid #e5e5e5',
    };

    return (
      <div className="flex-box flex-column align-items-center" style={boxStyle}>
        <h3 style={headingStyle}>{this.props.title}</h3>
        {this.props.children}
      </div>
    );
  }
}

class MainComponent extends React.Component {
  render() {
    return (
      <div className="flex-box flex-wrap">
      <Demo title="Durrab Test">
        <Marquee>
        <div>Durrab Jami Khan</div>
        </Marquee>
      </Demo>
      </div>
    );
  }
}

module.exports = MainComponent
